import React from "react";
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity, } from "react-native";
import CustomFonts from "./assets/fonts/CustomFonts";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
    export default function ReEnterEmail(props)
{
    return(
        <SafeAreaView style={styles.container}>
    <CustomFonts text="Re-Enter Your Email" marginTop={100} fontSize={20} padding={15}/>
    <TextInput style={styles.input} placeholder="Enter Your Email"/>
    <TouchableOpacity 
        style={styles.button1}
        onPress={() => props.navigation.navigate("ResetPassword")}
    >
        <Text style={{color:"white",}}>SEND</Text>
    </TouchableOpacity>
   
    </SafeAreaView>
    );

}