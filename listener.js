var starCountRef = firebase.database()
    .ref('chat/');
starCountRef.on('value', function (snapshot) {
    console.log(snapshot.val()
        .command);
});
