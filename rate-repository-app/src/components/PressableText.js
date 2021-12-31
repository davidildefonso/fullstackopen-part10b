import React from 'react';
import { Text, Pressable, Alert } from 'react-native';



const PressableText = ({text, styles}) => {
  return (
    <Pressable
      onPress={() => Alert.alert('You pressed the text!')}
    >
      <Text style={styles} >{text} </Text>
    </Pressable>
  );
};


export default PressableText;