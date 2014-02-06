/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//USER INFORMATION COLLECTION
//Declare JSON for user name/email
var userdata = {
    "name" : "",
    "email" : ""
};

//Get elements and add Event Listeners to log data
var fullname = document.getElementById('fullname');
var emailAddress = document.getElementById('email');

fullname.addEventListener('blur', collectName);
emailAddress.addEventListener('blur', collectEmail);

//Functions to log name and email information
function collectName(){
    var name = fullname.value;
    userdata["name"] = name;
}

function collectEmail(){
    var email = emailAddress.value;
    userdata["email"] = email;
}

//MACHINE INFORMATION COLLECTION
//Declare JSON for user's machine's information
var machinedata = {
    "winHeight" : "",
    "winWidth" : "",
    "userAgent" : "",
    "docTitle" : ""
};

//Function declaration - collects machine info into JSON object
function collectMachineInfo(){
    machinedata["winHeight"] = window.innerHeight;
    machinedata["winWidth"] = window.innerWidth;
    machinedata["userAgent"] = window.navigator.userAgent;
    machinedata["docTitle"] = document.title;
    fullname.value = "";
    emailAddress.value = "";
}

//Event listener to collect machine info on load
window.addEventListener('load', collectMachineInfo);

var data = {
                "mousex" : []
        };

//Function to listen for up to 100 mouse moves
function onMouseMove(e){
        data.mousex.push(e.clientX);
        if ( data.mousex.length > 100 ) {
            document.removeEventListener('mousemove', onMouseMove);
            }
        }
        
//Event listener to call onMouseMove function
document.addEventListener('mousemove', onMouseMove);

//RESULTS AND OUTPUT
//Function to log results when results button is clicked
function showResults() {
    console.clear();
    console.log(userdata);
    console.log(machinedata);
    console.log(data);
}

var results = document.getElementById('showResults');

results.addEventListener("click", showResults);