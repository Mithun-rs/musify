import React, { useState } from "react";
import { SafeAreaView, SectionList, Text, View, Image,Modal, TouchableOpacity } from "react-native";
import styles from  './PlaylistStyles.jsx'
const DATA = [
  {
    title: "Your Playlist",
    data: [
      { id: "2", source: require("../../assets/naan.jpg"), text: "Naa Ready dha" },
      { id: "3", source: require("../../assets/oru.jpg"), text: "Orru Nallil" },
    ],
  },
  {
    title: "Your Favorites",
    data: [
      { id: "4", source: require("../../assets/paiyadai.jpg"), text: "Paiya dai" },
      { id: "5", source: require("../../assets/vip.jpg"), text: "Udhungada Sangu" },
    ],
  },
];
const Page3 = ({ darkMode }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={darkMode ? styles.darkContainer : styles.lightContainer}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.source} style={styles.image} />
           <Text style={darkMode ? styles.darkText : styles.lightText}>{item.text}</Text>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Play</Text>
            </TouchableOpacity>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={darkMode ? styles.darkHeader : styles.lightHeader}>{title}</Text>
        )}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={darkMode ? styles.darkmodalContainer : styles.lightmodalContainer}>
          <View style={ darkMode ? styles.darkmodalView : styles.lightmodalView} >
            <Text style={ darkMode? styles.darkmodalText : styles.lightmodalText}>⚠ Error Occurred: Song Unavailable</Text>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
export default Page3;
