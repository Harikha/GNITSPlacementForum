import * as React from 'react';
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity, } from 'react-native';


export default function App() {
  const [number1, onChangeNumber1] = React.useState(null);
  const [number2, onChangeNumber2] = React.useState(null);
  const [number3, onChangeNumber3] = React.useState(null);
  const [number4, onChangeNumber4] = React.useState(null);
  const [number5, onChangeNumber5] = React.useState(null);

  return (
    
    <SafeAreaView style={styles.container}>
      <Text style={{fontFamily:'Copperplate', marginTop:100,fontSize:20,}}>Create An Account</Text>
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
        placeholder="Password"
      />
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
      <Text style={{fontSize:12}}>By signing up, you agree with the Terms of
      Service and Privacy Policy</Text>
      <TouchableOpacity
        style={styles.button2}
      >
        <Text>Already have an account?</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'white',
    alignItems:'center',
    position:'absolute'
  },
  input: {
    height: 35,
    width:300,
    margin: 10,
    borderWidth: 2,
    padding: 10,
  },
  button1: {
    alignItems: "center",
    backgroundColor: "#AE327D",
    padding: 15,
    width:300,
    height:50,
    margin:30,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
  },
  button2: {
    alignItems: "center",
    padding: 10,
    width:300,
    height:50,
    borderWidth:2,
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomRightRadius:20,
    borderBottomLeftRadius:20,
    margin:30,

  },

});
