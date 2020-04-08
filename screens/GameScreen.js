import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

import NumberContainer from '../componets/NumberContainer';
import Card from '../componets/Card';

const generateRandomBetween = (min, max, exclude) => {
	min = Math.ceil(min);
	max = Math.floor(max);

	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
};

const GameScreen = (props) => {
	// Props destructuring
	const { userChoice, onGameOver } = props;

	// Component State
	const [currentGuess, setCurrentGuess] = useState(
		generateRandomBetween(1, 100, userChoice),
	);
	const [rounds, setRounds] = useState(0);

	// Styles destructuring
	const { buttonContainer, screen } = styles;

	const currentLow = useRef(1);
	const currentHigh = useRef(100);

	useEffect(() => {
		if (currentGuess === userChoice) {
			onGameOver(rounds);
		}
	}, [currentGuess, userChoice, onGameOver]);

	const nextGuessHandler = (direction) => {
		if (
			(direction === 'menor' && currentGuess < userChoice) ||
			(direction === 'mayor' && currentGuess > userChoice)
		) {
			Alert.alert('No mientas', 'Tú sabes que eso es incorrecto...', [
				{ text: 'Lo siento!', style: 'cancel' },
			]);
			return;
		}

		if (direction === 'menor') {
			currentHigh.current = currentGuess;
		} else {
			currentLow.current = currentGuess;
		}

		const nextNumber = generateRandomBetween(
			currentLow.current,
			currentHigh.current,
			currentGuess,
		);

		setCurrentGuess(nextNumber);
		setRounds((curRounds) => curRounds + 1);
	};

	return (
		<View style={screen}>
			<Text>Número del Contendiente</Text>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card style={buttonContainer}>
				<Button
					title='MENOR'
					onPress={nextGuessHandler.bind(this, 'menor')}
				/>
				<Button
					title='MAYOR'
					onPress={nextGuessHandler.bind(this, 'mayor')}
				/>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		marginTop: 20,
		width: 300,
		maxWidth: '80%',
	},
});

export default GameScreen;
