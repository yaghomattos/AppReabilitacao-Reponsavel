import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createSelectExams(patient, exam) {
  const myNewObject = new Parse.Object('SelectExams');
  myNewObject.set('patient', patient);
  myNewObject.set('exam', exam);
  try {
    const result = await myNewObject.save();
    Alert.alert(
      'Exercício',
      result.get('exam').get('name'),
      'selecionado para o paciente',
      result.get('patient').get('name')
    );
  } catch (error) {
    console.error('Error while creating SelectExams: ', error);
  }
}

export async function readSelectExams() {
  const SelectExams = Parse.Object.extend('SelectExams');
  const query = new Parse.Query(SelectExams);
  try {
    const results = await query.find();
    for (const object of results) {
      const Patient = object.get('Patient');
      const exam = object.get('exam');
      console.log(Patient);
      console.log(exam);
    }
  } catch (error) {
    console.error('Error while fetching SelectExams', error);
  }
}

export async function updateSelectExams() {
  const query = new Parse.Query(SelectExams);
  try {
    const object = await query.get('xKue915KBG');
    object.set('Patient', new Parse.Object('Patient'));
    object.set('exam', new Parse.Object('Exam'));
    try {
      const response = await object.save();
      console.log(response.get('Patient'));
      console.log(response.get('exam'));
      console.log('SelectExams updated', response);
    } catch (error) {
      console.error('Error while updating SelectExams', error);
    }
  } catch (error) {
    console.error('Error while retrieving object SelectExams', error);
  }
}

export async function deleteSelectExams() {
  const query = new Parse.Query('SelectExams');
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
