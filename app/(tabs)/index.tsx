import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'


export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container} accessibilityLabel='container'>
        <View style={styles.titleBar} accessibilityLabel='titleBar'>
          <Text style={styles.titleBar_Title}>Home</Text>
        </View>

  {/* Top picks section with images */}
        <View style={styles.topPicks}  accessibilityLabel='topPicks'>
          <View >
            <Text style={styles.topPicks_header}>Top Picks for You</Text>

            <ScrollView contentContainerStyle={styles.scrollContent} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.topPicks_img_container}>

                  <View accessibilityLabel='artistes' style={styles.imageContainer}>
                      <Image
                      source={require('../../assets/images/drake.jpg')}
                      style={styles.img_artiste}
                      />
                  </View>

                  <View accessibilityLabel='artistes' style={styles.imageContainer}>
                      <Image
                      source={require('../../assets/images/future.jpg')}
                      style={styles.img_artiste}
                      />
                  </View>

                  <View accessibilityLabel='artistes' style={styles.imageContainer}>
                      <Image
                      source={require('../../assets/images/young_thug.jpg')}
                      style={styles.img_artiste}
                      />
                  </View>
              </View>
            </ScrollView>
          </View>
        </View>

        <View style={styles.explore}  accessibilityLabel='explore'>
          <View >
            <Text style={styles.topPicks_header}>Explore</Text>

            <ScrollView contentContainerStyle={styles.scrollContent} horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={styles.topPicks_img_container}>

                  <View accessibilityLabel='artistes' style={styles.imageContainer}>
                      <Image
                      source={require('../../assets/images/drake.jpg')}
                      style={styles.img_artiste}
                      />
                  </View>

                  <View accessibilityLabel='artistes' style={styles.imageContainer}>
                      <Image
                      source={require('../../assets/images/future.jpg')}
                      style={styles.img_artiste}
                      />
                  </View>

                  <View accessibilityLabel='artistes' style={styles.imageContainer}>
                      <Image
                      source={require('../../assets/images/young_thug.jpg')}
                      style={styles.img_artiste}
                      />
                  </View>
              </View>
            </ScrollView>
          </View>
        </View>

        
        
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    height: "100%",
    width: "100%",
    color: "#ffffff"
  },
  
  scrollContent: {
    paddingBottom: 20, 
  },

  titleBar: {
    width: "100%",
    height: "10%",
    marginTop: 30,
    paddingLeft: 10
  },

  titleBar_Title: {
    fontSize: 35,
    color: "#ffffff",
    marginTop: 40,
    fontWeight: "bold"
  },

  topPicks: {
    width: "100%",
    height: "58%",
    marginTop: 10,
    padding: 15,
  },

  topPicks_header: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#ffffff"

  },

  topPicks_img_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    gap: 20,
  

  
  },

  imageContainer: {
    width: 320,
    height: 400,
    backgroundColor: "red",
    borderRadius: 10
  },

  img_artiste: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },

  explore: {
    marginTop: -100,
    width: "100%",
    height: "58%",
    padding: 15,
  },

  explore_header: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "Poppins",
    color: "#ffffff"
  },

  


})