import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createSelectTests(participantId, testId) {
  var participantPointer = {
    __type: 'Pointer',
    className: 'Participant',
    objectId: participantId,
  };
  var testPointer = {
    __type: 'Pointer',
    className: 'Test',
    objectId: testId,
  };

  const myNewObject = new Parse.Object('SelectTests');
  myNewObject.set('participant', participantPointer);
  myNewObject.set('test', testPointer);
  try {
    const result = await myNewObject.save();
    Alert.alert('Teste selecionado para o paciente');
  } catch (error) {
    console.error('Error while creating SelectTests: ', error);
  }
}

export async function readSelectTests() {
  const SelectTests = Parse.Object.extend('SelectTests');
  const query = new Parse.Query(SelectTests);
  try {
    const results = await query.find();
    for (const object of results) {
      const Participant = object.get('Participant');
      const test = object.get('test');
      console.log(Participant);
      console.log(test);
    }
  } catch (error) {
    console.error('Error while fetching SelectTests', error);
  }
}

export async function updateSelectTests(props) {
  var testPointer = {
    __type: 'Pointer',
    className: 'Test',
    objectId: props.testId,
  };

  const query = new Parse.Query('SelectTests');
  try {
    const object = await query.get(testPointer);
    if (props.timer != '') object.set('timer', props.timer);
    else if (props.numReps != '') object.set('numReps', props.numReps);

    if (props.reps) object.set('reps', true);
    if (props.frequency) object.set('frequency', true);
    if (props.saturation) object.set('saturation');
    if (props.dyspnea) object.set('dyspnea', true);
    if (props.fatigue) object.set('fatigue', true);
    try {
      const response = await object.save();
      console.log('SelectTests updated', response);
    } catch (error) {
      console.error('Error while updating SelectTests', error);
    }
  } catch (error) {
    console.error('Error while retrieving object SelectTests', error);
  }
}

export async function deleteSelectTests() {
  const query = new Parse.Query('SelectTests');
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
