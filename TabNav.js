import React from "react";
import {Text,View,StyleSheet, Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from "./HomeScreen";
import styles from './styles';
import ProfileScreen from "./ProfileScreen";
import NotificationScreen from "./NotificationScreen";
import ReadLaterScreen from "./ReadLaterScreen";
const tab=createBottomTabNavigator();
function TabNav()
{
    return(
        <NavigationContainer>
          <tab.Navigator

          screenOptions={({route})=>({
            tabBarIcon:({focused,color,size})=>{
              let iconName;

              if(route.name==='Home'){
                iconName=focused?'home':'home-outline';
              }
              else if(route.name==='Profile'){
                iconName=focused?'person':'person-outline';
              }
              else if(route.name=='Notification'){
                iconName=focused?'notifications':'notifications-outline';
                }
                else if(route.name=='Read Later'){
                    iconName=focused?'bookmark':'bookmark-outline';
                }
              return  <Ionicons name={iconName} size={20} />
            },
            tabBarActiveTintColor:'black',
            tabBarInactiveTintColor:'gray',
            tabBarShowLabel:true,

            
          })}

          >
            <tab.Screen name="Home" component={HomeScreen} />
            <tab.Screen name="Profile" component={ProfileScreen}/>
            <tab.Screen name="Notification" component={NotificationScreen}/>
            <tab.Screen name="Read Later" component={ReadLaterScreen}/>
          </tab.Navigator>
        </NavigationContainer>
      )
}
export default TabNav;