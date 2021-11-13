import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login/index';
import { Register } from '../screens/Register/index';
import { Home } from '../screens/Home/index';
import { Chat } from '../screens/Chat/index';
import { Educational } from '../screens/Educational/index';
import { PatientRecord } from '../screens/RecordPatient/index';
import { DeletePatient } from '../screens/DeletePatient/index';
import { UploadExercise } from '../screens/UploadExercise/index';
import { UploadExam } from '../screens/UploadExam/index';
import { PatientControl } from '../screens/PatientControl/index';
import { ListPatients } from '../screens/ListPatients/index';
import { ListPatientRoute } from '../screens/ListPatientRoute/index';
import { ListSelectExercises } from '../screens/ListSelectExercise/index';
import { ListSelectExams } from '../screens/ListSelectExam/index';
import { ListSelectOrientations } from '../screens/ListSelectOrientation/index';
import { SelectExercises } from '../screens/SelectExercise/index';
import { SelectExams } from '../screens/SelectExam/index';
import { SelectOrientations } from '../screens/SelectOrientation/index';
import { PatientProfile } from '../screens/PatientProfile/index';
import { ExerciseSettings } from '../screens/ExerciseSettings/index';
import { ExamSettings } from '../screens/ExamSettings/index';
import { Monitoring } from '../screens/Monitoring/index';
import { ViewForm } from '../screens/ViewForm/index';
import { MenuOrientation } from '../screens/MenuOrientation/index';
import { MenuTraining } from '../screens/MenuTraining/index';
import { MenuTest } from '../screens/MenuTest/index';
import { NewOrientation } from '../screens/NewOrientation/index';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Educational" component={Educational} />
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
        <Stack.Screen
          name="ListSelectOrientations"
          component={ListSelectOrientations}
        />
        <Stack.Screen name="ListPatientRoute" component={ListPatientRoute} />
        <Stack.Screen name="SelectExercises" component={SelectExercises} />
        <Stack.Screen name="SelectExams" component={SelectExams} />
        <Stack.Screen
          name="SelectOrientations"
          component={SelectOrientations}
        />
        <Stack.Screen name="PatientProfile" component={PatientProfile} />
        <Stack.Screen name="ExerciseSettings" component={ExerciseSettings} />
        <Stack.Screen name="ExamSettings" component={ExamSettings} />
        <Stack.Screen name="Monitoring" component={Monitoring} />
        <Stack.Screen name="ViewForm" component={ViewForm} />
        <Stack.Screen name="MenuOrientation" component={MenuOrientation} />
        <Stack.Screen name="MenuTraining" component={MenuTraining} />
        <Stack.Screen name="MenuTest" component={MenuTest} />
        <Stack.Screen name="NewOrientation" component={NewOrientation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
