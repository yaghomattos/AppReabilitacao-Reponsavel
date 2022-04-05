import {
  Feather,
  Foundation,
  MaterialIcons,
  Octicons,
} from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Analytics from 'expo-firebase-analytics';
import React from 'react';
import { Chat } from '../screens/Chat/index';
import { Educational } from '../screens/Educational/index';
import { ExerciseSettings } from '../screens/Exercise/ExerciseSettings/index';
import { ListExercises } from '../screens/Exercise/ListExercises/index';
import { ListSelectExercise } from '../screens/Exercise/ListSelectExercise/index';
import { SelectExercise } from '../screens/Exercise/SelectExercise/index';
import { UploadExercise } from '../screens/Exercise/UploadExercise/index';
import { Home } from '../screens/Home/index';
import { Login } from '../screens/Login/index';
import { Monitoring } from '../screens/Monitoring/index';
import { ListOrientations } from '../screens/Orientation/ListOrientations';
import { ListSelectOrientation } from '../screens/Orientation/ListSelectOrientation/index';
import { NewOrientation } from '../screens/Orientation/NewOrientation/index';
import { SelectOrientation } from '../screens/Orientation/SelectOrientation/index';
import { ListParticipantRoute } from '../screens/Participant/ListParticipantRoute/index';
import { ListParticipants } from '../screens/Participant/ListParticipants/index';
import { ParticipantProfile } from '../screens/Participant/ParticipantProfile/index';
import { ParticipantRecord } from '../screens/Participant/RecordParticipant/index';
import { Register } from '../screens/Register/index';
import { ListSelectTest } from '../screens/Test/ListSelectTest/index';
import { ListTests } from '../screens/Test/ListTests/index';
import { SelectTest } from '../screens/Test/SelectTest/index';
import { TestSettings } from '../screens/Test/TestSettings/index';
import { UploadTest } from '../screens/Test/UploadTest/index';
import { ViewForm } from '../screens/ViewForm/index';

const AuthStack = createStackNavigator();
const FlowStack = createStackNavigator();

const Drawer = createDrawerNavigator();

const SelectExerciseStack = createStackNavigator();
const MonitoringExerciseStack = createStackNavigator();
const ExerciseTab = createBottomTabNavigator();

const SelectTestStack = createStackNavigator();
const MonitoringTestStack = createStackNavigator();
const TestTab = createBottomTabNavigator();

export function AuthRouter() {
  const navigationRef = React.useRef();
  const routeNameRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await Analytics.logEvent('screen_view', {
            screen_name: currentRouteName,
          });
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      <AuthStack.Navigator headerMode="none" initialRouteName="Login">
        <AuthStack.Screen name="Login" component={Login} />
        <AuthStack.Screen name="Register" component={Register} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

function MonitoringExercise() {
  return (
    <MonitoringExerciseStack.Navigator headerMode="none">
      <MonitoringExerciseStack.Screen
        name="Monitoramento"
        component={ListParticipantRoute}
        initialParams={{ route: 'ExerciseMonitoring' }}
      />
      <MonitoringExerciseStack.Screen
        name="Monitoring"
        component={Monitoring}
      />
    </MonitoringExerciseStack.Navigator>
  );
}

function SelectExerciseFlow() {
  return (
    <SelectExerciseStack.Navigator headerMode="none">
      <SelectExerciseStack.Screen
        name="Exercícios Selecionados"
        component={ListParticipantRoute}
        initialParams={{ route: 'ListSelectExercise' }}
      />

      <SelectExerciseStack.Screen
        name="ListSelectExercise"
        component={ListSelectExercise}
      />
    </SelectExerciseStack.Navigator>
  );
}

function Training() {
  return (
    <ExerciseTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#fefefe',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          height: '12%',
          paddingTop: 5,
          backgroundColor: '#565755',
          borderTopColor: 'transparent',
        },
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Exercícios':
              return <Octicons name={'checklist'} size={size} color={color} />;

            case 'Treinamento':
              return (
                <MaterialIcons
                  name={'directions-walk'}
                  size={size}
                  color={color}
                />
              );
            case 'Monitoramento ':
              return <Feather name={'activity'} size={size} color={color} />;
          }
        },
        tabBarLabelStyle: {
          flex: 1,
          width: '100%',
          fontSize: 16,
        },
      })}
    >
      <ExerciseTab.Screen name="Exercícios" component={ListExercises} />
      <ExerciseTab.Screen name="Treinamento" component={SelectExerciseFlow} />
      <ExerciseTab.Screen
        name="Monitoramento "
        component={MonitoringExercise}
      />
    </ExerciseTab.Navigator>
  );
}

