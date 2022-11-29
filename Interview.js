import * as React from 'react';
import { Text, View, StyleSheet,ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {  SearchBar } from "react-native-elements";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

function Interview() {
  return (
    <View style={styles.container}>
      <SearchBar
          placeholder="Search company name"
          lightTheme
          round
          autoCorrect={false}
        />
        <Text style={styles.paragraph}>Company Wise Interview Experience</Text>
        <ScrollView style={styles.align}>
        <FontAwesome5 name="amazon" size={50}/><Text>Amazon</Text>
        <FontAwesome5 name="facebook" size={50}/><Text>facebook</Text>
        <FontAwesome5 name="apple" size={50}/><Text>apple</Text>
        <FontAwesome5 name="google" size={50}/><Text>google</Text>
        <FontAwesome5 name="microsoft" size={50}/><Text>microsoft</Text>
        <FontAwesome5 name="amazon" size={50}/><Text>Amazon</Text>
        <FontAwesome5 name="facebook" size={50}/><Text>facebook</Text>
        <FontAwesome5 name="amazon" size={50}/><Text>Amazon</Text>
        <FontAwesome5 name="facebook" size={50}/><Text>facebook</Text>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: '#ecf0f1',
    padding: 8,
    
  },
  paragraph: {
    padding:20,
    fontSize: 16,
    textAlign: 'center',
  },
  align:{
    flex: 1,
    flexDirection:'row',
    flexWrap: "wrap",
    justifyContent:'center'
  }
});
export default Interview;
