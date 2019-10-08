import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

const missingFirebaseConfigKeys = Object.keys(firebaseConfig).filter(key => !firebaseConfig[key]);
if (missingFirebaseConfigKeys) {
  console.log(missingFirebaseConfigKeys); // eslint-disable-line no-console
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };
