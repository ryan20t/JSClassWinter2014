/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





function noSpaceAlphaValidate( str ) {         //regex function to validate first name
        var alphaRegex = /^[a-zA-Z]+$/;
        return alphaRegex.test(str);			
}

function spaceAlphaValidate( str ) {           //regex function to validate last name
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function emailValidate( str ) {                //regex function to validate email address
        var emailVal = /^[a-zA-Z]+@[a-zA-Z_]+?\.[a-zA-Z]{3}$/;
        return emailVal.test(str);
}


function strip_HTML(str) {                     //regex function to remove HTML from comments
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}


//submit button click functions, etc
function submitForm() {

        //collect variables
        var fname = document.getElementById('fname');
        var lname = document.getElementById('lname');
        var email = document.getElementById('email');
        var comments = document.getElementById('comments');

        //first name processing
        if ( !fname.value.length ) {
                console.log("Fname needs a length");
                err_fname.innerHTML = "<strong>error: field is blank</strong>";
                fname.className = "bad";
        } else if ( noSpaceAlphaValidate( fname.value ) === false ) {
                console.log("Fname needs Alpha chars");
                err_fname.innerHTML = "<strong>error: field is invalid</strong>";
                fname.className = "bad";
        } else {
                console.log("Fname is good");
                err_fname.innerHTML = "";
                fname.className = "good";
        }
        
        //last name processing
        if ( !lname.value.length ) {
                console.log("Lname needs a length");
                err_lname.innerHTML = "<strong>error: field is blank</strong>";
                lname.className = "bad";
        } else if ( spaceAlphaValidate( lname.value ) === false ) {
                console.log("Lname needs Alpha chars");
                err_lname.innerHTML = "<strong>error: field is invalid</strong>";
                lname.className = "bad";
        } else {
                console.log("Lname is good");
                err_lname.innerHTML = "";
                lname.className = "good";
        }
        
        //email address processing
        if ( !email.value.length ) {
                console.log("email needs a length");
                err_email.innerHTML = "<strong>error: field is blank</strong>";
                email.className = "bad";
        } else if ( emailValidate( email.value ) === false ) {
                console.log("email is not valid");
                err_email.innerHTML = "<strong>error: field is invalid</strong>";
                email.className = "bad";
        } else {
                console.log("email is good");
                err_email.innerHTML = "";
                email.className = "good";
        }
        
        //comments field processing
        if (comments.value.length > 150) {
            commentsSpan.innerHTML = "<strong>comments must be less than 150 characters</strong>";
            comments.className = "bad";
        } else if (comments.value.length < 1) {
            commentsSpan.innerHTML = "<strong>comments must not be blank</strong>";
            comments.className = "bad";
        } else if (comments.value.length < 150 && comments.value.length > 1) {
            commentsSpan.innerHTML = "";
            comments.className = "good";
            comments.value = strip_HTML(comments.value);
        }
        
        

}