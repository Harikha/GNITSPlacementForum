import React from "react";
import {Text,View,StyleSheet, Pressable} from 'react-native';
import styles from './styles';
function NotificationScreen({navigation}){
    return(
        <View style={styles.container}>
           
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
                    backgroundColor:'white',
                    
                    

                }
            }>No new Notifications </Text>
        </View>
    )
}
export default NotificationScreen;