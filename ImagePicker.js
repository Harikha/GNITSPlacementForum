import React, { useState, useEffect } from 'react';
import { Button, Image, View,Text, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import { FontAwesome } from '@expo/vector-icons';
import styles from './styles';
import { Pressable } from 'react-native';
import CustomFonts from './assets/fonts/CustomFonts';
export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  const deleteImage=async()=>{
    setImage(null);
  }
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
    
  };

  return (
    <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection:'row',
     marginBottom:20,
      marginTop:20,

       }}>
      
     {
      (image) ? <Image source={{ uri: image }} style={styles.roundImage} />
      : <Image source={require('./assets/images/blank-profile.webp')} style={styles.roundImage} />
      
      }
     <Pressable style={styles.GreenButton} onPress={pickImage}>
     
     <CustomFonts text="Upload" fontSize={15} color="white" backgroundColor="null" padding={0}  borderRadius={0} />
    </Pressable>
    <Pressable style={styles.RedButton} onPress={deleteImage}>
    <CustomFonts text="Delete" fontSize={15} color="white" backgroundColor="null" padding={0}  borderRadius={0} />
    </Pressable>
      
      
    </View>
  );
}