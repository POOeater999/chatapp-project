// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyC_oAyu150UhFio6c4JirAe7qN4wF_cws4",
    authDomain: "chat-app-project-5b30c.firebaseapp.com",
    databaseURL: "https://chat-app-project-5b30c-default-rtdb.firebaseio.com",
    projectId: "chat-app-project-5b30c",
    storageBucket: "chat-app-project-5b30c.appspot.com",
    messagingSenderId: "610026239831",
    appId: "1:610026239831:web:b743d9bee87d021d3b7012"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!" ;
 

function addRoom()
{
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
    });
    
    localStorage.setItem("room_name", room_name);

    window.location = "chat_page.html";
   
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("roomnames= "+Room_names) ;
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>" ;
   document.getElementById("output").innerHTML +=row ;


   //End code
   });});}
getData();



function logout() {
    window.location = "index.html" ;
    
}


function redirectToRoomName(name){
    console.log(name)
    localStorage.setItem("room_name",name)
    window.location = "chat_page.html"
}
