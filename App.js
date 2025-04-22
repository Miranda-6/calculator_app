import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, TextInput, Button, View, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import React from 'react';
//import { Button, TextInput } from 'react-native-web';

export default function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  const realizarOperacion = (operador) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (!isNaN(num1) && !isNaN(num2)) {
      if(operador == '+'){
        setResultado(num1 + num2);
      }else if(operador == '-'){
        setResultado(num1 - num2);
      }else if(operador == '*'){
        setResultado(num1 * num2);
      }else if(operador == '/'){
        setResultado(num1 / num2);
      }
    } else {
      setResultado('Por favor ingrese números válidos');
    }

  }

  return (
    <View style={styles.container}>
      <Image
            source={{uri: 'https://img.icons8.com/?size=100&id=6gwMy8qlY6nG&format=png&color=000000'}}
            style={styles.operatorImage}
            />
      <Text style={styles.header}>Calculadora de operaciones</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Primer numero'
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder='Segundo numero'
        value={numero2}
        onChangeText={setNumero2}
      />

        <View style={styles.row}>

          <TouchableOpacity
            onPress={() => realizarOperacion('+')}>
            <Image
            source={{uri: 'https://img.icons8.com/?size=100&id=1501&format=png&color=000000'}}
            style={styles.operatorImage}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => realizarOperacion('-')}>
            <Image
            source={{uri: 'https://img.icons8.com/?size=100&id=1504&format=png&color=000000'}}
            style={styles.operatorImage}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => realizarOperacion('*')}>
            <Image
            source={{uri: 'https://img.icons8.com/?size=100&id=6483&format=png&color=000000'}}
            style={styles.operatorImage}
            />
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => realizarOperacion('/')}>
            <Image
            source={{uri: 'https://img.icons8.com/?size=100&id=79024&format=png&color=000000'}}
            style={styles.operatorImage}
            />
            </TouchableOpacity>

        </View>

        {resultado !== null && (
        <Text style={styles.result}>Resultado: {resultado}</Text>
      )}
    

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    width: '100%',
    paddingLeft: 10,
    fontSize: 18,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
  operatorImage: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 100,
    marginRight: 30,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});