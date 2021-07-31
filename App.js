import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';

function HomeScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<Button title="go to details screen" onPress={() => navigation.navigate('Details')} />
		</View>
	);
}

function DetailsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Detail Screen</Text>
			<Button title="go to details screen .. again" onPress={() => navigation.push('Details')} />
			<Button title="go to Home" onPress={() => navigation.navigate('Home')} />
			<Button title="go Back" onPress={() => navigation.goBack('')} />
			<Button title="go to the first screen " onPress={() => navigation.popToTop('')} />
		</View>
	);
}

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: {
						backgroundColor: 'black'
					},
					headerTintColor: '#fff',
					HeaderTitleStyle: {
						fontWeight: 'bold'
					}
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Details" component={DetailsScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
