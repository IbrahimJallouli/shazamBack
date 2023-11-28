import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';

const InscriptionScreen = () => {
  const [nomUtilisateur, setNomUtilisateur] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [email, setEmail] = useState('');

  const handleInscription = () => {
    console.log('Nom d\'utilisateur:', nomUtilisateur);
    console.log('Mot de passe:', motDePasse);
    console.log('Email:', email);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>Inscription</Text>
        <TextInput
          placeholder="Nom d'utilisateur"
          style={styles.input}
          value={nomUtilisateur}
          onChangeText={setNomUtilisateur}
        />
        <TextInput
          placeholder="Mot de passe"
          secureTextEntry
          style={styles.input}
          value={motDePasse}
          onChangeText={setMotDePasse}
        />
        <TextInput
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#3498db' }]}
          onPress={handleInscription}
        >
          <Text style={styles.buttonText}>S'inscrire</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#abcfeb', 
    padding: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom: 20,
    color: 'black', 
  },
  input: {
    height: 40,
    borderColor: '#0d0d0d',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
    width: '80%',
    borderRadius: 8,
  },
  button: {
    margin: 10,
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

export default InscriptionScreen;
