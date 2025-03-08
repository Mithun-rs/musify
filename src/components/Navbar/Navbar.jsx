import React from 'react';
import { Text, View, TextInput, Image,Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SVGComponent from '../../assets/icons';
import styles from './NavbarStyles.jsx'
const Page1 = ({ darkMode ,setDarkMode}) => {
  return (
    <SafeAreaView style={darkMode ? styles.darkContainer : styles.lightContainer}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={darkMode ? styles.darkHead : styles.lightHead}>MUSIFY</Text>
        <View style={{display:"flex",flexDirection:'row',marginLeft:170}}>
                <Switch
                trackColor={{false: '#ADD8E6', true: 'gray'}}
                thumbColor={setDarkMode ? 'white' : '#f4f3f4'}
                  onValueChange={() => setDarkMode(prev => !prev)}
                  value={darkMode}
                />
         <Image
          source={require('../../assets/profile.png')}
          style={{ height: 40, width: 40, marginLeft:5}}
         />
         </View>
         </View>
         <Text style={darkMode ? styles.darkText : styles.lightText}>Hi There,</Text>
         <View style={darkMode ? styles.darkSearchContainer : styles.lightSearchContainer}>
         <SVGComponent height={20} width={20}/>
         <TextInput
          style={styles.input}
          placeholder="Songs, albums or artists"
          placeholderTextColor="gray"
        />
      </View>
    </SafeAreaView>
  );
};

export default Page1;
