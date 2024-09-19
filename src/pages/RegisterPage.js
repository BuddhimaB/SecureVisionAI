// src/pages/RegisterPage.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const RegisterPage = ({ navigation }) => {
  return (
    <View>
      <Text>Register Page</Text>
      <Button title="Register" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterPage;
