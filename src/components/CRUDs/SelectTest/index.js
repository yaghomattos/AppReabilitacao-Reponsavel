import { Alert } from 'react-native';
import { database } from '../../../services/firebase';

export async function createSelectTests(props) {
  const selectTestRef = database.ref('selectTest');

  selectTestRef
    .push({
      participant: props.participant,
      test: props.test,
      name: props.name,
      description: props.description,
      video: props.video,
      preview: props.preview,
      timer: props.timer,
      sets: props.sets,
      reps: props.reps,
      check: false,
      frequency: false,
      saturation: false,
      dyspnea: false,
      fatique: false,
    })
    .then(() => {
      Alert.alert('Teste selecionado');
    })
    .catch(() => {
      Alert.alert('Erro ao selecionar teste');
    });
}

export async function updateSelectTests(props) {
  const selectTestRef = database.ref('selectTest/' + props.id);

  if (props.timer)
    selectTestRef.update({
      timer: props.timer,
      reps: '',
    });
  else
    selectTestRef.update({
      reps: props.reps,
      timer: '',
    });

  if (props.frequency)
    selectTestRef.update({
      frequency: true,
    });
  if (props.saturation)
    selectTestRef.update({
      saturation: true,
    });
  if (props.dyspnea)
    selectTestRef.update({
      dyspnea: true,
    });
  if (props.fatigue)
    selectTestRef.update({
      fatigue: true,
    });
  Alert.alert('Teste atualizado!');
}

export async function deleteSelectTests(props) {
  const selectTestRef = database.ref('selectTest/' + props);
  selectTestRef.remove();
}
