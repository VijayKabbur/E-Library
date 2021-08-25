var pass1 = document.getElementById("Password").value;
localStorage.setItem("Pass1Key", pass1);
var pass2 = document.getElementById("CPassword").value;
localStorage.setItem("Pass2Key", pass2);
var uname = document.getElementById("Username").value;
localStorage.setItem("UsernameKey", uname);

var pCheck = function() {
    if (document.getElementById('Password').value ==
      document.getElementById('CPassword').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords Match';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = "Passwords Don't Match";
    }
  }

var uCheck = function(){
    var uname = localStorage.getItem("UsernameKey");

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var format2 = /[A-Za-z]/;
    if((format.test(uname) && format2.test(uname))){
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'Not Valid';
    }
}

function passwordCheck(){
    // var pass1 = localStorage.getItem("Pass1Key");
    // var pass2 = localStorage.getItem("Pass2Key");
    var pass1 = document.getElementById("Password").value;
    var pass2 = document.getElementById("CPassword").value;
    // console.log("Pass1=",pass1,".");
    
    var pass1 = document.getElementById("Password").value;
    localStorage.setItem("Pass1Key", pass1);

    if(pass1 == pass2 && pass1 != ""){
    //if(pass1 == pass2){
        alert("Registered Successfully");
        window.location = "login.html";
    }
    else{
        // alert("Password and Confirm Password do not match");     
        document.getElementById("message").innerHTML = "**Passwords do not match!";  
        window.location.href = "signup.html";
    }
}

function loginCheck(){
    var p = localStorage.getItem("Pass1Key");
    var passw = document.getElementById("floatingPassword").value;
    if(p == passw){
        window.location = "welcome.html";
    }
    else{
        alert("Wrong Password");
    }
}