import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const GameOverScreen = (props) => {
	// Styles destructuring
	const { screen } = styles;

	return (
		<View style={screen}>
			<Text>El juego terminó</Text>
			<Text>Numero de rounds: {props.roundsNumber}</Text>
			<Text>El número era: {props.userNumber}</Text>
			<Button title='Juegar de Nuevo' onPress={props.onRestart} />
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default GameOverScreen;
