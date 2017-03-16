// Initialize Firebase
var config = {
  apiKey: "AIzaSyC2UHNHGSaIccVVGoeTTwtS1gneJ5SwUt8",
  authDomain: "remoteapps-928e1.firebaseapp.com",
  databaseURL: "https://remoteapps-928e1.firebaseio.com",
  storageBucket: "remoteapps-928e1.appspot.com",
  messagingSenderId: "613030771569"
};
firebase.initializeApp(config);

var timeStamps = new Date().toString()

$('#page1').on('click',function(){
  firebase.database().ref('remote/1').set({
    state: "1",
    date: timeStamps
  })
});

$('#page2').on('click',function(){
  firebase.database().ref('remote/1').set({
    state: "2",
    date: timeStamps
  })
});

$('#page3').on('click',function(){
  firebase.database().ref('remote/1').set({
    state: "3",
    date: timeStamps
  })
});

$('#page4').on('click',function(){
  firebase.database().ref('remote/1').set({
    state: "4",
    date: timeStamps
  })
});

$('#page5').on('click',function(){
  firebase.database().ref('remote/1').set({
    state: "5",
    date: timeStamps
  })
});

$('#page6').on('click',function(){
  firebase.database().ref('remote/1').set({
    state: "6",
    date: timeStamps
  })
});

$('#page7').on('click',function(){
  firebase.database().ref('remote/1').set({
    state: "7",
    date: timeStamps
  })
});


// $('#page2').on("click", function(){
//   firebase.database().ref('remote/1').set({
//       state: "2"
//     });
// });
//
// $('#page3').on("click", function(){
//   firebase.database().ref('remote/1').set({
//       state: "3"
//     });
// });
//
// $('#page4').on("click", function(){
//   firebase.database().ref('remote/1').set({
//       state: "4"
//     });
// });
