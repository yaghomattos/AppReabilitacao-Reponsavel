import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';

import Parse from "parse/react-native.js";
import AsyncStorage from '@react-native-async-storage/async-storage';

Parse.setAsyncStorage(AsyncStorage);
Parse.initialize('m0GlXlzavxfoYkdEfQOfcvg3P57xCrcQDhTwJ0O8','fKv7jVaceov8sgadLXeGa6HFpPS3UrUOrpCyAhjw');
Parse.serverURL = 'https://parseapi.back4app.com/';

const App = () => {
  const [person, setPerson] = useState(new Parse.Object('Person'));

  async function addPerson() {
    try {
      //create a new Parse Object instance
      const newPerson = new Parse.Object('Person');
      //define the attributes you want for your Object
      newPerson.set('name', 'John');
      newPerson.set('email', 'john@back4app.com');
      //save it on Back4App Data Store
      await newPerson.save();
    } catch (error) {
      console.log('Error saving new person: ', error);
    }
  }

  async function fetchPerson() {
    //create your Parse Query using the Person Class you've created
    let query = new Parse.Query('Person');
    // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
    query.equalTo('name', 'John');
    //run the query
    let queryResult = await query.find();
    //pick the first result 
    const currentPerson = queryResult[0];
    //access the Parse Object attributes
    console.log('person id: ', currentPerson.get('id'));
    console.log('person name: ', currentPerson.get('name'));
    console.log('person email: ', currentPerson.get('email'));
    setPerson(currentPerson);
  }

  useEffect(() => {
    fetchPerson()
  }, []);

  return (
    <View style={styles.container}>
      <Text>Name: {person.get('name')}</Text>
      <Text>email: {person.get('email')}</Text>
      <Button title='Add person' onPress={addPerson} />
      <Button title='Fetch person' onPress={fetchPerson} />
    </View>
  )

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems:'center',
    justifyContent:'space-evenly',
  },
});