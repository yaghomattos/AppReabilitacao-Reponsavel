import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/Login/index';
import { Register } from '../screens/Register/index';
import { Home } from '../screens/Home/index';
import { Chat } from '../screens/Chat/index';
import { Educational } from '../screens/Educational/index';
import { ParticipantRecord } from '../screens/Participant/RecordParticipant/index';
import { DeleteParticipant } from '../screens/Participant/DeleteParticipant/index';
import { UploadExercise } from '../screens/UploadExercise/index';
import { UploadTest } from '../screens/Test/UploadTest/index';
import { ParticipantControl } from '../screens/Participant/ParticipantControl/index';
import { ListParticipants } from '../screens/Participant/ListParticipants/index';
import { ListParticipantRoute } from '../screens/Participant/ListParticipantRoute/index';
import { ListTestRoute } from '../screens/Test/ListTestRoute/index';
import { ListSelectExercise } from '../screens/Exercise/ListSelectExercise/index';
import { ListSelectTest } from '../screens/Test/ListSelectTest/index';
import { ListSelectOrientations } from '../screens/ListSelectOrientation/index';
import { SelectExercise } from '../screens/Exercise/SelectExercise/index';
import { SelectTest } from '../screens/Test/SelectTest/index';
import { SelectOrientations } from '../screens/SelectOrientation/index';
import { ParticipantProfile } from '../screens/Participant/ParticipantProfile/index';
import { ExerciseSettings } from '../screens/Exercise/ExerciseSettings/index';
import { TestSettings } from '../screens/Test/TestSettings/index';
import { Monitoring } from '../screens/Monitoring/index';
import { ViewForm } from '../screens/ViewForm/index';
import { MenuOrientation } from '../screens/MenuOrientation/index';
import { MenuTraining } from '../screens/Exercise/MenuTraining/index';
import { MenuTest } from '../screens/Test/MenuTest';
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
          name="ListSelectOrientations"
          component={ListSelectOrientations}
        />
        <Stack.Screen
          name="ListParticipantRoute"
          component={ListParticipantRoute}
        />
        <Stack.Screen name="ListTestRoute" component={ListTestRoute} />
        <Stack.Screen name="SelectExercise" component={SelectExercise} />
        <Stack.Screen name="SelectTest" component={SelectTest} />
        <Stack.Screen
          name="SelectOrientations"
          component={SelectOrientations}
        />
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
