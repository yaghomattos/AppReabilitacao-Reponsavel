import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createExercise(props) {
  var { base64, fileName } = props.video;
  fileName = props.name + '.gif';
  const parseFile = new Parse.File(fileName, { base64 });

  var { base64, photoName } = props.photo;
  photoName = props.name + '.png';
  const parseFilePhoto = new Parse.File(photoName, { base64 });

  try {
    const responseFile = await parseFile.save();
    const photoFile = await parseFilePhoto.save();

    const File = Parse.Object.extend('Exercise');
    const object = new File();
    object.set('video', responseFile);
    object.set('photo', photoFile);
    object.set('name', props.name);
    object.set('description', props.description);

    await object.save();
    Alert.alert('Exercício Salvo');
  } catch (error) {
    Alert.alert('Erro ao salvar exercício!');
  }
}

export async function readExercise(name) {
  var result = '';
  const Exercise = Parse.Object.extend('Exercise');
  const query = new Parse.Query(Exercise);
  query.equalTo('name', name);
  try {
    const results = await query.find();
    for (const object of results) {
      const video = object.get('video');
      //console.log(video);
    }
    result = results;
  } catch (error) {
    console.error('Error while fetching Exercise', error);
  }
  return result[0];
}

export async function updateExercise() {
  const query = new Parse.Query(Exercise);
  try {
    const object = await query.get('xKue915KBG');
    object.set(
      'video',
      new Parse.File('resume.txt', { base64: btoa('My file content') })
    );
    try {
      const response = await object.save();
      console.log(response.get('video'));
      console.log('Exercise updated', response);
    } catch (error) {
      console.error('Error while updating Exercise', error);
    }
  } catch (error) {
    console.error('Error while retrieving object Exercise', error);
  }
}

export async function deleteExercise() {
  const query = new Parse.Query('Exercise');
  try {
    // here you put the objectId that you want to delete
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
