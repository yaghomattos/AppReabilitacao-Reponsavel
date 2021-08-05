import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login';
import { Register } from '../screens/Register';
import { Home } from '../screens/Home';
import { Chat } from '../screens/Chat';
import { PatientRecord } from '../screens/RecordPatient';
import { DeletePatient } from '../screens/DeletePatient';
import { UploadExercise } from '../screens/UploadExercise';
import { ListExercises } from '../screens/ListExercises';
import { PatientControl } from '../screens/PatientControl';
import { ListPatients } from '../screens/ListPatients';
import { ListSelectExercises } from '../screens/ListSelectExercises';
import { ConfirmExercise } from '../components/ConfirmExercise';
import { ListPatientSelectExercise } from '../screens/ListPatientSelectExercise';
import { SelectExercises } from '../screens/SelectExercises';
import { ListPatientChat } from '../screens/ListPatientChat';

const Stack = createStackNavigator();

export function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={{ mode: 'modal', headerLeft: null }}/>
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PatientControl" component={PatientControl} />
        <Stack.Screen name="PatientRecord" component={PatientRecord} />
        <Stack.Screen name="DeletePatient" component={DeletePatient} />
        <Stack.Screen name="UploadExercise" component={UploadExercise} />
        <Stack.Screen name="ListExercises" component={ListExercises} />
        <Stack.Screen name="ListPatients" component={ListPatients} />
        <Stack.Screen
          name="ListSelectExercises"
          component={ListSelectExercises}
        />
        <Stack.Screen name="ListPatientChat" component={ListPatientChat} />
        <Stack.Screen name="ConfirmExercise" component={ConfirmExercise} />
        <Stack.Screen
          name="ListPatientSelectExercise"
          component={ListPatientSelectExercise}
        />
        <Stack.Screen name="SelectExercises" component={SelectExercises} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
