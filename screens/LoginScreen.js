import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Vous pouvez utiliser les valeurs de 'username' et 'password' ici
    console.log('Nom d\'utilisateur:', username);
    console.log('Mot de passe:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Nom d'utilisateur"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Mot de passe"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#3498db' }]}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>Se connecter</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Inscription')}>
        <Text style={styles.link}>Pas de compte? Inscrivez-vous ici</Text>
      </TouchableOpacity>
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
  link: {
    fontWeight: 'bold',
    marginTop: 20,
    color: 'red',
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

export default LoginScreen;
