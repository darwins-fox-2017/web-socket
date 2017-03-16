'use strict'

var firebase = require('firebase')

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBPiD9IMagTDzNPf75DQfCjE15_P9hA7RQ',
  authDomain: 'test-9f49f.firebaseapp.com',
  databaseURL: 'https://test-9f49f.firebaseio.com',
  storageBucket: 'test-9f49f.appspot.com',
  messagingSenderId: '456022955783'
}
firebase.initializeApp(config)

var database = firebase.datatase()
