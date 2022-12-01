import React from "react";
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity,View,Image } from "react-native";
import CustomFonts from "./assets/fonts/CustomFonts";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function ViewProfile()
{
    return (<SafeAreaView >
        <View style={{flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        padding:10,
        backgroundColor:"#fff"}}>
        
            <Image style={styles.roundImage} source={require('./assets/images/blank-profile.webp')}/>
            <TouchableOpacity style={
            {
                
                margin:10,
                padding:10,
                borderRadius:10,
                alignItems:'center',
                shadowColor:'grey',
                // height:50,
                // width:200,
                shadowOffset:{width:0,height:2},
                shadowOpacity:0.25,
                shadowRadius:3.5,
                elevation:5,
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:'white',

            }
        }>
            <Text style={{
                fontSize:16,
                fontWeight:'bold',
                color:'black',
                
            }}>Student/Placement Cordinator</Text> 
        </TouchableOpacity>
        </View>
        
        {/* User Profile */}
        <View style={styles.profile}>
            <Text style={styles.textSeperator}>Name </Text>
            <Text style={styles.textSeperator}>Branch</Text>
            <Text style={styles.textSeperator}>Year</Text>
            <Text style={styles.textSeperator}>Skills if any</Text>
            <Text style={styles.textSeperator}>Work Experience if any</Text>

       </View>

        
        </SafeAreaView>
    );
        }
      