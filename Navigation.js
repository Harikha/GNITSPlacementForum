import React from "react";
import { Text, SafeAreaView, StyleSheet,TextInput,TouchableOpacity, } from "react-native";
import CustomFonts from "./assets/fonts/CustomFonts";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import styles from "./styles";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "./SignUp";
import Home from "./Home";
import ConfirmEmail from "./EmailConfirm";
import ResetPassword from "./ResetPwd";
import ReEnterEmail from "./ReEnterEmail";
import ConfirmSignUp from "./ConfirmSignUp";
import Login from "./Login";
import TabNav from "./TabNav";
import BlogPreview from "./BlogPreview";
const Stack = createNativeStackNavigator();
export default function Navigation()
{
    return(
        <NavigationContainer>
           <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="ReEnterEmail" component={ReEnterEmail} />
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="SignUp" component={SignUp} />
                
                
                <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />
                <Stack.Screen name="TabNav" component={TabNav} />
                <Stack.Screen name="NoticationAdmin" component={BlogPreview} />

            </Stack.Navigator>
        </NavigationContainer>
    );

}