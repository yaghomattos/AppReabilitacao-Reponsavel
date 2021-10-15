import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createExam(props) {
  var { base64, fileName } = props.video;
  fileName = props.name;
  const parseFile = new Parse.File(fileName, { base64 });
  try {
    const responseFile = await parseFile.save();
    const File = Parse.Object.extend('Exam');
    const object = new File();
    object.set('video', responseFile);
    object.set('name', props.name);
    object.set('description', props.description);

    await object.save();
    Alert.alert('Exame Salvo');
  } catch (error) {
    Alert.alert('Erro ao salvar exame!');
  }
}

export async function readExam(name) {
  var result = '';
  const Exam = Parse.Object.extend('Exam');
  const query = new Parse.Query(Exam);
  query.equalTo('name', name);
  try {
    const results = await query.find();
    result = results;
  } catch (error) {
    console.error('Error while fetching Exam', error);
  }
  return result[0];
}

export async function updateExam() {
  const query = new Parse.Query(Exam);
  try {
    const object = await query.get('xKue915KBG');
    object.set(
      'video',
      new Parse.File('resume.txt', { base64: btoa('My file content') })
    );
    try {
      const response = await object.save();
      console.log(response.get('video'));
      console.log('Exam updated', response);
    } catch (error) {
      console.error('Error while updating Exam', error);
    }
  } catch (error) {
    console.error('Error while retrieving object Exam', error);
  }
}

export async function deleteExam() {
  const query = new Parse.Query('Exam');
  try {
    const object = await query.get('xKue915KBG');
    try {
      const response = await object.destroy();
      console.log('Deleted Exam', response);
    } catch (error) {
      console.error('Error while deleting Exam', error);
    }
  } catch (error) {
    console.error('Error while retrieving Exam', error);
  }
}
