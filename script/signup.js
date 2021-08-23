var pass1 = document.getElementById("Password");
localStorage.setItem("Pass1Key", pass1);
var pass2 = document.getElementById("CPassword");
localStorage.setItem("Pass2Key", pass2);
var uname = document.getElementById("Username");
localStorage.setItem("UsernameKey", uname);

var check = function() {
    if (document.getElementById('Password').value ==
      document.getElementById('CPassword').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Not Matching';
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
    var pass1 = localStorage.getItem("Pass1Key");
    var pass2 = localStorage.getItem("Pass2Key");

    var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var format2 = /[A-Za-z]/;
    if((format.test(uname) && format2.test(uname))){
        alert("Username not valid!");
    }

    if(pass1 == pass2 && pass1 != ""){
        alert("Registered Successfully");
        window.location = "login.html";
    }
    else{
        // alert("Password and Confirm Password do not match");     
        document.getElementById("message").innerHTML = "**Passwords do not match!";  
        window.location.href = "signup.html";
    }
}

pass2.onkeyup = function() {
    if(pass1 != pass2){
        alert("'Password' and 'Confirm Password' do not match");
    }
    // else{
    //     window.location.href = "login.html";
    // }
}