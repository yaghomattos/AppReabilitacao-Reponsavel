import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Chat } from '../screens/Chat/index';
import { Educational } from '../screens/Educational/index';
import { ExerciseSettings } from '../screens/Exercise/ExerciseSettings/index';
import { ListSelectExercise } from '../screens/Exercise/ListSelectExercise/index';
import { MenuTraining } from '../screens/Exercise/MenuTraining/index';
import { SelectExercise } from '../screens/Exercise/SelectExercise/index';
import { UploadExercise } from '../screens/Exercise/UploadExercise/index';
import { Home } from '../screens/Home/index';
import { Login } from '../screens/Login/index';
import { Monitoring } from '../screens/Monitoring/index';
import { ListSelectOrientation } from '../screens/Orientation/ListSelectOrientation/index';
import { MenuOrientation } from '../screens/Orientation/MenuOrientation/index';
import { NewOrientation } from '../screens/Orientation/NewOrientation/index';
import { SelectOrientation } from '../screens/Orientation/SelectOrientation/index';
import { DeleteParticipant } from '../screens/Participant/DeleteParticipant/index';
import { ListParticipantRoute } from '../screens/Participant/ListParticipantRoute/index';
import { ListParticipants } from '../screens/Participant/ListParticipants/index';
import { ParticipantControl } from '../screens/Participant/ParticipantControl/index';
import { ParticipantProfile } from '../screens/Participant/ParticipantProfile/index';
import { ParticipantRecord } from '../screens/Participant/RecordParticipant/index';
import { Register } from '../screens/Register/index';
import { ListSelectTest } from '../screens/Test/ListSelectTest/index';
import { MenuTest } from '../screens/Test/MenuTest';
import { SelectTest } from '../screens/Test/SelectTest/index';
import { TestSettings } from '../screens/Test/TestSettings/index';
import { UploadTest } from '../screens/Test/UploadTest/index';
import { ViewForm } from '../screens/ViewForm/index';

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
        <Stack.Screen
          name="ParticipantControl"
          component={ParticipantControl}
        />
        <Stack.Screen name="ParticipantRecord" component={ParticipantRecord} />
        <Stack.Screen name="DeleteParticipant" component={DeleteParticipant} />
        <Stack.Screen name="UploadExercise" component={UploadExercise} />
        <Stack.Screen name="UploadTest" component={UploadTest} />
        <Stack.Screen name="ListParticipants" component={ListParticipants} />
        <Stack.Screen
          name="ListSelectExercise"
          component={ListSelectExercise}
        />
        <Stack.Screen name="ListSelectTest" component={ListSelectTest} />
        <Stack.Screen
          name="ListSelectOrientation"
          component={ListSelectOrientation}
        />
        <Stack.Screen
          name="ListParticipantRoute"
          component={ListParticipantRoute}
        />
        <Stack.Screen name="SelectExercise" component={SelectExercise} />
        <Stack.Screen name="SelectTest" component={SelectTest} />
        <Stack.Screen name="SelectOrientation" component={SelectOrientation} />
        <Stack.Screen
          name="ParticipantProfile"
          component={ParticipantProfile}
        />
        <Stack.Screen name="ExerciseSettings" component={ExerciseSettings} />
        <Stack.Screen name="TestSettings" component={TestSettings} />
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
