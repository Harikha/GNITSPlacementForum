import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Ionicons from '@expo/vector-icons/Ionicons';
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import NotificationScreen from "./NotificationScreen";

import WriteInterviewExp from "./WriteInterviewExp";

const tab=createBottomTabNavigator();

function TabNav()
{
    return(
        
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
                else if(route.name=='Add Experience'){
                    iconName=focused?'md-add-circle':'md-add-circle-outline';
                   
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
            <tab.Screen name="Add Experience" component={WriteInterviewExp}/>
          </tab.Navigator>
      )
}
export default TabNav;
