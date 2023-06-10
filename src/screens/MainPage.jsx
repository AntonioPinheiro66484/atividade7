// MainPage.js
import React from 'react';
import { View, Text, Button } from 'react-native';

function MainPage({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Pagina Principal</Text>
      <Button title="Manga1" onPress={() => navigation.navigate('Manga1')} />
      <Button title="Manga2" onPress={() => navigation.navigate('Manga2')} />
      <Button title="Manga3" onPress={() => navigation.navigate('Manga3')} />
      <Button title="Manga4" onPress={() => navigation.navigate('Manga4')} />
      <Button title="Manga5" onPress={() => navigation.navigate('Manga5')} />
    </View>
  );
}

export default MainPage;
