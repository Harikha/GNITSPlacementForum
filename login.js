import * as React from 'react';
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity,View } from 'react-native';
import styles from './styles';
import CustomFonts from './assets/fonts/CustomFonts';


export default function Login() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  

  return (
    <SafeAreaView style={styles.container}>
    <CustomFonts text="Sign In With Email" marginTop={100} fontSize={25} padding={15}/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="Email/Roll No "
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Password"
      />
      
      <TouchableOpacity
        style={styles.button1}
      >
        <Text style={{color:"white",}}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
      >
        <Text >Need an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

