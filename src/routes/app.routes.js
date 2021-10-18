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
import { UploadExam } from '../screens/UploadExam/index';
import { PatientControl } from '../screens/PatientControl/index';
import { ListPatients } from '../screens/ListPatients/index';
import { ListPatientSelectExercise } from '../screens/ListPatientToSelectExercise/index';
import { ListPatientSelectExam } from '../screens/ListPatientToSelectExam/index';
import { ListPatientChat } from '../screens/ListPatientToChat/index';
import { ListPatientMonitoring } from '../screens/ListPatientToMonitoring/index';
import { ListSelectExercises } from '../screens/ListSelectExercise/index';
import { ListSelectExams } from '../screens/ListSelectExam/index';
import { SelectExercises } from '../screens/SelectExercise/index';
import { SelectExams } from '../screens/SelectExam/index';
import { PatientProfile } from '../screens/PatientProfile/index';
import { ExerciseSettings } from '../screens/ExerciseSettings/index';
import { Monitoring } from '../screens/Monitoring/index';
import { ViewForm } from '../screens/ViewForm';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="PatientControl" component={PatientControl} />
        <Stack.Screen name="PatientRecord" component={PatientRecord} />
        <Stack.Screen name="DeletePatient" component={DeletePatient} />
        <Stack.Screen name="UploadExercise" component={UploadExercise} />
        <Stack.Screen name="UploadExam" component={UploadExam} />
        <Stack.Screen name="ListPatients" component={ListPatients} />
        <Stack.Screen
          name="ListSelectExercises"
          component={ListSelectExercises}
        />
        <Stack.Screen name="ListSelectExams" component={ListSelectExams} />
        <Stack.Screen name="ListPatientChat" component={ListPatientChat} />
        <Stack.Screen
          name="ListPatientSelectExercise"
          component={ListPatientSelectExercise}
        />
        <Stack.Screen
          name="ListPatientSelectExam"
          component={ListPatientSelectExam}
        />
        <Stack.Screen
          name="ListPatientMonitoring"
          component={ListPatientMonitoring}
        />
        <Stack.Screen name="SelectExercises" component={SelectExercises} />
        <Stack.Screen name="SelectExams" component={SelectExams} />
        <Stack.Screen name="PatientProfile" component={PatientProfile} />
        <Stack.Screen name="ExerciseSettings" component={ExerciseSettings} />
        <Stack.Screen name="Monitoring" component={Monitoring} />
        <Stack.Screen name="ViewForm" component={ViewForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
