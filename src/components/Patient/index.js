import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createPatient(props) {
  var currentUser = {
    __type: 'Pointer',
    className: '_User',
    objectId: props.id,
  };

  const newPatient = new Parse.Object('Patient');
  newPatient.set('name', props.name);
  newPatient.set('CPF', props.cpf);
  newPatient.set('age', props.age);
  newPatient.set('phone', props.phone);
  newPatient.set('diagnosis', props.diagnosis);
  newPatient.set('address', props.address);
  newPatient.set('createdFrom', currentUser);
  newPatient.set('createdFromName', props.username);

  try {
    const result = await newPatient.save();
    Alert.alert('Paciente cadastrado com sucesso!');
  } catch (error) {
    console.error('Erro ao cadastrar paciente');
  }
}

export async function readPatient(id) {
  const Patient = Parse.Object.extend('Patient');
  const query = new Parse.Query(Patient);
  var result = '';
  query.equalTo('objectId', id);
  try {
    const results = await query.find();
    result = results;
  } catch (error) {
    console.error('Erro ao buscar paciente:', error);
    return;
  }
  return result[0];
}

export async function readPatientCPF(cpf) {
  const Patient = Parse.Object.extend('Patient');
  const query = new Parse.Query(Patient);
  var result = '';
  query.equalTo('CPF', cpf);
  try {
    const results = await query.find();
    result = results;
    return true;
  } catch (error) {
    console.error('Erro ao buscar paciente:', error);
    return false;
  }
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
