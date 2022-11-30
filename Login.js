import * as React from 'react';
import { Text, TextInput,TouchableOpacity,View } from 'react-native';
import styles from './styles';
import CustomFonts from './assets/fonts/CustomFonts';
import {MaterialCommunityIcons} from '@expo/vector-icons'; 


const Login = (props)=> {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
   const[show,setShow]=React.useState(false);
  const[visible,setVisible]=React.useState(true);

  return (
    
    <View style={styles.container}>
    <CustomFonts text="Sign In With Email" marginTop={200} fontSize={25} padding={10}/>
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
        secureTextEntry={visible}
        placeholder="Password"
      />
      <TouchableOpacity style={styles.btn} onPress={()=>{
        setVisible(!visible)
        setShow(!show)}} ><MaterialCommunityIcons name={show===false?'eye-outline':'eye-off-outline'} size={22} /></TouchableOpacity> 
      
      <TouchableOpacity
        style={styles.button1} onPress={() => props.navigation.navigate("TabNav")}
      >
        <Text style={{color:"white",}}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2} onPress={() => props.navigation.navigate("SignUp")}
      >
        <Text >Need an account?</Text>
      </TouchableOpacity>

    </View>
  );
}

export default Login;
