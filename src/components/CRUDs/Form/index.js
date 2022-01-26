import { database } from '../../../services/firebase';

export async function readPreForm(props) {
  const formRef = await database.ref(`preForm/${props}`).get();

  if (!formRef.exists()) {
    console.log('Form does not exists.');
    return false;
  } else {
    return formRef;
  }
}

export async function readPostForm(props) {
  const formRef = await database.ref(`postForm/${props}`).get();

  if (!formRef.exists()) {
    console.log('Form does not exists.');
    return false;
  } else {
    return formRef;
  }
}
