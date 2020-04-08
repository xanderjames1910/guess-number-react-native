import React, { useState } from 'react';
import {
	Alert,
	Button,
	Keyboard,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
} from 'react-native';

import Card from '../componets/Card';
import Input from '../componets/Input';
import NumberContainer from '../componets/NumberContainer';

import Colors from '../constants/colors';

const StartGameScreen = (props) => {
	// Component State
	const [enteredValue, setEnteredValue] = useState('');
	const [confirmed, setConfirmed] = useState(false);
	const [selectedNumber, setSelectedNumber] = useState();

	// Colors destructuring
	const { primary, secondary } = Colors;

	// Styles destructuring
	const {
		button,
		buttonContnainer,
		input,
		inputContainer,
		screen,
		summaryContainer,
		title,
	} = styles;

	const inputHandler = (inputText) => {
		setEnteredValue(inputText.replace(/[^0-9]/g, ''));
	};

	const resetInputHandler = () => {
		setEnteredValue('');
	};

	const confirmInputHandler = () => {
		const chosenNumber = parseInt(enteredValue);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber >= 99) {
			Alert.alert('Numero no válido', 'El numero debe estar entre 1 y 99.', [
				{ text: 'OK', style: 'destructive', onPress: resetInputHandler },
			]);
			return;
		}

		setConfirmed(true);
		setSelectedNumber(parseInt(enteredValue));
		setEnteredValue('');

		Keyboard.dismiss();
	};

	let confirmedOutput;

	if (confirmed) {
		confirmedOutput = (
			<Card style={summaryContainer}>
				<Text>Has elegido</Text>
				<NumberContainer>{selectedNumber}</NumberContainer>
				<Button
					title='JUGAR'
					onPress={() => props.onStartGame(selectedNumber)}
				/>
			</Card>
		);
	}

	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}>
			<View style={screen}>
				<Text style={title}>Empieza un nuevo Juego</Text>
				<Card style={inputContainer}>
					<Text>Selecciona un Número</Text>
					<Input
						style={input}
						blurOnSubmit
						autoCapitalize='none'
						autoCorrect={false}
						keyboardType='number-pad'
						maxLength={2}
						value={enteredValue}
						onChangeText={inputHandler}
					/>
					<View style={buttonContnainer}>
						<View style={button}>
							<Button
								title='Limpiar'
								color={secondary}
								onPress={resetInputHandler}
							/>
						</View>
						<View style={button}>
							<Button
								title='Confirmar'
								color={primary}
								onPress={confirmInputHandler}
							/>
						</View>
					</View>
				</Card>
				{confirmedOutput}
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 20,
		marginVertical: 10,
	},
	inputContainer: {
		width: 300,
		maxHeight: '80%',
		alignItems: 'center',
	},
	buttonContnainer: {
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-between',
		paddingHorizontal: 15,
	},
	button: {
		width: 100,
	},
	input: {
		width: 50,
		textAlign: 'center',
	},
	summaryContainer: {
		marginTop: 20,
		alignItems: 'center',
	},
});

export default StartGameScreen;
