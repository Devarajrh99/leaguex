import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import mainscreen from './src/Components/mainscreen';
import GameDetails from './src/Components/GameDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='main'>
        <Stack.Screen name='main' component={mainscreen} options={{ headerShown: false }} />
        <Stack.Screen name='GameDetails' component={GameDetails} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
