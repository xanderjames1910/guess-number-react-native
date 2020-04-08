import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = (props) => {
	// Props destructuring
	const { style } = props;

	// Styles destructuring
	const { input } = styles;
	return <TextInput {...props} style={{ ...input, ...style }} />;
};

const styles = StyleSheet.create({
	input: {
		height: 30,
		borderBottomColor: 'grey',
		borderBottomWidth: 1,
		marginVertical: 10,
	},
});

export default Input;
