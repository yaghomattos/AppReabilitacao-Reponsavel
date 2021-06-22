import Parse from 'parse/react-native.js';

export async function createPatient() {
  let newPatient = new Parse.Object('Patient');

  newPatient.set('name', 'Paciente Teste');
  newPatient.set('email', 'paciente@gmail.com');

  try {
    await newPatient.save();

    alert('Success Patient created!');

    return true;
  } catch (error) {
    alert('Error saving new patient: ', error.message);
    return false;
  }
}

export async function readPatient() {
  const parseQuery = new Parse.Query('Patient');
  try {
    let patients = await parseQuery.find();

    setReadResults(patients);
    return true;
  } catch (error) {
    alert('Error!', error.message);
    return false;
  }
}

export async function updatePatient(patientID, name, email) {
  const Patient = new Parse.Object('Patient');

  Patient.set('name', name);
  Patient.set('emai', email);
  try {
    await Patient.save();

    alert('Success, Patient updated!');

    readPatient();
    return true;
  } catch (error) {
    alert('Error!', error.message);
    return false;
  }
}

export async function deletePatient(patientId) {
  const Patient = new Parse.Object('Patient');

  Patient.set('objectId', patientId);
  try {
    await Patient.destroy();
    alert('Success, Patient deleted!');

    readPatient();
    return true;
  } catch (error) {
    alert('Error!', error.message);
    return false;
  }
}
