import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  agree1: t.Boolean,
  agree2: t.Boolean,
  agree3: t.Boolean,
  agree4: t.Boolean,
  agree5: t.Boolean,
  agree6: t.Boolean,
  agree7: t.Boolean
});

const formStyles = {
  ...Form.stylesheet,
  formGroup: {
    normal: {
      marginBottom: 10
    },
  },
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    },
    // the style applied when a validation error occours
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const options = {
  fields: {
    agree1: {
      label: 'Agree to Terms',
    },
    agree2: {
      label: 'Agree to Terms',
    },
    agree3: {
      label: 'Agree to Terms',
    },
    agree4: {
      label: 'Agree to Terms',
    },
    agree5: {
      label: 'Agree to Terms',
    },
    agree6: {
      label: 'Agree to Terms',
    },
    agree7: {
      label: 'Agree to Terms',
    },
  },
  stylesheet: formStyles,
};

export default class App extends Component {
  handleSubmit = () => {
    const value = this._form.getValue();
    console.log('value: ', value);
  }

  render() {
    return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={User}
          options={options}
        />
        <Button
          title="Sign Up!"
          onPress={this.handleSubmit}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
});
