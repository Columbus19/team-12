import * as React from 'react';

import { Platform, StyleSheet, Text, View, TextInput, Button, Alert, Linking } from "react-native";

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {textFName:"", textLName:"", textEmail:"", textUser:"", text: ""}
  }
  checkEmpty(){
    if(this.state.text.trim().length == 0 || this.state.textFName.trim().length == 0 || this.state.textLName.trim().length == 0 || 
    this.state.textEmail.trim().length == 0 || this.state.textUser.trim().length == 0){
      Alert.alert("please complete all fields")
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Register
        </Text>
        <TextInput onChangeText={(textFName) => this.setState({textFName})} value={this.state.textFName}
          style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2,         
          marginBottom: 10}}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" First Name"
        />
        <TextInput onChangeText={(textLName) => this.setState({textLName})} value={this.state.textLName}
          style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2,         
          marginBottom: 10}}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Last Name"
        />
        <TextInput onChangeText={(textEmail) => this.setState({textEmail})} value={this.state.textEmail}
        style = {styles.con}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter an Email"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          // Making the Text Input Text Hidden.
        />
        <TextInput onChangeText={(textUser) => this.setState({textUser})} value={this.state.textUser}
          style={{height: 45,width: "95%",borderColor: "gray",borderWidth: 2,         
          marginBottom: 10}}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter a Username"
        />
        <TextInput onChangeText={(text) => this.setState({text})} value={this.state.text}
        style = {styles.con}
          // Adding hint in TextInput using Placeholder option.
          placeholder=" Enter a Password"
          // Making the Under line Transparent.
          underlineColorAndroid="transparent"
          // Making the Text Input Text Hidden.
          secureTextEntry={true}
        />
        
        <Button
          title="Sign Up"
          onPress={() => { this.checkEmpty(); } 
          }
        />

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
