import * as React from 'react';
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity,View } from 'react-native';


export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily:'Copperplate',alignItems:'center',
    padding:30,fontSize:25,}}>Sign In With Email</Text>
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

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems:'center',
    position:'absolute',
    marginTop:100,
  },
  input: {
    height: 60,
    width:300,
    margin: 10,
    borderWidth: 3,
    padding: 20,
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#AE327D",
    padding: 10,
    width:300,
    height:50,
    borderWidth:3,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    margin:20
  },
  button2: {
    alignItems: "center",
    justifyContent:'center',
    padding: 10,
    width:300,
    height:50,
    borderWidth:3,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    margin:30
  },
  
});
