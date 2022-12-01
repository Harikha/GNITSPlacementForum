import React from "react";
import {Text,View,StyleSheet, Pressable, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import styles from './styles';
import TabNav from "./TabNav";
export default function BlogPreview({navigation}){
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.blogPreview}>
            <View style={styles.blogPreview__imageContainer}>
            <Image style={styles.squareImage} source={require('./assets/images/micron.png')}/>
            </View>
            <View style={styles.blogPreview__textContainer}>
                <Text style={styles.blogPreview__title}>Name of author</Text>
                <Text style={styles.blogPreview__subtitle}>Company name</Text>
                <Text style={styles.blogPreview__subtitle}>Role offered</Text>
                <Text style={styles.blogPreview__subtitle}>Location offered</Text>
                <Text style={styles.blogPreview__subtitle}>Package offered</Text>
                <Text style={styles.blogPreview__subtitle}>Date of joining</Text>

        </View>
        <View style={styles.blogPreview__buttonContainer}>
            <TouchableOpacity style={styles.blogPreview__button}>
                <Text style={styles.blogPreview__buttonText}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.GreenButton}>
                <Text style={styles.blogPreview__buttonText}>Approve</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.RedButton}>
                <Text style={styles.blogPreview__buttonText}>Reject</Text>
            </TouchableOpacity>
        </View>
        
        </View>
        </SafeAreaView>
      
    )

}
