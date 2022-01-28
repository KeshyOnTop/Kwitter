// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCr01xNeN4YOLGQtUeMeyRGmu17OIc9u8I",
      authDomain: "kwitter-c9dbd.firebaseapp.com",
      databaseURL: "https://kwitter-c9dbd-default-rtdb.firebaseio.com",
      projectId: "kwitter-c9dbd",
      storageBucket: "kwitter-c9dbd.appspot.com",
      messagingSenderId: "656993073797",
      appId: "1:656993073797:web:21f3d303bb47b20841c7ec"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();
