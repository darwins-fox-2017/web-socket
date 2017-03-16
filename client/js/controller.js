var config = {
   apiKey: "AIzaSyCts5zvOR1BGUvuAa1TV6jM6LPLT7Yxl0c",
   authDomain: "web-socket-259d0.firebaseapp.com",
   databaseURL: "https://web-socket-259d0.firebaseio.com",
   storageBucket: "web-socket-259d0.appspot.com",
   messagingSenderId: "663814883282"
 };
 firebase.initializeApp(config);

 $( ".jssora22l" ).click(function() {
   firebase.database().ref('/present/1' + userId).set({
   state: 'left'
   });
 });
 
 $( ".jssora22r" ).click(function() {
   firebase.database().ref('/present/1' + userId).set({
   state: 'right'
   });
});
