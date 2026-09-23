// firebase-config.js
// Configuración de tu proyecto de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWKxkJGCBtWVhCy0bTyva2_LUp7OmIQSU",
  authDomain: "pescaweb-1fec3.firebaseapp.com",
  databaseURL: "https://pescaweb-1fec3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "pescaweb-1fec3",
  storageBucket: "pescaweb-1fec3.firebasestorage.app",
  messagingSenderId: "153847002813",
  appId: "1:153847002813:web:74f5ec93129a2c2be8a9d4",
  measurementId: "G-3R8H6RB0KE"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
window.auth = firebase.auth();
window.db = firebase.firestore();
