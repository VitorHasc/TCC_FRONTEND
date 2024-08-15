import { Text, View, TouchableOpacity, Modal} from 'react-native';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../../../styles/StylesCentral';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { Picker } from '@react-native-picker/picker';

export default function FilterModel({ modalVisible, setModalVisible, setGenero, setIdade, setEsporte, genero, idade, esporte }) {
  const [generoModal, setGeneroModal] = useState(false);
  const [idadeModal, setIdadeModal] = useState(false);
  const [esporteModal, setEsporteModal] = useState(false);

  const handleIdadeChange = (values) => {
    setIdade(values);
  };

  return (
    <Modal transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
      <Animatable.View animation="fadeInDown" duration={200} style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
            <Icon name="close" color='grey' size={40} />
          </TouchableOpacity>

          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => setGeneroModal(true)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, width: '100%' }}>
                <Text style={{ fontSize: 30, marginHorizontal: 20 }}>Gênero</Text>
                <Text style={{ fontSize: 30, color: 'grey' }}>{genero || ''}</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setIdadeModal(true)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, width: '100%' }}>
                <Text style={{ fontSize: 30, marginHorizontal: 20 }}>Idade</Text>
                <Text style={{ fontSize: 30, color: 'grey' }}>
                  {idade ? `${idade[0]} - ${idade[1]}` : ''}
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setEsporteModal(true)}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20, width: '100%' }}>
                <Text style={{ fontSize: 30, marginHorizontal: 20 }}>Esporte</Text>
                <Text style={{ fontSize: 30, color: 'grey' }}>{esporte || ''}</Text>
              </View>
            </TouchableOpacity>

          </View>

          {/* Gênero Modal */}
          <Modal transparent={true} visible={generoModal} onRequestClose={() => setGeneroModal(false)}>
            <Animatable.View animation="fadeInDown" duration={500} style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={() => setGeneroModal(false)}>
                  <Icon name="close" color='grey' size={40} />
                </TouchableOpacity>
                <Picker
                  selectedValue={genero || 'misto'}
                  style={styles.picker}
                  onValueChange={(itemValue) => setGenero(itemValue)}
                >
                  <Picker.Item label="Homem" value="masc" />
                  <Picker.Item label="Mulher" value="fem" />
                  <Picker.Item label="Misto" value="misto" />
                </Picker>
              </View>
            </Animatable.View>
          </Modal>

          {/* Idade Modal */}
          <Modal transparent={true} visible={idadeModal} onRequestClose={() => setIdadeModal(false)}>
            <Animatable.View animation="fadeInDown" duration={500} style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={() => setIdadeModal(false)}>
                  <Icon name="close" color='grey' size={40} />
                </TouchableOpacity>
                <View style={{ alignItems: 'center' }}>
                  <MultiSlider
                    values={idade || [18, 35]}
                    sliderLength={280}
                    onValuesChange={handleIdadeChange}
                    min={1}
                    max={120}
                    step={1}
                    allowOverlap={false}
                    snapped
                  />
                  <Text style={{ fontSize: 24, marginTop: 10 }}>
                    {idade ? `${idade[0]} - ${idade[1]}` : 'Selecionar'}
                  </Text>
                </View>
              </View>
            </Animatable.View>
          </Modal>

          {/* Esporte Modal */}
          <Modal transparent={true} visible={esporteModal} onRequestClose={() => setEsporteModal(false)}>
            <Animatable.View animation="fadeInDown" duration={500} style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={() => setEsporteModal(false)}>
                  <Icon name="close" color='grey' size={40} />
                </TouchableOpacity>
                <Picker
                  selectedValue={esporte || 'nenhum'}
                  style={styles.picker}
                  onValueChange={(itemValue) => setEsporte(itemValue)}
                >
                  <Picker.Item label="Nenhum" value="nenhum" />
                  <Picker.Item label="Futebol" value="futebol" />
                  <Picker.Item label="Basquete" value="basquete" />
                  <Picker.Item label="Tênis" value="tenis" />
                </Picker>
              </View>
            </Animatable.View>
          </Modal>

        </View>
      </Animatable.View>
    </Modal>
  );
}
