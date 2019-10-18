import * as React from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Linking } from "react-native";
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          INROADS
        </Text>
        <TextInput
          style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2,         
          marginBottom: 10}}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your Username"
        />
        <TextInput style = {styles.con}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter Your Password"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          // Making the Text Input Text Hidden.
          secureTextEntry={true}
        />
        <Button
          title="Sign In"
          onPress={() => Alert.alert('Signing in....')}
        />
        <Text style={{color: 'blue', textAlign: "center"}}
              onPress={() => Linking.openURL('http://google.com')}>
              {"\n"}Not registered? Create an account now!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  con: {
    height: 45,
    width: "95%",
    borderColor: "gray",
    borderWidth: 2, 
    marginBottom: 10, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
