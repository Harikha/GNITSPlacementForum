import React from "react";
import {Image, Text,ScrollView, TextInput, View,Pressable} from 'react-native';
import CustomFonts from "./assets/fonts/CustomFonts";
import ImagePickerExample from "./ImagePicker";
import styles from './styles';
import UploadFile from "./UploadFile";


export default function ProfileScreen({navigation}){

  return (
   <ScrollView style={{backgroundColor:'#30E3CA'}    }>
       <ImagePickerExample/>
       <View style={styles.textSeperator}>
        <CustomFonts text="First Name" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your first name" />
       </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Last Name" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your last name" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Email" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your email" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Phone Number" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your phone number" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Roll Number" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your roll number" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Department" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your department" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Pass Out Year" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your pass out year" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Skills" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your skills" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Experience" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <TextInput style={styles.input} placeholder="Enter your experience if available else NA" />
        </View>
        <View style={styles.textSeperator}>
        <CustomFonts text="Upload Resume" fontSize={15} color="black" backgroundColor="null" padding={0}  borderRadius={0} width={97}/>
        <UploadFile/>
        </View>
        <View style={{ 
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection:'row',
      
       }}> 
       <Pressable style={styles.GreenButton} >
     <CustomFonts text="Save" fontSize={15} color="white" backgroundColor="null" padding={0}  borderRadius={0} />
    </Pressable>
    <Pressable style={styles.RedButton}>
    <CustomFonts text="Cancel" fontSize={15} color="white" backgroundColor="null" padding={0}  borderRadius={0} />
    </Pressable>    
    </View>
        </ScrollView>
  )
    
}
