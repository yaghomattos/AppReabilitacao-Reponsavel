import { Alert } from 'react-native';
import { database } from '../../../services/firebase';

export async function createOrientation(props) {
  const orientationRef = database.ref('orientation');

  orientationRef
    .push({
      text: props,
    })
    .then(() => {
      Alert.alert('Orientação cadastrada');
    })
    .catch(() => {
      Alert.alert('Erro ao cadastrar orientação');
    });
}

export async function readOrientation(props) {
  const orientationRef = await database.ref(`orientation/${props}`).get();

  if (!orientationRef.exists()) {
    console.log('Orientation does not exists.');
    return;
  } else {
    return orientationRef;
  }
}

export async function deleteOrientation(props) {
  const orientationRef = database.ref('orientation/' + props.id);
  orientationRef.remove();
}
