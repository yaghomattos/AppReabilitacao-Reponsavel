import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createSelectExercises(patient, exercise) {
  const myNewObject = new Parse.Object('SelectExercises');
  myNewObject.set('patient', patient);
  myNewObject.set('exercise', exercise);
  try {
    const result = await myNewObject.save();
    Alert.alert('Exercício', result.get('exercise').get('name'), 
    'selecionado para o paciente', result.get('patient').get('name'));
  } catch (error) {
    console.error('Error while creating SelectExercises: ', error);
  }
}

export async function readSelectExercises() {
  const SelectExercises = Parse.Object.extend('SelectExercises');
  const query = new Parse.Query(SelectExercises);
  try {
    const results = await query.find();
    for (const object of results) {
      const Patient = object.get('Patient');
      const Exercise = object.get('Exercise');
      console.log(Patient);
      console.log(Exercise);
    }
  } catch (error) {
    console.error('Error while fetching SelectExercises', error);
  }
}

export async function updateSelectExercises() {
  const query = new Parse.Query(SelectExercises);
  try {
    const object = await query.get('xKue915KBG');
    object.set('Patient', new Parse.Object("Patient"));
    object.set('Exercise', new Parse.Object("Exercise"));
    try {
      const response = await object.save();
      console.log(response.get('Patient'));
      console.log(response.get('Exercise'));
      console.log('SelectExercises updated', response);
    } catch (error) {
      console.error('Error while updating SelectExercises', error);
      }
    } catch (error) {
      console.error('Error while retrieving object SelectExercises', error);
    }
}

export async function deleteSelectExercises() {
  const query = new Parse.Query('SelectExercises');
  try {
    const object = await query.get('xKue915KBG');
    try {
      const response = await object.destroy();
      console.log('Deleted ParseObject', response);
    } catch (error) {
      console.error('Error while deleting ParseObject', error);
    }
  } catch (error) {
    console.error('Error while retrieving ParseObject', error);
  }
}