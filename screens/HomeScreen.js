import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Welcome to WineScanner</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3498db' }]}
          onPress={() => {
            navigation.navigate('Camera');
          }}
        >
          <Text style={styles.buttonText}>Ouvrir la caméra</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3498db' }]}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcfeb', 
  },
  appName: {
    fontSize: 34,
    fontWeight: 'bold',
    color: 'black', 
    marginBottom: 50,
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 320,  
    height: 270, 
  },
  buttonContainer: {
    flexDirection: 'row', // Aligner les boutons dans une ligne
  },
  button: {
    flex: 1, // Occupe tout l'espace disponible
    margin: 6, // Marge entre les boutons
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'black', // Couleur du texte blanc
    fontSize: 18,
  },
});

export default HomeScreen;
