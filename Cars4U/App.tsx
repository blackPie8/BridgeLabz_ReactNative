import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen.tsx';
import SignUp from './screens/SignUp.tsx';
import SignIn from './screens/SignIn.tsx';
import BuyCars from './screens/BuyCars.tsx';
import PaymentScreen from './screens/PaymentScreen.tsx';

const App = () => {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
     <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name ="SignUp" component={SignUp} />
        <Stack.Screen name ="SignIn" component={SignIn} />
        <Stack.Screen name="BuyCars" component={BuyCars} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})