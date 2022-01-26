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
import { ListParticipantRoute } from '../screens/Participant/ListParticipantRoute/index';
import { ListParticipants } from '../screens/Participant/ListParticipants/index';
import { ParticipantProfile } from '../screens/Participant/ParticipantProfile/index';
import { ParticipantRecord } from '../screens/Participant/RecordParticipant/index';
import { Register } from '../screens/Register/index';
import { ListSelectTest } from '../screens/Test/ListSelectTest/index';
import { MenuTest } from '../screens/Test/MenuTest';
import { SelectTest } from '../screens/Test/SelectTest/index';
import { TestSettings } from '../screens/Test/TestSettings/index';
import { UploadTest } from '../screens/Test/UploadTest/index';
import { ViewForm } from '../screens/ViewForm/index';

const AuthStack = createStackNavigator();
const FlowStack = createStackNavigator();

export function AuthRouter() {
  return (
    <NavigationContainer initialRouteName="login">
      <AuthStack.Navigator headerMode="none">
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export function FlowRouter() {
  return (
    <NavigationContainer>
      <FlowStack.Navigator headerMode="none" initialRouteName="Home">
        <FlowStack.Screen name="Home" component={Home} />
        <FlowStack.Screen name="Chat" component={Chat} />
        <FlowStack.Screen name="Educational" component={Educational} />

        <FlowStack.Screen
          name="ParticipantRecord"
          component={ParticipantRecord}
        />
        <FlowStack.Screen name="UploadExercise" component={UploadExercise} />
        <FlowStack.Screen name="UploadTest" component={UploadTest} />
        <FlowStack.Screen
          name="ListParticipants"
          component={ListParticipants}
        />
        <FlowStack.Screen
          name="ListSelectExercise"
          component={ListSelectExercise}
        />
        <FlowStack.Screen name="ListSelectTest" component={ListSelectTest} />
        <FlowStack.Screen
          name="ListSelectOrientation"
          component={ListSelectOrientation}
        />
        <FlowStack.Screen
          name="ListParticipantRoute"
          component={ListParticipantRoute}
        />
        <FlowStack.Screen name="SelectExercise" component={SelectExercise} />
        <FlowStack.Screen name="SelectTest" component={SelectTest} />
        <FlowStack.Screen
          name="SelectOrientation"
          component={SelectOrientation}
        />
        <FlowStack.Screen
          name="ParticipantProfile"
          component={ParticipantProfile}
        />
        <FlowStack.Screen
          name="ExerciseSettings"
          component={ExerciseSettings}
        />
        <FlowStack.Screen name="TestSettings" component={TestSettings} />
        <FlowStack.Screen name="Monitoring" component={Monitoring} />
        <FlowStack.Screen name="ViewForm" component={ViewForm} />
        <FlowStack.Screen name="MenuOrientation" component={MenuOrientation} />
        <FlowStack.Screen name="MenuTraining" component={MenuTraining} />
        <FlowStack.Screen name="MenuTest" component={MenuTest} />
        <FlowStack.Screen name="NewOrientation" component={NewOrientation} />
      </FlowStack.Navigator>
    </NavigationContainer>
  );
}
