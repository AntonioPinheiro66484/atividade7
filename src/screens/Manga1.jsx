// Screen2.js
import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';

function Manga1({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Mangá - Chain Saw</Text>
         <ImageBackground source={require('../../assets/DarknessDemon.png')} style={styles.background}>
          <Button title="Proxima" onPress={() => navigation.navigate('Manga2')} />
          <Button title="Anterior" onPress={() => navigation.navigate('MainPage')} />
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
export default Manga1;
