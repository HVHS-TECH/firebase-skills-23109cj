/**************************************************************
 **************************************************************
 **                                                          **
 ** script.js is where you will write most of your code.     **
 **                                                          **
 **************************************************************
 **************************************************************/

const HTML_OUTPUT = document.getElementById("databaseOutput");

/**************************************************************/
// helloWorld()
// Demonstrate a minimal write to firebase
// This function replaces the entire database with the message "Hello World"
// 
// This uses the set() operation to write the key:value pair "message":"Hello World"
// The ref('/') part tells the operation to write to the base level of the database "/"
// This means it replaces the whole database with message:Hello World
/**************************************************************/
let highscoreTable = {
  users: {
    alice:300,
    bob:300,
    charlie:10,
    david:55,
    eve:600
  }
}

function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Hello World'
    }
  )
  directory = 'start';
}

function goodbyeWorld(){
  console.log("Running goodbyeWorld()")
  firebase.database().ref('/').set(
    {
      message: 'Goodbye Cruel World'
    }
  )
  directory = 'end';
}

function simpleRead(){
  console.log('simpleRead()');
  firebase.database().ref('/').child('message').once('value', displayRead);
}

function displayRead(snapshot){
  console.log('running displayRead(), the message is: ' + snapshot.val());
  HTML_OUTPUT.innerHTML = snapshot.val();
}

function readListener(){
  console.log('read listener');
  firebase.database().ref('/').child('message').on('value', displayRead)
}

function complexWrite(){
  let name = prompt('please enter your name');
  let score = prompt('please enter your score');
  console.log('complexWrite');
  firebase.database().ref('/highscoreTable').set(
    highscoreTable
  )
  firebase.database().ref('/highscoreTable/users/'+name).set(Number(score))
}

function complexRead(){
  console.log('reading highscores');
  firebase.database().ref('/highscoreTable/users').once('value', displayComplexRead);
}

function displayComplexRead(snapshot){
  console.log(snapshot.val());
  HTML_OUTPUT.innerHTML = snapshot.val();
}
