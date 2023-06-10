// Screen5.js
import React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet } from 'react-native';


function Screen5({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Mangá - Yu-Gi-Oh Duel Monsters</Text>
         <ImageBackground source={require('../../assets/Yu-Gi-Oh.png')} style={styles.background}>
          <Button title="Proxima" onPress={() => navigation.navigate('MainPage')} />
          <Button title="Anterior" onPress={() => navigation.navigate('Manga4')} />
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
export default Screen5;
