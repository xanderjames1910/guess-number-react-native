import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../constants/colors';

const Header = (props) => {
	// Props destructuring
	const { title } = props;

	// Styles destructuring
	const { header, headerTitle } = styles;

	return (
		<View style={header}>
			<Text style={headerTitle}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: Colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitle: {
		fontSize: 18,
		color: 'black',
	},
});

export default Header;
