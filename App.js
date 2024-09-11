import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

const App = () => {
  const [modalScreen, setModalScreen] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalScreen}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalScreen(!modalScreen);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>This is modal...</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalScreen(!modalScreen)}>
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalScreen(true)}>
        <Text style={styles.textStyle}>Show modal message</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    padding: 60,
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
   
    elevation: 5,
  },
  button: {
    padding: 20,
    elevation: 5,
  },
  buttonOpen: {
    backgroundColor: '#4e12e7',
  },
  buttonClose: {
    backgroundColor: '#4e12e7',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default App;