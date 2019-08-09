import React from 'react';
//no lugar de VIEW usar KeyboardAvoidingView no iOS para o teclado não sobrepor o input
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity } from 'react-native';

import logo from '../assets/logo.png'

export default function Login({ navigation }){
  function handleLogin(){
    navigation.navigate('Main');
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
      enabled={Platform.OS === 'ios'}
    >
      <Image source={logo} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário no github"
        placeholderTextColor="#999"
        style={styles.input}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Enviar</Text>
       </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,

  },

  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#FFF',
    borderColor: '#DDD',
    borderRadius: 4,
    marginTop: 20,
    paddingHorizontal: 15,
  },

  button: {
    height: 46,
    alignSelf: "stretch",
    backgroundColor: "#DF4723",
    borderRadius: 4,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16
  }
});