function MonitoringTest() {
  return (
    <MonitoringTestStack.Navigator headerMode="none">
      <MonitoringTestStack.Screen
        name="Monitoramento"
        component={ListParticipantRoute}
        initialParams={{ route: 'TestMonitoring' }}
      />
      <MonitoringTestStack.Screen name="Monitoring" component={Monitoring} />
    </MonitoringTestStack.Navigator>
  );
}
function SelectTestFlow() {
  return (
    <SelectTestStack.Navigator headerMode="none">
      <SelectTestStack.Screen
        name="Exercícios Selecionados"
        component={ListParticipantRoute}
        initialParams={{ route: 'ListSelectTest' }}
      />

      <SelectTestStack.Screen
        name="ListSelectTest"
        component={ListSelectTest}
      />
    </SelectTestStack.Navigator>
  );
}

function Tests() {
  return (
    <TestTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#fefefe',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          height: '12%',
          paddingTop: 5,
          backgroundColor: '#565755',
          borderTopColor: 'transparent',
        },
        tabBarIcon: ({ color, size }) => {
          switch (route.name) {
            case 'Testes':
              return <Octicons name={'checklist'} size={size} color={color} />;
            case 'Avaliação':
              return (
                <Foundation
                  name={'clipboard-pencil'}
                  size={size}
                  color={color}
                />
              );
            case 'Monitoramento':
              return <Feather name={'activity'} size={size} color={color} />;
          }
        },
        tabBarLabelStyle: {
          flex: 1,
          width: '100%',
          fontSize: 16,
        },
      })}
    >
      <TestTab.Screen name="Testes" component={ListTests} />
      <TestTab.Screen name="Avaliação" component={SelectTestFlow} />
      <TestTab.Screen name="Monitoramento" component={MonitoringTest} />
    </TestTab.Navigator>
  );
}

export function FlowRouter() {
  const navigationRef = React.useRef();
  const routeNameRef = React.useRef();
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current.getCurrentRoute().name;
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current.getCurrentRoute().name;

        if (previousRouteName !== currentRouteName) {
          await Analytics.logEvent('screen_view', {
            screen_name: currentRouteName,
          });
        }

        routeNameRef.current = currentRouteName;
      }}
    >
      <FlowStack.Navigator headerMode="none" initialRouteName="DrawerMenu">
        {/* <FlowStack.Screen name="Home" component={Home} /> */}
        <FlowStack.Screen name="Chat" component={Chat} />
        <FlowStack.Screen name="Educational" component={Educational} />

        <FlowStack.Screen
          name="ParticipantRecord"
          component={ParticipantRecord}
        />
        <FlowStack.Screen
          name="ListParticipants"
          component={ListParticipants}
        />

        <FlowStack.Screen
          name="ListParticipantRoute"
          component={ListParticipantRoute}
        />
        <FlowStack.Screen name="UploadExercise" component={UploadExercise} />
        <FlowStack.Screen name="UploadTest" component={UploadTest} />
        <FlowStack.Screen name="ListTests" component={Tests} />
        <FlowStack.Screen name="ListExercises" component={Training} />
        <FlowStack.Screen
          name="ListOrientations"
          component={ListOrientations}
        />
        <FlowStack.Screen name="SelectTest" component={SelectTest} />
        <FlowStack.Screen name="SelectExercise" component={SelectExercise} />
        <FlowStack.Screen
          name="SelectOrientation"
          component={SelectOrientation}
        />
        <FlowStack.Screen
          name="ListSelectOrientation"
          component={ListSelectOrientation}
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
        <FlowStack.Screen name="NewOrientation" component={NewOrientation} />

        <FlowStack.Screen name="DrawerMenu" component={MenuDrawer} />
      </FlowStack.Navigator>
    </NavigationContainer>
  );
}

function MenuDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#fefefe',
          width: '60%',
        },
        headerStyle: {
          backgroundColor: '#76BCAA',
        },
      }}
    >
      <Drawer.Screen name="App Reabilitação" component={Home} />
    </Drawer.Navigator>
  );
}
