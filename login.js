function adduser(){
    var username=document.getElementById("inputusername").value;
    localStorage.setItem("Username",username);
    window.location="kwitter_room.html";
    console.log(username);
}