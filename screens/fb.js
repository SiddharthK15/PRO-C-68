import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class Facebook extends React.Component{
    render(){
        return(
          <View>
            <Text style={styles.buttonText}>Facebook</Text>
            </View>
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
  