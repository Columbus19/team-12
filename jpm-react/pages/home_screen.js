import React from 'react';
import { View, Text , Button} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Are you a: </Text>
        <Button onPress={() => navigate('Details')}>Student </Button>
        <Button onPress={() => navigate('Details')}>Alumni</Button>
        <Button onPress={() => navigate('Details')} >Employer</Button>
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Details Screen</Text>
        </View>
      );
    }
  }

const AppNavigator = createStackNavigator(
    {
      Home: HomeScreen,
      Details: DetailsScreen,
    },
    {
      initialRouteName: 'Home',
    }
  );

export default createAppContainer(AppNavigator);
