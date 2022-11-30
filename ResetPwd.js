import React from "react";
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity, } from "react-native";
import CustomFonts from "./assets/fonts/CustomFonts";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
    export default function ResetPassword(props){
    return(
        <SafeAreaView style={styles.container}>
    <CustomFonts text="Reset Your Password" marginTop={100} fontSize={20} padding={15}/>
    <TextInput 
        style={styles.input}
        placeholder="Confirmation Code"
    />
    <TextInput
        style={styles.input}
        placeholder="New Password"
    />
    <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
    />
    <TouchableOpacity
        style={styles.button1}
        onPress={() => props.navigation.navigate("Login")}
    >
        <Text style={{color:"white",}}>Reset</Text>
    </TouchableOpacity>
    
    </SafeAreaView>
    );
    }