// src/pages/SettingsPage.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsPage = ({ navigation }) => {
  return (
    <View>
      <Text>Settings Page</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Back to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

export default SettingsPage;
