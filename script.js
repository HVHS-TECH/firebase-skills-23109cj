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
function helloWorld(){
  console.log("Running helloWorld()")
  firebase.database().ref('/start').set(
    {
      message: 'Hello World'
    }
  )
}

function goodbyeWorld(){
  console.log("Running goodbyeWorld()")
  firebase.database().ref('/end').set(
    {
      message: 'Goodbye Cruel World'
    }
  )
}

function simpleRead(){
  console.log('simpleRead()');
  firebase.database().ref('/end').child('message').once('value', displayRead);
}

function displayRead(snapshot){
  console.log('running displayRead(), the message is: ' + snapshot.val());
  HTML_OUTPUT.innerHTML = snapshot.val();
}