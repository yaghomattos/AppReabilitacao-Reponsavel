import Parse from 'parse/react-native.js';

export async function createPatient() {
  const newPatient = new Parse.Object('Patient');
  newPatient.set('name', 'Paciente1');
  newPatient.set('email', 'paciente1@gmail.com');

  try {
    const result = await newPatient.save();
    console.log('Patient created', result);
  } catch (error) {
    console.error('Error while creating Patient: ', error);
  }
}

export async function readPatient() {
  const Patient = Parse.Object.extend('Patient');
  const query = new Parse.Query(Patient);
  query.equalTo('objectId', 'S58KvGR3Ex');

  try {
    const results = await query.find();
    for (const object of results) {
      const name = object.get('name');
      const email = object.get('email');
      console.log(name);
      console.log(email);
    }
  } catch (error) {
    console.error('Error while fetching Patient', error);
  }
}

export async function updatePatient() {
  const query = new Parse.Query('Patient');
  try {
    const object = await query.get('zhHv8svvJ6');
    object.set('name', 'A string');
    object.set('email', 'A string');
    try {
      const response = await object.save();

      console.log(response.get('name'));
      console.log(response.get('email'));
      console.log('Patient updated', response);
    } catch (error) {
      console.error('Error while updating Patient', error);
    }
  } catch (error) {
    console.error('Error while retrieving object Patient', error);
  }
}

export async function deletePatient() {
  const query = new Parse.Query('Patient');
  try {
    const patient = await query.get('xKue915KBG');
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
