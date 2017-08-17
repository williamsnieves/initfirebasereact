import firebase from 'firebase';


var config = {
 apiKey: "your data",
 authDomain: "your data",
 databaseURL: "your data",
 projectId: "your data",
 storageBucket: "your data",
 messagingSenderId: "your data"
 };
firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();