import { Alert, LogBox } from 'react-native';
import { database } from '../../../services/firebase';

LogBox.ignoreLogs(['Setting a timer']);

export async function createParticipant(props) {
  const participantRef = database.ref('participant');

  participantRef
    .push({
      name: props.name,
      cpf: props.cpf,
      age: props.age,
      phone: props.phone,
      diagnosis: props.diagnosis,
      address: props.address,
      height: props.height,
      weight: props.weight,
      user: props.id,
    })
    .then(() => {
      Alert.alert('Participante cadastrado');
    })
    .catch(() => {
      Alert.alert('Erro ao cadastrar participante');
    });
}

export async function readParticipantWithId(props) {
  const participantRef = await database.ref(`participant/${props}`).get();

  if (!participantRef.exists()) {
    console.log('Participant does not exists.');
    return;
  } else {
    return participantRef;
  }
}

export async function readParticipantWithCPF(props) {
  var participant = '';
  const participantRef = database
    .ref('participant')
    .orderByChild('cpf')
    .equalTo(props)
    .on('child_added', function (snapshot) {
      participant = snapshot;
    });

  if (!participant) {
    console.log('Participant does not exists.');
    return;
  } else {
    return participant;
  }
}

export async function updateParticipant(props) {
  const participantRef = database.ref('participant/' + props.id);
  if (props.name != '')
    participantRef.update({
      name: props.name,
    });
  if (props.cpf != '')
    participantRef.update({
      cpf: props.cpf,
    });
  if (props.age != '')
    participantRef.update({
      age: props.age,
    });
  if (props.phone != '')
    participantRef.update({
      phone: props.phone,
    });
  if (props.diagnosis != '')
    participantRef.update({
      diagnosis: props.diagnosis,
    });
  if (props.address != '')
    participantRef.update({
      address: props.address,
    });
  if (props.height != '')
    participantRef.update({
      height: props.height,
    });
  if (props.weight != '')
    participantRef.update({
      weight: props.weight,
    });
  console.log('participant updated');
}

export async function deleteParticipant(props) {
  const participantRef = database.ref('participant/' + props);
  participantRef.remove();
}
