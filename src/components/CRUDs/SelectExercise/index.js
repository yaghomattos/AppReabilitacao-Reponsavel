import { Alert } from 'react-native';

export async function createSelectExercises(props) {
  const selectExeriseRef = database.ref('selectExerise');

  selectExeriseRef
    .push({
      participant: props.participant,
      exercise: props.exercise,
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
