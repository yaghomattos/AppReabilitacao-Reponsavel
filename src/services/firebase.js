import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.NATIVE_APP_API_KEY,
  authDomain: process.env.NATIVE_APP_AUTH_DOMAIN,
  databaseURL: process.env.NATIVE_APP_DATABASE_URL,
  projectId: process.env.NATIVE_APP_PROJECT_ID,
  storageBucket: process.env.NATIVE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.NATIVE_APP_MENSSAGING_SENDER_ID,
  appId: process.env.NATIVE_APP_APP_ID,
  measurementId: process.env.NATIVE_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

//const auth = firebase.auth();
const database = firebase.database();

export { firebase, database };
