import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC4EmLlHu2-6LxCU5UHeVSw1ZFgw3JQLIQ",
    authDomain: "zeshorts.firebaseapp.com",
    databaseURL: "https://zeshorts.firebaseio.com",
    projectId: "zeshorts",
    storageBucket: "zeshorts.appspot.com",
    messagingSenderId: "1044806166618",
    appId: "1:1044806166618:web:8333769a777fb850aa9063"
  };
const firebaseApp= firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()

  export default db;