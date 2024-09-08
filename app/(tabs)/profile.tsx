import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function Profile() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.btn} onPress={()=> router.push('/(tabs)/explore')}>Tap to go explore</Text>
      <Text style={styles.newProfile}>Create a new profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'center'

    },
    title: {
        color: '#ff4500',
        textAlign: 'center',
        fontSize: 35
    },
    btn: {
        marginTop: 50,
        color: '#ff4500',
        textAlign: 'center',
        fontSize: 20,
        backgroundColor: '#efefef',
        width: '50%',
        padding: 10,
        height: 40
    },
    newProfile: {
        color: '#22b600',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 50,
        textAlign: 'center',

    }
})