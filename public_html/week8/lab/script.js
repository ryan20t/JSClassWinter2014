/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Get div information
var fadeDiv = document.getElementById('fadingDiv');
fadeDiv.style.opacity = 0;

//get current opacity to fade to 1
var currentOpac = parseInt(fadeDiv.style.opacity, 10);
console.log(currentOpac);

//event listener for page load
window.addEventListener('load', fadeTimer);

//onload function to set interval and clear when opacity >= 1
function fadeTimer(){
    if (currentOpac < 1){
        var fadeIn = setInterval(fadeDivIn, 100);
    } else {
        clearInterval(fadeIn);
    }
    
    //timer to hide div after 10 seconds
    var hideDivVar = setTimeout(hideDiv, 10000);
    
}

//function called at intervals to actually change opacity
function fadeDivIn(){
    currentOpac += 0.10;
    fadeDiv.style.opacity = currentOpac;
}

//function to actually hide div
function hideDiv(){
    fadeDiv.style.color = 'transparent';
}

var canv = document.getElementById('canvas');
var ctx = canv.getContext('2d');

ctx.fillRect(25,25,50,100);

ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI*2, true); 
ctx.closePath();
ctx.fill();

var img = new Image();
img.src = 'vw.png';
ctx.drawImage(img,400,400);