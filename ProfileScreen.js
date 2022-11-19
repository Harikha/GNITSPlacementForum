import React from "react";
import {Text,View,StyleSheet, Pressable} from 'react-native';
import styles from './styles';
function ProfileScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Profile Screen</Text>
            <Pressable style={styles.button} onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.text}>Go to Home</Text>
            </Pressable>
        </View>
    )
}
export default ProfileScreen;