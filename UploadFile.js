import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native';
import React from 'react';
import { useState, useEffect } from 'react';
import * as DocumentPicker from 'expo-document-picker';

import styles from './styles';

export default function UploadFile(){
    const [file, setFile] = React.useState(null);
    const pickFile = async () => {
        let result = await DocumentPicker.getDocumentAsync({});
        console.log(result);
        setFile(result);
    };
    return (
        <SafeAreaView >
            
            <Pressable onPress={pickFile} style={styles.GrayButton}>
                <Text>Pick File</Text> 
            </Pressable>
            {file && <Text>{file.name}</Text>}

            </SafeAreaView>
    );

  };