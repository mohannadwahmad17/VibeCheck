import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import LoginSignupStackNavigator from './navigation/LoginSignupStackNavigator';
import { useState } from 'react';
import Home from './pages/Home';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {
          loggedIn ? 
          <Home/> :
          <LoginSignupStackNavigator updateLoggedStatus={setLoggedIn}/>
        }
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
