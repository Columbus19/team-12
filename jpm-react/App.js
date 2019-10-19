import React from 'react';

import { View, Text, Button } from 'react-native';

import { createAppContainer } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';

 

class HomeScreen extends React.Component {

  render() {

    return (

      <View style={{ flex: 3, alignItems: 'center', justifyContent: 'center' }}>

        <Button

          title="Student"

          onPress={() => this.props.navigation.navigate('Student')}

        />

        <Button

          title="Employer"

          onPress={() => this.props.navigation.navigate('Employer')}

        />

        <Button

          title="Alumni"

          onPress={() => this.props.navigation.navigate('Alumni')}

        />

      </View>

    );

  }

}

class StudentScreen extends React.Component {

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Student Screen</Text>

        <Button

          title="Log In"

          onPress={() => this.props.navigation.navigate('LogIn')}

        />

        <Button

          title="Register"

          onPress={() => this.props.navigation.navigate('Register')}

        />

      </View>

    );

  }

}

class AlumniScreen extends React.Component {

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Alumni Screen</Text>

        <Button

          title="Log In"

          onPress={() => this.props.navigation.navigate('LogIn')}

        />

        <Button

          title="Register"

          onPress={() => this.props.navigation.navigate('Register')}

        />

      </View>

    );

  }

}

class EmployerScreen extends React.Component {

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Employer Screen</Text>

        <Button

          title="Log In"

          onPress={() => this.props.navigation.navigate('LogIn')}

        />

        <Button

          title="Register"

          onPress={() => this.props.navigation.navigate('Register')}

        />

      </View>

    );

  }

}

class LogInScreen extends React.Component {

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>LogIn Screen</Text>

       

      </View>

    );

  }

}

class RegisterScreen extends React.Component {

  render() {

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <Text>Register Screen</Text>

       

      </View>

    );

  }

}

const AppNavigator = createStackNavigator(

  {

    Home: HomeScreen,

    Student: StudentScreen,

    Employer: EmployerScreen,

    Alumni: AlumniScreen,

    LogIn: LogInScreen,

    Register: RegisterScreen

  },

  {

    initialRouteName: 'Home',

  }

);

 

export default createAppContainer(AppNavigator);
