import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import React from 'react'
import ImageList from '../../components/imageList.jsx';
import { topPicksData, exploreAfrobeatsData, trendingNowData } from '../../components/Data/imageData.jsx'; 

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.titleBar}>
          <Text style={styles.titleBar_Title}>Home</Text>
        </View>

        {/* Top Picks Section */}
        <ImageList headerText="Top Picks for You" 
        data={topPicksData}
        imageStyle={{width: "100%", height: "100%"}}
        containerStyle={{width: 320, height: 400}}
         />

        {/* Explore Afrobeats Section */}
        <ImageList headerText="Explore Afrobeats"
         data={exploreAfrobeatsData} 
         />

        {/* Trending Now Section */}
        <ImageList headerText="Trending Now"
         data={trendingNowData} 
         />

        {/* Trending Now Section */}
        <ImageList headerText="Trending Now"
         data={trendingNowData} 
         />


      </View>
    </ScrollView>
    
  )
}



const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    flex: 1,
  },
  titleBar: {
    width: '100%',
    height: 60,
    marginTop: 60,
    paddingLeft: 15,
    justifyContent: 'center',
  },
  titleBar_Title: {
    fontSize: 35,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});