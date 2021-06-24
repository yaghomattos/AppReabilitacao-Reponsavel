import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Navigation from './src/components/Navigation';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  'm0GlXlzavxfoYkdEfQOfcvg3P57xCrcQDhTwJ0O8',
  'fKv7jVaceov8sgadLXeGa6HFpPS3UrUOrpCyAhjw'
);
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
};

export default App;
