import { Alert } from 'react-native';

export async function createTest(props) {
  const participantRef = database.ref('participant');

  participantRef
    .push({
      name: props.name,
      description: props.description,
      video: props.video,
      preview: props.preview,
    })
    .then(() => {
      console.log('Test criado');
      Alert.alert('Teste cadastrado');
    });
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
    console.log('Test does not exists.');
    return;
  } else {
    return testRef;
  }
}

export async function deleteTest(props) {
  const testRef = database.ref('test/' + props.id);
  testRef.remove();
}
