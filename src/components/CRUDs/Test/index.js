import { Alert } from 'react-native';
import { database, storage } from '../../../services/firebase';

export async function createTest(props) {
  const testRef = database.ref('test');

  if (props.timer != '') {
    testRef
      .push({
        name: props.name,
        description: props.description,
        video: props.video,
        preview: props.preview,
        timer: props.timer,
        reps: '',
      })
      .then(() => {
        Alert.alert('Teste cadastrado');
      });
  } else {
    testRef
      .push({
        name: props.name,
        description: props.description,
        video: props.video,
        preview: props.preview,
        timer: '',
        reps: props.reps,
      })
      .then(() => {
        Alert.alert('Teste cadastrado');
      });
  }
}

export async function readTest(props) {
  var test = '';
  const testRef = database
    .ref('test')
    .orderByChild('name')
    .equalTo(props)
    .on('child_added', function (snapshot) {
      test = snapshot;
    });

  if (!test) {
    return;
  } else {
    return testRef;
  }
}

export async function deleteTest(props) {
  const testRef = database.ref('test/' + props.id);
  testRef.get().then((child) => {
    var previewRef = storage.refFromURL(child.val().preview);
    var videoRef = storage.refFromURL(child.val().video);

    previewRef.delete();
    videoRef.delete();
  });

  testRef.remove();
}
