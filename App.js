import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Image source={require('./src/biscoito.png')}
        style={style.img}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:250,
    height:250
  }
});


export default App;
