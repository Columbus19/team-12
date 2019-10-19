import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  class_rank: t.String,
  job_type: t.String,
  major: t.String,
  second_major: t.maybe(t.String),
  study_abroad: t.Boolean,
  study_abroad_when: t.String,
  summer_school: t.Boolean,
  summer_school_when: t.String,
  career_interest: t.String,
  career_interest_second: t.String,
  career_interest_third: t.String,
  college_state: t.maybe(t.String),
  college_name: t.maybe(t.String),
  five_program_years: t.Boolean,
  gpa: t.Number,
  gpa_semester: t.String,
  gpa_year: t.String,
  gpa_scale: t.Number,
  graduation_month: t.String,
  graduation_year: t.String,
  remaining_summers: t.String,
  club1: t.String,
  club1_type: t.maybe(t.String),
  club1_year: t.maybe(t.String),
  club1_officheld: t.maybe(t.String),
  club2: t.String,
  club2_type: t.maybe(t.String),
  club2_year: t.maybe(t.String),
  club2_officheld: t.maybe(t.String),
  club3: t.String,
  club3_type: t.maybe(t.String),
  club3_year: t.maybe(t.String),
  club3_officheld: t.maybe(t.String),
  club4: t.String,
  club4_type: t.maybe(t.String),
  club4_year: t.maybe(t.String),
  club4_officheld: t.maybe(t.String),
  high_school: t.String,
  high_school_city: t.String,
  high_school_state: t.String
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
