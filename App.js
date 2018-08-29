
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,Button,TouchableNativeFeedback,
  View,Alert,StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {};
export default class App extends Component<Props> {
  state = {
         calculatetext: '--'
      };
  constructor(props) {
      super(props)
      this.state = {
         calculatetext: 'Kalkulator'
      }
      this._onpressProcess = this._onpressProcess.bind(this);
   }
  
  shouldComponentUpdate() {
    return true
  }
  _onpressProcess(va) {
    console.log(va);
    text = this.state.calculatetext;
    if (text== 'Kalkulator' || text=='---E-R-R-O-R---') {
      text ='';
    }
    if (va=='c') {
      text ='';
    }
    if(isNaN(va)){
      if (va=='+' || va=='-' || va=='x' || va=='/') {
        if (text!='') {
          lastchart = text[text.length -1];
          if (lastchart!='+' && lastchart!='-' && lastchart!='x' && lastchart!='/') {
            text = text+''+va;
          }
          text= text.replace('//', '/');
          text= text.replace('xx', 'x');
          text= text.replace('--', '-');
          text= text.replace('++', '+');
        }
      }
      
      if (va=='=') {
        if (text!='') {
          lastchart = text[text.length -1];
          if (lastchart=='+' || lastchart=='-' || lastchart=='x' || lastchart=='/' || text=='undefined') {

          }else{
            if (isNaN(text)) {
              text= text.replace('.', '');
              text= text.replace('x', '*');
              text = eval(text);
            }else{
              text= Math.floor(text); 
            }
          }
        }
      }

    }else{
      text = text+''+va;
    }
    if (text!='') {
      jumlahs= text.length;
      if (jumlahs>=30) {
        text ='---E-R-R-O-R---';
      }
    }else{
      text= '';
    }
    
    this.setState({ calculatetext:text});
  }
  render() {
    let tombolCalculator = (val)=>{
     return (
      <TouchableNativeFeedback onPress={()=>this._onpressProcess(val)} onLongPress ={(e)=>{Alert.alert('Kalkulator','created by \nkarebetconnec@gmail.com \nuse react-native',[{text: 'OK', onPress: () => console.log('OK Pressed')}],{ cancelable: false })}}>
      <View style={styles.vbutton_v}>
      <Text style={{color:'#ffffff',fontSize:30}}>{val}</Text>
      </View>
      </TouchableNativeFeedback>
      )
    }
    return (
      
      <LinearGradient 
      start={{x: 0, y: 0.10}} 
      end={{x: 1, y: 0.75}}  
      colors={[ '#35c6f9','#1495dd','#0071bc']} 
      style={styles.container}>
      <StatusBar backgroundColor="#35c6f9" barStyle="light-content" />
        
        <View style={styles.abottom}>
        <View style={styles.atextcenter}>
          <View style={styles.atextcentertext}>
            <Text style={styles.welcome}>{this.state.calculatetext}</Text>
          </View>
        </View>
          <View style={styles.vbuttonc}>
            {tombolCalculator(1)}
            {tombolCalculator(2)}
            {tombolCalculator(3)}
            {tombolCalculator('/')}
          </View>
          <View style={styles.vbuttonc}>
            {tombolCalculator(4)}
            {tombolCalculator(5)}
            {tombolCalculator(6)}
            {tombolCalculator('x')}
          </View>
          <View style={styles.vbuttonc}>
            {tombolCalculator(7)}
            {tombolCalculator(8)}
            {tombolCalculator(9)}
            {tombolCalculator('-')}
          </View>
          <View style={styles.vbuttonc}>
            {tombolCalculator('c')}
            {tombolCalculator(0)}
            {tombolCalculator('=')}
            {tombolCalculator('+')}
          </View>
        </View>
      </LinearGradient>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',paddingTop: 210
  },
  welcome: {
    fontSize: 20,
    color:'#ffffff',
    textAlign: 'center',
    margin: 10,height:80
  },
  welcome_hasil:{
    fontSize: 30,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    marginBottom: 5,
  },
  vbuttonc:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    height:80
  },
  vbutton_v:{
    flex: 3, flexDirection:'column', justifyContent:'center', alignItems:'center',height:80
  },
  atextcenter:{
    flexDirection:'row',
    paddingTop: 50,
    borderRadius:10,
    backgroundColor:'rgba(0, 113, 188,0.6)',
    alignSelf: 'stretch',
    marginRight: 10,marginLeft: 10,height:80
  },
  atextcentertext:{
    flex: 1,flexDirection:'column', justifyContent:'center'
  },
  abottom:{
    bottom: 0,
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: 20,
  }
});
