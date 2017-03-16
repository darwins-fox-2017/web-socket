'use strict'
const firebase = require('firebase')
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyDw-q7AO0apLuZP_LVxmPHJ6TD0TV8hMzI',
  authDomain: 'eislide-22357.firebaseapp.com',
  databaseURL: 'https://eislide-22357.firebaseio.com',
  storageBucket: 'eislide-22357.appspot.com',
  messagingSenderId: '67429129404'
}

firebase.initializeApp(config)
var database = firebase.database()

firebase.database().ref('chats/1').set({
  // username: name,
  // email: email,
  // profile_picture: imageUrl
  message: 'Hello firebase!'
})
