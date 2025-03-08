import React, { useState } from "react";
import { FlatList, StyleSheet, Switch, View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navbar from  '../Navbar/Navbar'
import Album from '../Album/Album'
import Playlist from '../Playlist/Playlist'
import End from '../End/End'

const PAGES = [Navbar,Album,Playlist,End];

const MainPage = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <SafeAreaProvider style={darkMode ? styles.darkContainer : styles.lightContainer}>
    
      <FlatList
        data={PAGES}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item: PageComponent }) => <PageComponent darkMode={darkMode} setDarkMode={setDarkMode} />
        }
        contentContainerStyle={styles.container}
      />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  lightContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  darkContainer: {
    backgroundColor: "black",
    flex: 1,
  },
  switchContainer: {
marginRight:10,
  },
});

export default MainPage;
