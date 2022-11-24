import { useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
export default function CustomFonts(props) {
  const [fontsLoaded] = useFonts({
    'LibreBaskerville-Bold': require('./LibreBaskerville-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return(
  <Text style={{
    fontFamily:'LibreBaskerville-Bold',
    fontSize:props.fontSize||20,
    color:props.color||'black',
    marginTop:props.marginTop||0,
    backgroundColor:props.backgroundColor||'white',
    padding:props.padding||15,
    textAlign:props.textAlign||'center',
    borderRadius:props.borderRadius||20,

  }} >{props.text}</Text>
  );
}


