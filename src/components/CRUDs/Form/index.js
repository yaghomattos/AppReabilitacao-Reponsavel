import { database } from '../../../services/firebase';

export async function readForm(props) {
  const formRef = await database.ref(`form/${props}`).get();

  if (!formRef.exists()) {
    console.log('Form does not exists.');
    return;
  } else {
    return formRef;
  }
}
