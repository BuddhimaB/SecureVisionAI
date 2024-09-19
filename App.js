import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Opennnnn up App.js to start working on your app@!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// App.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import your pages
import Login from './screens/Login';
import RegisterPage from './src/pages/RegisterPage';
import DashboardPage from './src/pages/DashboardPage';
import SettingsPage from './src/pages/SettingsPage';
import ProfilePage from './src/pages/ProfilePage';
import IntrusionPage from './src/pages/IntrusionPage';
import ForgotPasswordPage from './src/pages/ForgotPasswordPage'; // Assuming you have a ForgotPasswordPage component

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Dashboard" component={DashboardPage} />
        <Stack.Screen name="Settings" component={SettingsPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Intrusion" component={IntrusionPage} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordPage} /> {/* Added this line */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


