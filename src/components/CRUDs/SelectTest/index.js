import { Alert } from 'react-native';

export async function createSelectTests(props) {
  const selectTestRef = database.ref('selectTest');

  selectTestRef
    .push({
      participant: props.participant,
      test: props.test,
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

  if (props.timer != '')
    selectTestRef.update({
      timer: props.timer,
    });
  else
    selectTestRef.update({
      numReps: props.numReps,
    });

  if (props.reps)
    selectTestRef.update({
      reps: true,
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
  if (props.fatique)
    selectTestRef.update({
      fatique: true,
    });
  console.log('test updated');
}

export async function deleteSelectTests(props) {
  const selectTestRef = database.ref('selectTest/' + props);
  selectTestRef.remove();
}
