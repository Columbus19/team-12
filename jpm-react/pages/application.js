import React, { Component } from 'react';
import { View, StyleSheet, Button } from 'react-native';

import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  first_name: t.String,
  middle_initial: t.maybe(t.String),
  last_name: t.String,
  email: t.String,
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
  high_school_state: t.String,
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
  prev_intern_type: t.maybe(t.String),
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
  parent_email: t.String,
  relocate: t.maybe(t.Boolean),
  relocate_city1: t.maybe(t.String),
  relocate_city2: t.maybe(t.String),
  relocate_city3: t.maybe(t.String),
  drivers_license: t.Boolean,
  type_transportation: t.String,
  coop: t.String,
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
    email: {
      error: 'Without an email address how are you going to reset your password when you forget it?'
    },
    password: {
      error: 'Choose something you use on a dozen other sites or something you won\'t remember'
    },
    terms: {
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
