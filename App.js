import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

export default function App() {
  return (
    <>
      <Register />
      <StatusBar style="auto" />
      </>
  );
}

