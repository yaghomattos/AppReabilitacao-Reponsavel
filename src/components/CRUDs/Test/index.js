import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createTest(props) {
  var { base64, testName } = props.video;
  testName = props.name + '.gif';
  const parseFileTest = new Parse.File(testName, { base64 });

  var { base64, photoName } = props.photo;
  photoName = props.name + '.png';
  const parseFilePhoto = new Parse.File(photoName, { base64 });

  try {
    const testFile = await parseFileTest.save();
    const photoFile = await parseFilePhoto.save();

    const File = Parse.Object.extend('Test');
    const object = new File();
    object.set('video', testFile);
    object.set('photo', photoFile);
    object.set('name', props.name);
    object.set('description', props.description);
    if (timer != '') object.set('timer', props.timer);
    else object.set('reps', props.reps);

    await object.save();
    Alert.alert('Teste Salvo');
  } catch (error) {
    Alert.alert('Erro ao salvar teste!', error);
  }
}

export async function readTest(name) {
  var result = '';
  const Test = Parse.Object.extend('Test');
  const query = new Parse.Query(Test);
  query.equalTo('name', name);
  try {
    const results = await query.find();
    result = results;
  } catch (error) {
    console.error('Error while fetching Test', error);
  }
  return result[0];
}

export async function updateTest() {
  const query = new Parse.Query(Test);
  try {
    const object = await query.get('xKue915KBG');
    object.set(
      'video',
      new Parse.File('resume.txt', { base64: btoa('My file content') })
    );
    try {
      const response = await object.save();
      console.log(response.get('video'));
      console.log('Test updated', response);
    } catch (error) {
      console.error('Error while updating Test', error);
    }
  } catch (error) {
    console.error('Error while retrieving object Test', error);
  }
}

export async function deleteTest() {
  const query = new Parse.Query('Test');
  try {
    const object = await query.get('xKue915KBG');
    try {
      const response = await object.destroy();
      console.log('Deleted Test', response);
    } catch (error) {
      console.error('Error while deleting Test', error);
    }
  } catch (error) {
    console.error('Error while retrieving Test', error);
  }
}
