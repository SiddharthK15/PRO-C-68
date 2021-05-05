import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Instagram extends React.Component{
    render(){
        return(
            <Text style={styles.buttonText}>Instagram</Text>
        )
    }
}



const styles = StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignSelf: 'center',
      borderWidth: 2,
      borderRadius: 15,
      marginTop: 50,
      width: 200,
      height: 50,
    },
    buttonText: {
      textAlign: 'center',
      color: 'black',
    },
  });
    
