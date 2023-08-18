const firebaseConfig = {
    apiKey: "AIzaSyDi7Nzffe36ego6K09ocBYDPuIlkv7UzeQ",
    authDomain: "authenticaton-ef080.firebaseapp.com",
    projectId: "authenticaton-ef080",
    storageBucket: "authenticaton-ef080.appspot.com",
    messagingSenderId: "856328894623",
    appId: "1:856328894623:web:ac1c5d27d1ee797cd04aaa",
    measurementId: "G-NNQL6Y5END"
  };
    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth()
    const database = firebase.database()


function register () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
  
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {
       var user = auth.currentUser
       var database_ref = database.ref()
  
      var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()
      }
  
      database_ref.child('users/' + user.uid).set(user_data)
      alert('User Created!!')
    })
    .catch(function(error) {
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
}


function login(){
    email = document.getElementById('email').value
    password = document.getElementById('password').value    
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      var user = auth.currentUser
      var database_ref = database.ref()
  
    
      var user_data = {
        last_login : Date.now()
      }
  
        database_ref.child('users/' + user.uid).update(user_data)
        alert('User Logged In!!')
  
    })
    .catch(function(error) {
  
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
