var starCountRef = firebase.database().ref('remote/1');
starCountRef.on('value', function(snapshot) {
  // console.log(snapshot.val().state);
  $(`#page${snapshot.val().state}`).click();
});
