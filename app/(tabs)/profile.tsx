import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router';

export default function Profile() {
    const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.btn} onPress={()=> router.push('/(tabs)/explore')}>Tap to go explore</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,

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
        margin: 'auto',
        borderRadius: 10,
        padding: 10,
        userSelect: 'none'
    }
})