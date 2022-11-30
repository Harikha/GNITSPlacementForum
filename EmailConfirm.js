import React from "react";
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity, } from "react-native";
import CustomFonts from "./assets/fonts/CustomFonts";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
 export default function ConfirmEmail()
{
    return (
        <SafeAreaView style={styles.container}>
        <CustomFonts text="Confirm Your Email" marginTop={100} fontSize={20} padding={15}/>
        <TextInput style={styles.input} placeholder="Enter Your Email"/>

        <TouchableOpacity
            style={styles.button1} 
        >
            <Text style={{color:"white",}}>Confirm</Text>
        </TouchableOpacity>
        {/* resend code */}
        <TouchableOpacity
            style={{margin:10,}}
        >
            <Text style={{color:"grey",}}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={{margin:10,}}
        >   
            <Text style={{color:"grey",}}>Back</Text>
        </TouchableOpacity>

        </SafeAreaView>
    );
}