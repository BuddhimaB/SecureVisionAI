// src/pages/DashboardPage.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const DashboardPage = ({ navigation }) => {
  return (
    <View>
      <Text>Dashboard Page</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Intrusion" onPress={() => navigation.navigate('Intrusion')} />
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default DashboardPage;
