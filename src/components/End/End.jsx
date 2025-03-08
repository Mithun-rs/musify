import React, { useState } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './EndStyles';
const Page4 = () => 
  {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("Thank You!!"); 

  const handlePress = () => {
    console.log("Button Pressed!");
    setLoading(true);
    setTimeout(() => {
      console.log("Loading finished!");
      setLoading(false);
      setMessage("Welcome!!"); 
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.text}>{message}</Text>  
      </TouchableOpacity>
      <View style={styles.loaderContainer}>
        {loading && <ActivityIndicator size="large" color="green" />}
      </View>
    </SafeAreaView>
  );
};
export default Page4;
