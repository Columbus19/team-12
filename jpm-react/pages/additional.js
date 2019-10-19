import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  citizen_status: t.String,
  citizen_country: t.String,
  sponser: t.Boolean,
  dob_day: t.Number,
  dob_month: t.Number,
  dob_year: t.Number,
  gender: t.maybe(t.Boolean),
  race: t.maybe(t.String),
  married: t.maybe(t.String),
  language: t.maybe(t.String),
  language_fluency: t.maybe(t.String),
  language_notes: t.maybe(t.String),
  disability: t.maybe(t.String),
  disability_accom: t.maybe(t.String),
  veteran: t.maybe(t.String),
  veteran_date: t.maybe(t.String),
  street_address: t.String,
  apt_num: t.maybe(t.String),
  city: t.String,
  state: t.String,
  zip: t.Number,
  country: t.String,
  phone_num: t.Number,
  phone_type: t.maybe(t.String),
  second_phone: t.maybe(t.Number),
  second_phone_type: t.maybe(t.String),
  contact_time: t.String,
  send_text: t.Boolean,
  parent_name: t.String,
  parent_relation: t.String,
  parent_phone: t.Number,
  parent_email: t.String
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
  // fields: {
  //   email: {
  //     error: 'Without an email address how are you going to reset your password when you forget it?'
  //   },
  //   password: {
  //     error: 'Choose something you use on a dozen other sites or something you won\'t remember'
  //   },
  //   terms: {
  //     label: 'Agree to Terms',
  //   },
  // },
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
