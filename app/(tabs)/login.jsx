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
      <Text style={styles.title}>LOGIN</Text>
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

       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%', marginTop: 10}}>
        <Text style={styles.account}>Remember me</Text>
        <Text style={styles.forgotPass}>Forgot password?</Text>
       </View>

    <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '90%'}}>
        <Text style={styles.account}>Don't have an account?</Text>
        <Text style={styles.forgotPass}>Signup here</Text>
      </View>
       
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
        paddingBottom: 30,
        marginLeft: 0,
        fontWeight: 'bold'

    },
    input: {
        height: 55,
        borderColor: '#000000',
        borderWidth: 1,
        paddingHorizontal: 10,
        width: '90%',
        marginTop: 20,
        color: '#000000',
        fontSize: '25px',
        borderRadius: 0

    },
    button: {
        backgroundColor: '#000000',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 50,
        width: '90%',
        height: 55
      },
      buttonText: {
        color: '#ffffff',
        fontSize: 28,
        fontWeight: 'bold',
      },

      forgotPass: {
        color: 'green',
        fontSize: 21,
        marginTop: 20,
      },

      account: {
        fontSize: 21,
        marginTop: 20,
      }
})
