import { Alert } from 'react-native';
import { database } from '../../../services/firebase';

export async function createSelectExercises(props) {
  const selectExeriseRef = database.ref('selectExercise');

  selectExeriseRef
    .push({
      participant: props.participant,
      exercise: props.exercise,
      name: props.name,
      description: props.description,
      video: props.video,
      preview: props.preview,
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

  if (props.timer)
    selectExerciseRef.update({
      timer: props.timer,
      reps: '',
      sets: '',
    });
  else
    selectExerciseRef.update({
      reps: props.reps,
      sets: props.sets,
      timer: '',
    });

  if (props.frequency)
    selectExerciseRef.update({
      frequency: true,
    });
  if (props.saturation)
    selectExerciseRef.update({
      saturation: true,
    });
  if (props.dyspnea)
    selectExerciseRef.update({
      dyspnea: true,
    });
  if (props.fatique)
    selectExerciseRef.update({
      fatique: true,
    });
  Alert.alert('Exercício atualizado!');
}

export async function deleteSelectExercises(props) {
  const selectExerciseRef = database.ref('selectExercise/' + props);
  selectExerciseRef.remove();
}
