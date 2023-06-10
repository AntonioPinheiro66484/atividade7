// Screen2.js
import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

function Manga2({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mangá - Jujutso Kaisen</Text>
      <ImageBackground source={require('../../assets/GojovsSukuna.png')} style={styles.background}>
          <Button title="Proxima" onPress={() => navigation.navigate('Manga3')} />
          <Button title="Anterior" onPress={() => navigation.navigate('Manga1')} />
          <Button title="Principal" onPress={() => navigation.navigate('MainPage')} />
        </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
    width: '100%',
    height: '100%',
  },
});
export default Manga2;
