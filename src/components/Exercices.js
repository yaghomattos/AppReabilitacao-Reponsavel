import Parse from 'parse/react-native.js';

export async function createExercise() {
  const exercise = new Parse.Object('Exercise');
  exercise.set(
    'video',
    new Parse.File('resume.txt', { base64: btoa('My file content') })
  );
  try {
    const result = await exercise.save();
    // Access the Parse Object attributes using the .GET method
    console.log('Exercise created', result);
  } catch (error) {
    console.error('Error while creating Exercise: ', error);
  }
}

export async function readExercise() {
  const Exercise = Parse.Object.extend('Exercise');
  const query = new Parse.Query(Exercise);
  query.equalTo('objectId', 'xKue915KBG');
  try {
    const results = await query.find();
    for (const object of results) {
      const video = object.get('video');
      console.log(video);
    }
  } catch (error) {
    console.error('Error while fetching Exercise', error);
  }
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
