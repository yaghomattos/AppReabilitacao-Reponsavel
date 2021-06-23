import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../screens/Home';
import { Chat } from '../screens/Chat';

const { Navigator, Screen } = createBottomTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Navigator
        tabBarOptions={{
          style: {
            elevation: 0,
            shadowOpacity: 0,
            height: 64,
          },
          tabStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          },
          labelStyle: {
            fontSize: 13,
            marginLeft: 16,
          },
          inactiveBackgroundColor: '#fafafc',
          activeBackgroundColor: '#ebebf5',
          inactiveTintColor: '#c1bccc',
          activeTintColor: '#32264d',
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Chat" component={Chat} />
      </Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
