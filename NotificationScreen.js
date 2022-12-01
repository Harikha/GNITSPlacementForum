import { useLinkProps } from "@react-navigation/native";
import React from "react";
import {Text,View,StyleSheet, Pressable, TouchableOpacity,SafeAreaView} from 'react-native';
import styles from './styles';
function NotificationScreen(props){
    return(
        <SafeAreaView style={{backgroundColor:'#30E3CA'}}>
           
            {/* No new notification  screen*/}
            <Text style={
                {
                    fontSize:20,
                    color:'grey',
                    marginTop:20,
                    textAlign:'center',
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    fontWeight:'bold',
                   borderColor:'grey',
                     borderWidth:1,
                    
                    

                }
            }>No new Notifications </Text>
            {/* Notificationscreen to admin */}
            <TouchableOpacity style={
                 {
                        fontSize:20,
                        color:'black',
                        margin:20,
                        textAlign:'center',
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center',
                        fontWeight:'bold',
                       
                       

                    }
            }  onPress={() => props.navigation.navigate("NoticationAdmin")}>
                <Text style={{
                    fontSize:20,
                    color:'black',
                    fontWeight:'bold',

                }}>XYZ has wrote the article click here to read and approve</Text>
                <Text >{new Date().toLocaleString()}</Text>

            </TouchableOpacity>
        </SafeAreaView>
    )
}
export default NotificationScreen;