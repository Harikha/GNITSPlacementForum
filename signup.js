import * as React from 'react';
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity, } from 'react-native';
import CustomFonts from './assets/fonts/CustomFonts';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 
import styles from './styles';

function SignUp() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  const [number4, onChangeNumber4] = React.useState(null);
  const [number5, onChangeNumber5] = React.useState(null);
  const[show,setShow]=React.useState(false);
  const[visible,setVisible]=React.useState(true);
  return (
    
    <SafeAreaView style={styles.container}>
      <CustomFonts text="Create An Account" marginTop={100} fontSize={20} padding={15}/>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber1}
        value={number1}
        placeholder="First Name "
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber2}
        value={number2}
        placeholder="Last Name "
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber3}
        value={number3}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber4}
        value={number4}
        secureTextEntry={visible}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.btn} onPress={()=>{
        setVisible(!visible)
        setShow(!show)}} ><MaterialCommunityIcons name={show===false?'eye-outline':'eye-off-outline'} size={22} /></TouchableOpacity> 
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber5}
        value={number5}
        placeholder="Roll Number"
      />
      <TouchableOpacity
        style={styles.button1}
      >
        <Text style={{color:"white",}}>Sign Up</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.button2}
      >
        <Text>Already have an account?</Text>
      </TouchableOpacity>
      
           
    </SafeAreaView>
  );
}
export default SignUp;
