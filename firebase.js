const firebaseConfig = {
  apiKey: "AIzaSyCNfP6WA9HLa6xy3x5zmpPiWldjWC-4Jfo",
  authDomain: "whatsapp-clone-2d88d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-2d88d.firebaseio.com",
  projectId: "whatsapp-clone-2d88d",
  storageBucket: "whatsapp-clone-2d88d.appspot.com",
  messagingSenderId: "119247885406",
  appId: "1:119247885406:web:b103c9a6274cc70f9b90cf",
  measurementId: "G-Q538C341XF",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
export default db;
export default firebase;
