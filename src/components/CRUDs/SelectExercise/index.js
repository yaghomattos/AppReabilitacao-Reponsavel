import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createSelectExercises(participantId, exerciseId) {
  var participantPointer = {
    __type: 'Pointer',
    className: 'Participant',
    objectId: participantId,
  };
  var exercisePointer = {
    __type: 'Pointer',
    className: 'Exercise',
    objectId: exerciseId,
  };

  const myNewObject = new Parse.Object('SelectExercises');
  myNewObject.set('participant', participantPointer);
  myNewObject.set('exercise', exercisePointer);
  try {
    const result = await myNewObject.save();
    Alert.alert('Exercício selecionado para o paciente');
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
      const Participant = object.get('Participant');
      const Exercise = object.get('Exercise');
      console.log(Participant);
      console.log(Exercise);
    }
  } catch (error) {
    console.error('Error while fetching SelectExercises', error);
  }
}

export async function updateSelectExercises(exercise) {
  var exercisePointer = {
    __type: 'Pointer',
    className: 'Exercise',
    objectId: exercise.id,
  };

  const query = new Parse.Query('SelectExercises');
  try {
    const object = await query.get(exercisePointer);
    if (exercise.sets != '') object.set('sets', exercise.sets);
    if (exercise.reps != '') object.set('reps', exercise.reps);
    if (exercise.timer != '') object.set('timer', exercise.timer);
    try {
      const response = await object.save();
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
