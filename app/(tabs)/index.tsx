import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {name ? `Welcome, ${name}!` : 'Welcome to my first react native app!'}
      </Text>

      <TextInput 
      style={styles.input}
      placeholder='Enter Your Name'
      value={name}
      onChangeText={setName}
      />
      
      <Button 
      title="Go to Explore"
      onPress={() => router.push('/(tabs)/explore')}
      />

      <Button 
      title="Go to Profile"
      onPress={() => router.push('/(tabs)/profile')}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 16,
    backgroundColor: '#212121'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#ff4500',
    backgroundColor: '#efefef',
    padding: 20,
    borderRadius: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    width: '80%',
    marginBottom: 20,
    color: '#ffffff'
  }
  
});