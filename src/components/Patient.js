import Parse from 'parse/react-native.js';

export async function createPatient(name, CPF) {
  const newPatient = new Parse.Object('Patient');
  newPatient.set('name', name);
  newPatient.set('CPF', CPF);

  try {
    const result = await newPatient.save();
    console.log('Patient created', result);
  } catch (error) {
    console.error('Error while creating Patient: ', error);
  }
}

export async function readPatient(name) {
  const Patient = Parse.Object.extend('Patient');
  const query = new Parse.Query(Patient);
  var result = '';
  query.equalTo('name', name);
  try {
    const results = await query.find();
    for (const object of results) {
      const name = object.get('name');
      //console.log(object.id);
    }
    result = results;
  } catch (error) {
    console.error('Error while fetching Patient', error);
    return;
  }
  return result[0].id;
}

export async function updatePatient() {
  const query = new Parse.Query('Patient');
  try {
    const object = await query.get('zhHv8svvJ6');
    object.set('name', 'A string');
    try {
      const response = await object.save();

      console.log(response.get('name'));
      console.log('Patient updated', response);
    } catch (error) {
      console.error('Error while updating Patient', error);
    }
  } catch (error) {
    console.error('Error while retrieving object Patient', error);
  }
}

export async function deletePatient(objectId) {
  const query = new Parse.Query('Patient');
  try {
    const patient = await query.get(objectId);
    try {
      const response = await patient.destroy();
      console.log('Deleted ParsePatient', response);
    } catch (error) {
      console.error('Error while deleting ParsePatient', error);
    }
  } catch (error) {
    console.error('Error while retrieving ParsePatient', error);
  }
}
