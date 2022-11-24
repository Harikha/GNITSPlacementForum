import React from "react";
import {Text,View,StyleSheet, Pressable,Image,Button} from 'react-native';
import styles from './styles';
import { ImagePicker } from "react-native-image-picker";
function ProfileScreen({navigation}){
    return(
       <View style={{
              flex:1,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'#30E3CA'

       }}>
        <Button 
        title="Choose Photo"
        onPress={
            ()=>{
                const options={};
                ImagePicker.launchImageLibrary({mediaType:'photo',includeBase64:false},(response)=>{
                    console.log(response);
                })
            }
        }/>
       </View>

    )
}
export default ProfileScreen;