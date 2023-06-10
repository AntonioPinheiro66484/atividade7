import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Manga1 from './src/screens/Manga1';
import Manga2 from './src/screens/Manga2';
import Manga3 from './src/screens/Manga3';
import Manga4 from './src/screens/Manga4';
import Manga5 from './src/screens/Manga5';
import MainPage from './src/screens/MainPage';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="Manga1" component={Manga1} />
        <Stack.Screen name="Manga2" component={Manga2} />
        <Stack.Screen name="Manga3" component={Manga3} />
        <Stack.Screen name="Manga4" component={Manga4} />
        <Stack.Screen name="Manga5" component={Manga5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
