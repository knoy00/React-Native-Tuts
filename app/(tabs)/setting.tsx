import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useRouter } from 'expo-router'

export default function Setting() {
    const router = useRouter();
    const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Counter</Text>
      <Text style={styles.countTitle}>Tap the button below to increase count</Text>
      <Text style={styles.countTitle}>{count}</Text>

      <Button 
      title =  'Count'
      onPress={() =>{setCount(count + 1) }}
      />
      <Button 
      title =  'Go to home'
      onPress={() => router.push('/')}
      />
    </View>
  )
}


//Stylesheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#efefef',
        alignItems: 'center',
        justifyContent: 'center'

    },
    text: {
        color: '#ff4500',
        fontSize: 40
    },
    countTitle: {
        fontSize: 25,
        color: '#efefef',
        marginTop: 30
    }
})