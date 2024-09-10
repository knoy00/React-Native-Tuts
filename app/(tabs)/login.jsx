import { View, Text, StyleSheet, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react'

export default function Loggin() {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleLogin(userName, password){
        if(userName ==='' && password === ''){
            Alert.alert('Please enter username and password')
        }
        else{
            Alert.alert('Login successfull')
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
      style={styles.input}
      placeholder = 'Username'
      value = {userName}
      onChangeText={setUserName}
      />
        
      <TextInput
      style={styles.input}
      placeholder='Password'
      value = {password}
      onChangeText={setPassword}
       />

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        height: 1000,
        marginTop: 0

    },

    title: {
        color: '#000000',
        fontSize: '45px',
        textAlign: 'center',
        paddingBottom: '30px',

    },
    input: {
        height: 40,
        borderColor: '#000000',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '80%',
        marginTop: 20,
        color: '#000000',
        fontSize: '25px',
        borderRadius: 10

    },
    button: {
        backgroundColor: '#6200ee',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
})
