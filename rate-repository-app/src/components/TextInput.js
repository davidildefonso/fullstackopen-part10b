import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	error: {	
		color: "#000",
		borderColor: "#d73a4a"
	},
	textBlack: {
		color: "#000"
	}

});

const TextInput = ({ style, error, password, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput 
  		style={error ? textInputStyle.concat(styles.error) :  textInputStyle.concat(styles.textBlack)} 
		secureTextEntry={password ? true : false} {...props} />;
};

export default TextInput;