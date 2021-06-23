import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  createPatient,
  readPatient,
  updatePatient,
  deletePatient,
} from './src/controller/Patient';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  'm0GlXlzavxfoYkdEfQOfcvg3P57xCrcQDhTwJ0O8',
  'fKv7jVaceov8sgadLXeGa6HFpPS3UrUOrpCyAhjw'
);
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Add patient" onPress={createPatient} />
      <Button title="Update patient" onPress={updatePatient} />
      <Button title="Read patient" onPress={readPatient} />
      <Button title="Delete patient" onPress={deletePatient} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
