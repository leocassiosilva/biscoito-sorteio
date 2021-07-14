import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        textoFrase: 'Vai dar certo!',
        img: require('./src/biscoito.png'),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      'Programar é bom demais', 
      'Show',
      'Vai dar certo!', 
      'Jobs'
    ]
  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    this.setState({
      textoFrase:this.frases[numeroAleatorio]
     })
  }

  render(){
    return (
      <View style={styles.container}>
        <Image source={this.state.img}
        style={styles.img}
        />
       

        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableHighlight style={styles.btn} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableHighlight>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img:{
    width:250,
    height:250
  }, 
  textoFrase:{
    fontSize:20,
    color:'#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'

  },
  btn:{
    width:230,
    height:50,
    borderWidth:2,
    borderColor:'#dd7b22',
    borderRadius:25
  },
  btnArea:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center', 
    alignItems:'center'
  }, 
  btnTexto:{
    fontSize:18, 
    fontWeight:'bold'
  }
});


export default App;
