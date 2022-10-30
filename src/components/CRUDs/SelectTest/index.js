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
      reps: props.reps,
      reference: '',
      frequency: false,
      saturation: false,
      dyspnea: false,
      fatigue: false,
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
  console.log(props);

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

  selectTestRef.update({
    frequency: props.frequency,
  });

  selectTestRef.update({
    saturation: props.saturation,
  });

  selectTestRef.update({
    dyspnea: props.dyspnea,
  });

  selectTestRef.update({
    fatigue: props.fatigue,
  });

  selectTestRef.update({
    reference: props.reference,
  });
  Alert.alert('Teste atualizado!');
}

export async function deleteSelectTests(props) {
  const selectTestRef = database.ref('selectTest/' + props);
  selectTestRef.remove();
}
