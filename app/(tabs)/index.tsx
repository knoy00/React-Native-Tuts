import { View, Text, StyleSheet, Button, TextInput, FlatList } from 'react-native' // 
import React, { useState } from 'react'
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  const [fruits] = useState([
    {id: '1', name: 'Apple'},
    {id: '2', name: 'Orange'},
    {id: '3', name: 'Banana'},
    {id: '4', name: 'Grape'},
    {id: '5', name: 'Guava'},
  ])

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

      <Text style={styles.name}>{`My name is: ${name}`}</Text>
      
      <Button 
      title="Go to Explore"
      onPress={() => router.push('/(tabs)/explore')}
      />

      <Button 
      title="Go to Explore"
      onPress={() => router.push('/(tabs)/explore')}
      />

      <Button 
      title="Go to Profile"
      onPress={() => router.push('/(tabs)/profile')}
      />

      <FlatList
      data={fruits}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => (
        <Text style={styles.listStyle}>{item.name}</Text>
      )}
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
  },
  name: {
    fontSize: 20,
    color: 'green'
  },
  listStyle: {
    color: '#ffffff',
    fontSize: 18,
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
    textAlign: 'center',
  }
  
});