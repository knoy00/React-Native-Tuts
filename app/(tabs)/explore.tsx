import { View, Text, Button, StyleSheet} from 'react-native'
import React from 'react'
import {useRouter} from 'expo-router'

export default function Explore() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.exploreTitle}>This is the explore page</Text>
      <Text style={styles.description}>This is the explore screen. Tap on the button below to navigate to the home screen.</Text>
      <Button
        title = "Go to Home"
        onPress={() => router.push('/')}
       />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  

  },

  exploreTitle: {
    fontSize: 35,
    color: '#ff4500',
    paddingBottom: 10,


  },

  description: {
    color: '#ffffff',
    fontSize: 20,
    textAlign: 'center'
  }

})