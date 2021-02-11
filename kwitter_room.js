var firebaseConfig = {
      apiKey: "AIzaSyDUiDLaNV28uhj6PaZvlfQfD_KVjbgWOyM",
      authDomain: "kwitter-db-b5be0.firebaseapp.com",
      projectId: "kwitter-db-b5be0",
      storageBucket: "kwitter-db-b5be0.appspot.com",
      messagingSenderId: "200616770658",
      appId: "1:200616770658:web:5ec33e9f5e688a6ea9e53b"
    };
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
        Room_names = childKey;
        console.log("Room Name - " + Room_names);
        row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
  
  }
 getData();
 
 function redirectToRoomName(name)
 {
   console.log(name);
   localStorage.setItem("room_name", name);
     window.location = "kwitter_page.html";
 }
      //End code
      });});}

