import Parse from 'parse/react-native.js';

export async function createSelectExercises(patient, exercise) {
  const myNewObject = new Parse.Object('SelectExercises');
  myNewObject.set('patient', patient);
  myNewObject.set('exercise', exercise);
  try {
    const result = await myNewObject.save();
    console.log('SelectExercises created', result);
  } catch (error) {
    console.error('Error while creating SelectExercises: ', error);
  }
}

export async function readSelectExercises() {
  const SelectExercises = Parse.Object.extend('SelectExercises');
  const query = new Parse.Query(SelectExercises);
  // You can also query by using a parameter of an object
  // query.equalTo('objectId', 'xKue915KBG');
  const results = await query.find();
  try {
    const results = await query.find();
    for (const object of results) {
      // Access the Parse Object attributes using the .GET method
      const Patient = object.get('Patient');
      const Exercise = object.get('Exercise');
      const name = object.get('name');
      console.log(Patient);
      console.log(Exercise);
      console.log(name);
    }
  } catch (error) {
    console.error('Error while fetching SelectExercises', error);
  }
}

export async function updateSelectExercises() {
  const query = new Parse.Query(SelectExercises);
  try {
    // here you put the objectId that you want to update
    const object = await query.get('xKue915KBG');
    object.set('Patient', new Parse.Object("Patient"));
    object.set('Exercise', new Parse.Object("Exercise"));
    object.set('name', 'A string');
    try {
      const response = await object.save();
      // You can use the "get" method to get the value of an attribute
      // Ex: response.get("<ATTRIBUTE_NAME>")
      // Access the Parse Object attributes using the .GET method
      console.log(response.get('Patient'));
      console.log(response.get('Exercise'));
      console.log(response.get('name'));
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