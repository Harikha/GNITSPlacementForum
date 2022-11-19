

import React from "react";
import styles from './styles';
import {Text,View,StyleSheet, Pressable} from 'react-native';
function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Pressable style={styles.button} onPress={()=>navigation.navigate('Profile')}>
                <Text style={styles.text}>Go to Profile</Text>
            </Pressable>
        </View>
    )
}
export default HomeScreen;