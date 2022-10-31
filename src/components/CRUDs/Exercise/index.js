import { Alert } from 'react-native';
import { database, storage } from '../../../services/firebase';

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
      Alert.alert('Exercício cadastrado');
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
    return;
  } else {
    return exerciseRef;
  }
}

export async function deleteExercise(props) {
  const exerciseRef = database.ref('exercise/' + props.id);

  exerciseRef.get().then((child) => {
    var previewRef = storage.refFromURL(child.val().preview);
    var videoRef = storage.refFromURL(child.val().video);

    previewRef.delete();
    videoRef.delete();
  });

  exerciseRef.remove();
}
