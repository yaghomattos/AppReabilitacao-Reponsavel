import { Alert } from 'react-native';
import { database } from '../../../services/firebase';

export async function createSelectOrientations(props) {
  const selectOrientationRef = database.ref('selectOrientation');

  if (props.className == 'exercise') {
    selectOrientationRef
      .push({
        orientation: props.orientationId,
        exercise: props.testOrExerciseId,
      })
      .then(() => {
        Alert.alert('Orientação selecionada para o exercício');
      })
      .catch(() => {
        Alert.alert('Erro ao selecionar orientação');
      });
  } else {
    selectOrientationRef
      .push({
        orientation: props.orientationId,
        test: props.testOrExerciseId,
      })
      .then(() => {
        Alert.alert('Orientação selecionada para o teste');
      })
      .catch(() => {
        Alert.alert('Erro ao selecionar orientação');
      });
  }
}

export async function deleteSelectOrientations(props) {
  const selectOrientationRef = database.ref('selectOrientation/' + props);
  selectOrientationRef.remove();
}
