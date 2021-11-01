import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createSelectExams(patientId, examId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };
  var examPointer = {
    __type: 'Pointer',
    className: 'Exam',
    objectId: examId,
  };

  const myNewObject = new Parse.Object('SelectExams');
  myNewObject.set('patient', patientPointer);
  myNewObject.set('exam', examPointer);
  try {
    const result = await myNewObject.save();
    Alert.alert('Exame selecionado para o paciente');
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

export async function updateSelectExams(examId, timer) {
  var examPointer = {
    __type: 'Pointer',
    className: 'Exam',
    objectId: examId,
  };

  const query = new Parse.Query('SelectExams');
  try {
    const object = await query.get(examPointer);
    if (timer != 0) object.set('timer', timer);
    try {
      const response = await object.save();
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
