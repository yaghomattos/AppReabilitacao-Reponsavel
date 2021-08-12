import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login/index';
import { Register } from '../screens/Register/index';
import { Home } from '../screens/Home/index';
import { Chat } from '../screens/Chat/index';
import { PatientRecord } from '../screens/RecordPatient/index';
import { DeletePatient } from '../screens/DeletePatient/index';
import { UploadExercise } from '../screens/UploadExercise/index';
import { PatientControl } from '../screens/PatientControl/index';
import { ListPatients } from '../screens/ListPatients/index';
import { ListSelectExercises } from '../screens/ListSelectExercise/index';
import { ListPatientSelectExercise } from '../screens/ListPatientToSelectExercise/index';
import { SelectExercises } from '../screens/SelectExercise/index';
import { ListPatientChat } from '../screens/ListPatientToChat/index';
import { PatientProfile } from '../screens/PatientProfile/index';
import { Hello } from '../components/Hello/index';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} options={{ mode: 'modal', headerLeft: null }}/>
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PatientControl" component={PatientControl} />
        <Stack.Screen name="PatientRecord" component={PatientRecord} />
        <Stack.Screen name="DeletePatient" component={DeletePatient} />
        <Stack.Screen name="UploadExercise" component={UploadExercise} />
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
        <Stack.Screen name="PatientProfile" component={PatientProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
