/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import DiceOne from "../assets/One.png"
import DiceTwo from "../assets/Two.png"
import DiceThree from "../assets/Three.png"
import DiceFour from "../assets/Four.png"
import DiceFive from "../assets/Five.png"
import DiceSix from "../assets/Six.png"


type DiceProps = PropsWithChildren<{
  imageUrl:ImageSourcePropType
}>


const Dice =({imageUrl}:DiceProps): React.JSX.Element=>{
return (
  <View>
    <Image style={styles.diceImage} source={imageUrl}/>
  </View>
)
}

function App(): React.JSX.Element {
  const [diceImage,setDiceImage]=useState(DiceOne)
  const rollDiceOnTap=()=>{
    let randomNumber = Math.ceil(Math.random()*6)+1;
    switch(randomNumber){
      case 1:
        setDiceImage(DiceOne)
        break;
      case 2:
          setDiceImage(DiceTwo)
          break;
      case 3:
            setDiceImage(DiceThree)
            break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5:
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      
        default:
          setDiceImage(DiceOne)
          break;
    
    }
  }  
  return (
    // <SafeAreaView>
    //  <View style={styles.sectionContainer}>
    //   <View style={styles.buttonView}>
    //     <TouchableOpacity style={styles.clickButton}>
    //       <Text style={styles.clickButtonText}>roll the dice</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>
    // </SafeAreaView>
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceOnTap}>
       <Text style={styles.rollBtnTxt}>Roll The Dice</Text> 
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  },
  diceImage:{
    height:150,
    width:150,
    
  },
  rollBtnTxt:{
    borderWidth:2,
    padding:8,
    borderRadius:8,
    color:"green",
    backgroundColor:"aqua"
  }


});

export default App;
