import Parse from 'parse/react-native.js';
import { Alert } from 'react-native';

export async function createOrientation(text) {
  const myNewObject = new Parse.Object('Orientation');
  myNewObject.set('text', text);
  try {
    const result = await myNewObject.save();
    Alert.alert('Orientação Salva');
  } catch (error) {
    Alert.alert('Erro ao salvar orientação!');
  }
}

export async function readOrientation(id) {
  var result = '';
  const Orientation = Parse.Object.extend('Orientation');
  const query = new Parse.Query(Orientation);
  query.equalTo('objectId', id);
  try {
    const results = await query.find();
    result = results;
  } catch (error) {
    console.error('Error while fetching Orientation', error);
  }
  return result[0];
}

export async function updateOrientation() {
  const query = new Parse.Query(Orientation);
  try {
    const object = await query.get('xKue915KBG');
    object.set('text', 'A string');
    try {
      const response = await object.save();
      console.log('Orientation updated', response);
    } catch (error) {
      console.error('Error while updating Orientation', error);
    }
  } catch (error) {
    console.error('Error while retrieving object Orientation', error);
  }
}

export async function deleteOrientation() {
  const query = new Parse.Query('');
  try {
    const object = await query.get('xKue915KBG');
    try {
      const response = await object.destroy();
      console.log('Deleted Orientation', response);
    } catch (error) {
      console.error('Error while deleting Orientation', error);
    }
  } catch (error) {
    console.error('Error while retrieving Orientation', error);
  }
}
