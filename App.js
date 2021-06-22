import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Parse from 'parse/react-native.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createPatient } from './src/Patient';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  'm0GlXlzavxfoYkdEfQOfcvg3P57xCrcQDhTwJ0O8',
  'fKv7jVaceov8sgadLXeGa6HFpPS3UrUOrpCyAhjw'
);
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
  const [patient, setPatient] = useState(new Parse.Object('Patient'));

  //Fetch Patiente
  async function fetchPatient() {
    let query = new Parse.Query('Patient');

    query.equalTo('name', 'Paciente Teste');

    let queryResult = await query.find();

    const currentPatient = queryResult[0];

    alert('Pacient returned !');
    console.log('Paciente nome: ', currentPatient.get('name'));
    console.log('Paciente email: ', currentPatient.get('email'));
    setPatient(currentPatient);
  }

  return (
    <View style={styles.container}>
      <Text>Name: {patient.get('name')}</Text>
      <Text>email: {patient.get('email')}</Text>
      <Button title="Add patient" onPress={createPatient} />
      <Button title="Fetch patient" onPress={fetchPatient} />
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
