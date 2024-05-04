import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Modal, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Video } from 'react-native-video';

export default function App() {
  const [formVisible, setFormVisible] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const navigation = useNavigation();

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    setShowLanguageModal(false);
  };

  const skip = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>   
      <View style={styles.languageContainer}>
        <Image
          source={require('../assets/D1.png')}
          style={styles.languageBackground}
        />
        <TouchableOpacity style={styles.languageButtonLeft} onPress={() => setShowLanguageModal(true)}>
          <Text style={styles.skipButtonText}>Change Language</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.skipButtonRight} onPress={skip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.background, formVisible ? styles.formVisible : styles.formHidden]}>
        {formVisible && (
          <View style={styles.form}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleFormVisibility}>
              <FontAwesome name="times" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}></TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.buttonText}>{selectedLanguage === 'English' ? 'Se connecter' : 'Se connecter'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookButton}>
              <FontAwesome name="facebook" size={24} color="white" />
              <Text style={styles.facebookButtonText}>{selectedLanguage === 'English' ? 'Continue with Facebook' : 'Continuer avec Facebook'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton}>
              <FontAwesome name="google" size={24} color="white" />
              <Text style={styles.googleButtonText}>{selectedLanguage === 'English' ? 'Continue with Google' : 'Continuer avec Google'}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appleButton}>
              <FontAwesome name="apple" size={24} color="white" />
              <Text style={styles.appleButtonText}>{selectedLanguage === 'English' ? 'Continue with Apple' : 'Continuer avec Apple'}</Text>
            </TouchableOpacity>
            <View style={styles.orButton}>
              <Text style={styles.orText}>Or</Text>
            </View>
            <TouchableOpacity style={styles.emailButton}>
              <Text style={styles.emailButtonText}>{selectedLanguage === 'English' ? 'Continue with email' : 'Continuer avec email'}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Modal
        visible={showLanguageModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowLanguageModal(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Language</Text>
            <Button title="English" onPress={() => changeLanguage('English')} />
            <Button title="French" onPress={() => changeLanguage('French')} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'flex-end',
  },
  background: {
    backgroundColor: '#fff',
    paddingBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  formVisible: {
    height: '50%',
  },
  formHidden: {
    height: '0',
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  closeButton: {
    position: 'absolute',
    top: 1,
    right: 15,
    zIndex: 1,
  },
  buttons: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 30,  
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    width: '80%',
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  facebookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  googleButton: {
    backgroundColor: '#dd4b39',
    width: '80%',
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  googleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  appleButton: {
    backgroundColor: '#000',
    width: '80%',
    height: 40,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  appleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  orButton: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  orText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  emailButton: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  emailButtonText: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
  },
  languageContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', 
    height: '100%',
  },
  languageBackground: {
    position:'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
    width: '100%',
    height: '100%',
  },
  languageButtonLeft: {
    position: 'absolute',
    top: 40,
    left: 20,
    zIndex: 1,
    color: '#fff',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  skipButtonRight: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    color: '#fff',
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  skipButtonText: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
