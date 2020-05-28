import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();

function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Business Search">
        <Stack.Screen
          name="Business Search"
          component = {SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;