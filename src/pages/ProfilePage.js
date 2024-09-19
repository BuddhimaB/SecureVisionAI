// src/pages/ProfilePage.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const ProfilePage = ({ navigation }) => {
  return (
    <View>
      <Text>Profile Page</Text>
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
      <Button title="Back to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

export default ProfilePage;
