// src/pages/ProfilePage.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const ForgotPasswordPage = ({ navigation }) => {
  return (
    <View>
      <Text>ForgotPasswordPage Page</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Back to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

export default ForgotPasswordPage;
