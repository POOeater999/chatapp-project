
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


  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

  room_name = localStorage.getItem("room_name") ;


  function send() {
      msg = document.getElementById("msg").value ;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      }) ;
      document.getElementById("msg").value = ""
  }
  


  







function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id) ;
console.log(message_data) ;
name=message_data['name'] ;
message=message_data['message'] ;
like=message_data['like'];

name_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'> </h4>" ;
message_tag = "<h4 class='message_h4'>" + message + "</h4>" ;
like_button = "<button class='btn btn-success' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>" ;
span_tag = "<span class='glyphicon glyphicon-thumbs-up'> Likes: "+like+"</span></button><hr>" ;

row=name_tag + message_tag + like_button + span_tag ;
document.getElementById("output").innerHTML+=row

//End code
      } });  }); }
getData();

function logout() {

      window.location = "chat_room.html"
}


function updateLike(message_id){
      button_id=message_id ;
      likes = document.getElementById(button_id).value ;
      update_like=Number(likes)+1 ;
      firebase.database().ref(room_name).child(message_id).update({
            like:update_like
      })
}
