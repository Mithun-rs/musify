import React from 'react';
import { FlatList, Image, StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import  styles from './AlbumStyles'

const images = [
  { id: '2', source: require('../../assets/adhi.jpg') },
  { id: '3', source: require('../../assets/rock.jpg') },
  { id: '4', source: require('../../assets/jonita.jpg') },
];

const album = [
  { id: '5', source: require('../../assets/rap.jpg'), name: 'Rap Hits' },
  { id: '6', source: require('../../assets/melody.webp'), name: 'Melody Hits' },
  { id: '7', source: require('../../assets/vibe.jpg'), name: 'Vibess' },
];

const Page2 = ({ darkMode }) => {
  const handlePress = (imageName) => {
    Alert.alert(`You clicked on ${imageName}`);
  };

  return (
    <SafeAreaView style={darkMode ? styles.darkContainer : styles.lightContainer}>
      <FlatList
        data={images}
        keyExtractor={(item) => item.id}
       
     horizontal contentContainerStyle={styles.flatListStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.source} style={styles.image} />
          </View>
        )}
      />

      <Text style={darkMode ? styles.darkText : styles.lightText}>Top Albums</Text>

<FlatList
      data={album}
      keyExtractor={(item) => item.id}
        
      horizontal  contentContainerStyle={styles.flatListStyle}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => 
          (
          <View style={styles.imageContainer1}>
            <TouchableOpacity onPress={() => handlePress(item.name)}>
              <Image source={item.source} style={styles.image1} />
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default Page2;
