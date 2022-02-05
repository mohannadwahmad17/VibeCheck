import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import LoginSignupStackNavigator from './navigation/LoginSignupStackNavigator';

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <LoginSignupStackNavigator/>
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
