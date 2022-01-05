import { Alert } from 'react-native';
import { database } from '../../../services/firebase';

export async function createSelectExercises(props) {
  const selectExeriseRef = database.ref('selectExerise');

  selectExeriseRef
    .push({
      participant: props.participant,
      exercise: props.exercise,
      name: props.name,
      timer: '',
      sets: '',
      reps: '',
      check: false,
      frequency: false,
      saturation: false,
      dyspnea: false,
      fatique: false,
    })
    .then(() => {
      Alert.alert('Exercício selecionado');
    })
    .catch(() => {
      Alert.alert('Erro ao selecionar exercício');
    });
}

export async function updateSelectExercises(props) {
  const selectExerciseRef = database.ref('selectExercise/' + props.id);
  if (props.sets != '')
    selectExerciseRef.update({
      sets: props.sets,
    });
  if (props.reps != '')
    selectExerciseRef.update({
      reps: props.reps,
    });
  if (props.timer != '')
    selectExerciseRef.update({
      timer: props.timer,
    });
  console.log('exercise updated');
}

export async function deleteSelectExercises(props) {
  const selectExerciseRef = database.ref('selectExercise/' + props);
  selectExerciseRef.remove();
}
