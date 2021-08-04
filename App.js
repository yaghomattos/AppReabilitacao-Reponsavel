import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Login } from './src/screens/Login';
import { Register } from './src/screens/Register';
import { Home } from './src/screens/Home';
import { Chat } from './src/screens/Chat';
import { PatientRecord } from './src/screens/RecordPatient';
import { DeletePatient } from './src/screens/DeletePatient';
import { UploadExercise } from './src/screens/UploadExercise';
import { ListExercises } from './src/screens/ListExercises';
import { PatientControl } from './src/screens/PatientControl';
import { ListPatients } from './src/screens/ListPatients';
import { ListSelectExercises } from './src/screens/ListSelectExercises';
import { ConfirmExercise } from './src/components/ConfirmExercise';
import { ListPatientSelectExercise } from './src/screens/ListPatientSelectExercise';
import { SelectExercises } from './src/screens/SelectExercises';
import { ListPatientChat } from './src/screens/ListPatientChat';

Parse.initialize(
  'mZ19CetKStaIV82Fqx1ZOgKc5HXs8cEuoY8B1igk',
  'X841DiHGWSe4Pac6DgbzQxt96xqMaXzcOZR4mhN1'
);
Parse.serverURL = 'https://reab.b4a.io/';
Parse.setAsyncStorage(AsyncStorage);
Parse.enableLocalDatastore();

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PatientControl" component={PatientControl} />
        <Stack.Screen name="PatientRecord" component={PatientRecord} />
        <Stack.Screen name="DeletePatient" component={DeletePatient} />
        <Stack.Screen name="UploadExercise" component={UploadExercise} />
        <Stack.Screen name="ListExercises" component={ListExercises} />
        <Stack.Screen name="ListPatients" component={ListPatients} />
        <Stack.Screen name="ListSelectExercises" component={ListSelectExercises}/>
        <Stack.Screen name="ListPatientChat" component={ListPatientChat} />
        <Stack.Screen name="ConfirmExercise" component={ConfirmExercise} />
        <Stack.Screen name="ListPatientSelectExercise" component={ListPatientSelectExercise}/>
        <Stack.Screen name="SelectExercises" component={SelectExercises} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
