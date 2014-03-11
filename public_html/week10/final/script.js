//declare variables to determine if conditions have been met
var docOneClicked = false;
var docTwoClicked = false;
var scrollToBottom = false;
//var link1 = document.getElementById('agreeLink1');
//var link2 = document.getElementById('agreeLink2');

//event listeners for document clicks
document.getElementById('agreeLink1').addEventListener('click', onClick1);
document.getElementById('agreeLink2').addEventListener('click', onClick2);

//function to indicate link 1 is clicked
//and if link 2 is clicked and the div is scrolled, enable the radio buttons
function onClick1()
{
    docOneClicked = true;
    console.log(docOneClicked);
    if (scrollToBottom === true && docTwoClicked === true)
    {
        document.getElementById('agree').disabled=false;
    }
}

//function to indicate link 2 is clicked
//and if link 1 is clicked and the div is scrolled, enable the radio buttons
function onClick2()
{
    docTwoClicked = true;
    console.log(docTwoClicked);
    if (scrollToBottom === true && docOneClicked === true)
    {
        document.getElementById('agree').disabled=false;
    }
}