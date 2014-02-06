/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function noSpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z]+$/;
        return alphaRegex.test(str);			
}

function spaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function emailValidate( str ) {
        var emailVal = /^[a-zA-Z]+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/;
        return emailVal.test(str);
}


function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}



function submitForm() {

        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var comments = document.getElementById('comments');

        if ( !fname.value.length ) {
                console.log("Fname needs a length");
        } else if ( noSpaceAlphaValidate( fname.value ) === false ) {
                console.log("Fname needs Alpha chars");
        } else {
                console.log("Fname is good");
        }
        
        if ( !lname.value.length ) {
                console.log("Lname needs a length");
        } else if ( spaceAlphaValidate( lname.value ) === false ) {
                console.log("Lname needs Alpha chars");
        } else {
                console.log("Lname is good");
        }
        
        if ( !email.value.length ) {
                console.log("email needs a length");
        } else if ( emailValidate( email.value ) === false ) {
                console.log("email is not valid");
        } else {
                console.log("email is good");
        }
        
        comments = strip_HTML(comments);
        comments.value = strip_HTML(comments.value);

}