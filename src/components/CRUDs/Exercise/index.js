import { Alert } from 'react-native';
import { database } from '../../../services/firebase';

export async function createExercise(props) {
  const exerciseRef = database.ref('exercise');

  exerciseRef
    .push({
      name: props.name,
      description: props.description,
      video: props.video,
      preview: props.preview,
    })
    .then(() => {
      console.log('Video criado');
      Alert.alert('Video cadastrado');
    });
}

export async function readExercise(props) {
  var exercise = '';
  const exerciseRef = database
    .ref('exercise')
    .orderByChild('name')
    .equalTo(props)
    .on('child_added', function (snapshot) {
      exercise = snapshot;
    });

  if (!exercise) {
    console.log('Exercise does not exists.');
    return;
  } else {
    return exerciseRef;
  }
}

export async function deleteExercise(props) {
  const exerciseRef = database.ref('exercise/' + props.id);
  exerciseRef.remove();
}
