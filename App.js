import React from 'react';
import ProfileScreen from './ProfileScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';
import TabNav from './TabNav';
import ReEnterEmail from './ReEnterEmail';
import ResetPassword from './ResetPwd';
import ConfirmSignUp from './ConfirmSignUp';
import Navigation from './Navigation';

  const Stack = createNativeStackNavigator();

function App() {
  return (
    <Navigation/>
  );
}

export default App;
