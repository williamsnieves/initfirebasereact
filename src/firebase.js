import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD9F_yD3Ai-2KGaZUvcZ9YI3aldDBX3Ad8",
    authDomain: "first-react-11733.firebaseapp.com",
    databaseURL: "https://first-react-11733.firebaseio.com",
    projectId: "first-react-11733",
    storageBucket: "first-react-11733.appspot.com",
    messagingSenderId: "45880380074"
};
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();