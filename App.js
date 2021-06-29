import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from './src/screens/Login';
import { Registration } from './src/screens/Registration';
import { Home } from './src/screens/Home';
import { Chat } from './src/screens/Chat';
import { LoginPatient } from './src/components/Patient/PatientLogin';
import { HomePatient } from './src/screens/Patient/MenuPaciente';
import { PatientRecord } from './src/screens/RecordPatient';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.serverURL = 'https://reabilitacao.b4a.io/';
Parse.initialize(
  'm0GlXlzavxfoYkdEfQOfcvg3P57xCrcQDhTwJ0O8',
  'fKv7jVaceov8sgadLXeGa6HFpPS3UrUOrpCyAhjw'
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Sign Up" component={Registration} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PatientRecord" component={PatientRecord} /> */}
        <Stack.Screen name="LoginPatient" component={LoginPatient} />
        <Stack.Screen name="HomePatient" component={HomePatient} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
