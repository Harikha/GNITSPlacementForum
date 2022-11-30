import React from "react";
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity, } from "react-native";
import CustomFonts from "./assets/fonts/CustomFonts";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
export default function ConfirmSignUp(props)
{
    return(
        <SafeAreaView style={styles.container}>
        <Text>Username</Text>
        <TextInput style={styles.input} placeholder="Enter Your Username"/>
        <Text>Code</Text>
        <TextInput style={styles.input} placeholder="Enter Your Code"/>
        <TouchableOpacity
            style={styles.button1}
            onPress={() => props.navigation.navigate("Login")}
        >
            
            <Text style={{color:"white",}}>Confirm</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={{margin:10,}}
        >
            <Text style={{color:"grey",}}>Resend Code</Text>
        </TouchableOpacity> 
       
        </SafeAreaView>
    )
}
