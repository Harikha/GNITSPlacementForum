

import React from "react";
import { useState } from "react";
import styles from './styles';
import {Text,View,Image, ScrollView, TouchableOpacity} from 'react-native';
import CustomFonts from './assets/fonts/CustomFonts';

function HomeScreen({navigation}){
   
    return(

        <ScrollView style={{backgroundColor:'#30E3CA'}    }>
        
        <TouchableOpacity style={styles.border}>
            <Image source={require('./assets/images/interviewexp.webp')} style={styles.img} />
    <CustomFonts text="Interview Experiences" padding={15}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.border} >
            <Image source={require('./assets/images/assessment.webp')} style={styles.img}/>
            <CustomFonts text="Company wise Assessment" padding={15}/>
            
        </TouchableOpacity>
        <TouchableOpacity style={styles.border}>
            <Image source={require('./assets/images/mockinterv.webp')} style={styles.img}/>
             <CustomFonts text="Mock Interview" padding={15}/>
        </TouchableOpacity> 
        </ScrollView>
    )
}
export default HomeScreen;