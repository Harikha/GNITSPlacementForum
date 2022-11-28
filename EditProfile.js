import React from "react";
import {ScrollView} from 'react-native';
import ImagePickerExample from "./ImagePicker";
import styles from './styles';


export default function ProfileScreen({navigation}){

  return (
   <ScrollView style={{backgroundColor:'#30E3CA'}    }>
   <ImagePickerExample/>
   

   </ScrollView>
  )
    
}
