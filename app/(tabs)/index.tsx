import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container} accessibilityLabel='container'>
        <View style={styles.titleBar} accessibilityLabel='titleBar'>
          <Text style={styles.titleBar_Title}>Home</Text>
        </View>

        {/* *******************************************************Top picks section with images************************************************************************** */}

        <View style={styles.topPicks} accessibilityLabel='topPicks'>
        <Text style={[styles.topPicks_header, { paddingLeft: 10 }]}>Top Picks for You</Text>


          <ScrollView contentContainerStyle={styles.scrollContent} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.topPicks_img_container}>
              <View accessibilityLabel='artistes' style={styles.imageContainer}>
                <Image source={require('../../assets/images/drake.jpg')} style={styles.img_artiste} />
              </View>
              <View accessibilityLabel='artistes' style={styles.imageContainer}>
                <Image source={require('../../assets/images/future.jpg')} style={styles.img_artiste} />
              </View>
              <View accessibilityLabel='artistes' style={styles.imageContainer}>
                <Image source={require('../../assets/images/young_thug.jpg')} style={styles.img_artiste} />
              </View>
            </View>
          </ScrollView>
        </View>

        {/****************************************************************** explore afrobeats section ***************************************************************************************/}

        <View style={styles.explore} accessibilityLabel='explore'>
          <Text style={styles.topPicks_header}>Explore Afrobeats</Text>

          <ScrollView contentContainerStyle={styles.scrollContent} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.explore_img_container}>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/Asake.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>Asake</Text>
              </View>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/Davido.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>Davido</Text>
              </View>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/King Promise.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>King Promise</Text>
              </View>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/Burna Boy.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>Burna Boy</Text>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* *************************************************************Trending Today*******************************************************************************888 */}

        <View style={styles.explore} accessibilityLabel='explore'>
          <Text style={styles.topPicks_header}>Trending Now</Text>

          <ScrollView contentContainerStyle={styles.scrollContent} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.explore_img_container}>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/Tyla.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>Tyla</Text>
              </View>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/Kendrick.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>Kendrick Lamar</Text>
              </View>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/Ayra.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>Ayra Starr</Text>
              </View>
              <View accessibilityLabel='artistes' style={styles.exploreContainer}>
                <Image source={require('../../assets/images/Burna Boy.jpg')} style={styles.img_artiste} />
                <Text style={styles.explore_names}>Burna Boy</Text>
              </View>
            </View>
          </ScrollView>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    padding: 0
  },
  
  scrollContent: {
    paddingBottom: 20, 
  },

  titleBar: {
    width: "100%",
    height: 60,
    marginTop: 60,
    paddingLeft: 15,
    justifyContent: 'center'
  },

  titleBar_Title: {
    fontSize: 35,
    color: "#ffffff",
    fontWeight: "bold"
  },

  topPicks: {
    width: "100%",
    marginTop: 10,
    padding: 0,
  },

  topPicks_header: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#ffffff",
  },

  topPicks_img_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    gap: 15,
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
    marginTop: 20,
    width: "100%",
    padding: 15,
  },

  explore_header: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#ffffff"
  },

  explore_img_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    gap: 10,
  },

  exploreContainer: {
    width: 165,
    height: 200,
    backgroundColor: "red",
    borderRadius: 10
  },

  img_explore: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10
  },

  explore_names: {
    color: "#ffffff",
    marginTop: 5,
    fontSize: 16
  },

  trending: {
    marginTop: 20,
    width: "100%",
    padding: 15,
  },

  trendingText: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#ffffff"
  }
});
