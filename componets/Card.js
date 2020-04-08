import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card = (props) => {
	// Props destructuring
	const { style } = props;

	// Styles destructuring
	const { card } = styles;

	return <View style={{ ...card, ...style }}>{props.children}</View>;
};

const styles = StyleSheet.create({
	card: {
		shadowColor: 'black',
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: 0.26,
		elevation: 5,
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 20,
	},
});

export default Card;
