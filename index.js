// var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyB62OInjv6tudIgFdpvddKV0xNBm7fzybM",
    authDomain: "beli-kucing.firebaseapp.com",
    databaseURL: "https://beli-kucing.firebaseio.com",
    storageBucket: "beli-kucing.appspot.com",
    messagingSenderId: "33082737494"
};
firebase.initializeApp(config);
// Get a reference to the database service
var database = firebase.database();
