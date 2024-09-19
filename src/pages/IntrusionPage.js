// src/pages/IntrusionPage.js

import React from 'react';
import { View, Text, Button } from 'react-native';

const IntrusionPage = ({ navigation }) => {
  return (
    <View>
      <Text>Intrusion Page</Text>
      <Button title="Back to Dashboard" onPress={() => navigation.navigate('Dashboard')} />
    </View>
  );
};

export default IntrusionPage;
