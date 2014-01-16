/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function submitForm(){
    var name = document.getElementById("name");
    var nameSpan = document.getElementById("err_name");
    var email = document.getElementById("email");
    var emailSpan = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsSpan = document.getElementById("err_dob");
    
    /*
     * Validate name field to ensure that it is not blank.
     */
    
    if (name.value.length > 1) {
        nameSpan.innerHTML = "";
        name.className = "good";
        } else {
        nameSpan.innerHTML = "<strong>error: field is blank</strong>";
        name.className = "bad";
    }
    
    /*
     * Validate email field to ensure proper format.
     */
    
    if (email.value.length < 1) {
        emailSpan.innerHTML = "<strong>error: field is blank</strong>";
        email.className = "bad";
        } else if (email.value.indexOf("@") < 1 || email.value.indexOf(".") < 1) {
            email.className = "bad";
            emailSpan.innerHTML = "<strong>error: valid emails contain @ and at least 1 period</strong>";
        } else if (email.value.indexOf("@") > 1 && email.value.indexOf(".") > 1 && email.value.length > 1){
            emailSpan.innerHTML = "";
            email.className = "good";
        }
        
    /*
     * Check to see if comments field is valid (not blank, and less than 150 characters).
     */
    
    if (comments.value.length > 150) {
        commentsSpan.innerHTML = "<strong>comments must be less than 150 characters</strong>";
        comments.className = "bad";
    } else if (comments.value.length < 1) {
        commentsSpan.innerHTML = "<strong>comments must not be blank</strong>";
        comments.className = "bad";
    } else if (comments.value.length < 150 && comments.value.length > 1) {
        commentsSpan.innerHTML = "";
        comments.className = "good";
    }
    
    
}