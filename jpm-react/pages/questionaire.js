import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  parent_college: t.Boolean,
  house_income: t.String,
  house_members: t.String,
  education_funding_method: t.String,
  motivation1: t.String,
  motivation2: t.String,
  student_member: t.Boolean,
  student_member_type: t.maybe(t.String),
  high_school_type: t.String,
  access_corp: t.Boolean,
  social_member: t.Boolean,
  social_member_type: t.String,
  college_career_service: t.Boolean,
  prof_mentor: t.Boolean,
  prev_intern: t.Boolean,
  prev_intern_type: t.maybe(t.String)
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
  //fields: {
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
