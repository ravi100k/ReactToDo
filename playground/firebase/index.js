import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB0K-t1hOOHRfN49YAicp2uI_bAt-CMI7s",
    authDomain: "my-todo-app-af59d.firebaseapp.com",
    databaseURL: "https://my-todo-app-af59d.firebaseio.com",
    storageBucket: "my-todo-app-af59d.appspot.com",
    messagingSenderId: "234541856354"
  };
  firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();
  firebaseRef.set({
    app:{
      name: 'todo app',
      version: '1.0'
    },
    isRunning : true,
    user:{
      name: 'ravi',
      age:23
    }
  }).then(() =>{
    console.log('set work');
  }, (e) =>{
    console.log('set doesnt work');
  });
  //
  // firebaseRef.child('user').set({
  //   name: 'mike'
  // });
  // firebaseRef.child('app').set({
  //   name: 'My todo app'
  // });

  // firebaseRef.update({
  //   isRunning: false,
  //   'app/name': 'Todo Application'
  // });

// firebaseRef.child('app').update({
//   name: 'Todos'
// });

// firebaseRef.update({
//   isRunning: null
// });
// firebaseRef.child('user/age').remove();


// firebaseRef.child('app').once('value').then((snapshort) =>{
// console.log('got entire data',snapshort.key, snapshort.val());
// }, (e) =>{
//   console.log('unable to fetch', e);
// });

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added',(snapshort) => {
  console.log('new todos', snapshort.key, snapshort.val());
});
 todosRef.push({
   text:'todos 1'
 });
 todosRef.push({
   text:'todo 2'
 });
