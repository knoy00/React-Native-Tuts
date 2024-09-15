import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import React from 'react'

export default function ImageList({headerText, data, imageStyle, containerStyle}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{headerText}</Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.imageRow}>
        {data.map((item, index) => {
              // Log the entire item object
            return (
                <View key={index} style={[styles.imageContainer, containerStyle]}>
                    <Image source={item.image} style={[styles.image, imageStyle]} />
                    {item.name && <Text style={styles.imageName}>{item.name}</Text>}
                    {item.description && <Text style={styles.descriptionText}>{item.description}</Text>}
                </View>
            );
        })}
        

        </View>
        <Text style={styles.imageName}>hello</Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      padding: 15,
    },
    header: {
      fontSize: 23,
      fontWeight: 'bold',
      color: '#ffffff',
    },
    imageRow: {
      flexDirection: 'row',
      gap: 15,
      marginTop: 15,
    },
    imageContainer: {
      width: 180,
      height: 180,
      borderRadius: 10,
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    imageName: {
      color: '#ffffff',
      marginTop: 5,
      fontSize: 16,
    },
    descriptionText: {
        color: '#efefef',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingTop: 10,
        position: 'absolute',
        marginBottom: 0
    }
  });