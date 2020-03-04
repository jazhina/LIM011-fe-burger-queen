import firebase from 'firebase';

const firebaseConfig = {
        apiKey: "AIzaSyA5j_SR_OulatAA5MZLdn98F4VbeaffzfA",
        authDomain: "burger-queen-3d16d.firebaseapp.com",
        databaseURL: "https://burger-queen-3d16d.firebaseio.com",
        projectId: "burger-queen-3d16d",
        storageBucket: "burger-queen-3d16d.appspot.com",
        messagingSenderId: "924442370473",
        appId: "1:924442370473:web:4eacd8010dfa16bded24b8",
        measurementId: "G-DMLE30J1NK"

};

firebase.initializeApp(firebaseConfig);

export default firebase;