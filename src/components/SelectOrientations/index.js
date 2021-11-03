import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createSelectOrientations(patientId, orientationId) {
  var patientPointer = {
    __type: 'Pointer',
    className: 'Patient',
    objectId: patientId,
  };
  var orientationPointer = {
    __type: 'Pointer',
    className: 'Orientation',
    objectId: orientationId,
  };

  const myNewObject = new Parse.Object('SelectOrientations');
  myNewObject.set('patient', patientPointer);
  myNewObject.set('orientation', orientationPointer);
  try {
    const result = await myNewObject.save();
    Alert.alert('Orientação selecionada para o paciente');
  } catch (error) {
    console.error('Error while creating SelectOrientations: ', error);
  }
}

export async function readSelectOrientations() {
  const SelectOrientations = Parse.Object.extend('SelectOrientations');
  const query = new Parse.Query(SelectOrientations);
  try {
    const results = await query.find();
  } catch (error) {
    console.error('Error while fetching SelectOrientations', error);
  }
}

export async function updateSelectOrientations(orientationId, text) {
  var orientationPointer = {
    __type: 'Pointer',
    className: 'Orientation',
    objectId: orientationId,
  };

  const query = new Parse.Query('SelectOrientations');
  try {
    const object = await query.get(orientationPointer);
    if (text != 0) object.set('text', text);
    try {
      const response = await object.save();
      console.log('SelectOrientations updated', response);
    } catch (error) {
      console.error('Error while updating SelectOrientations', error);
    }
  } catch (error) {
    console.error('Error while retrieving object SelectOrientations', error);
  }
}

export async function deleteSelectOrientations() {
  const query = new Parse.Query('SelectOrientations');
  try {
    const object = await query.get('xKue915KBG');
    try {
      const response = await object.destroy();
      console.log('Deleted SelectOrienatitons', response);
    } catch (error) {
      console.error('Error while deleting SelectOrienatitons', error);
    }
  } catch (error) {
    console.error('Error while retrieving SelectOrienatitons', error);
  }
}