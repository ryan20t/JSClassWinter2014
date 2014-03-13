//declare variables to determine if conditions have been met, etc
var docOneClicked = false;
var docTwoClicked = false;
var scrollToBottom = false;
var divObject = document.getElementById('agreeScroll');
var agree = document.getElementById('agree');
var notagree = document.getElementById('notagree');

//event listeners for document clicks
document.getElementById('agreeLink1').addEventListener('click', onClick1);
document.getElementById('agreeLink2').addEventListener('click', onClick2);
divObject.addEventListener('scroll', onScroll);
document.getElementById('submitAgreement').addEventListener('click', buttonClick);

//function to indicate link 1 is clicked
//and if link 2 is clicked and the div is scrolled, enable the radio buttons
function onClick1()
{
    docOneClicked = true;
    console.log(docOneClicked);
    if (scrollToBottom === true && docTwoClicked === true)
    {
        agree.disabled=false;
        notagree.disabled=false;
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
        agree.disabled=false;
        notagree.disabled=false;
    }
}

//function to check if div is fully scrolled and if both links are also
//clicked, enable the radio buttons
function onScroll()
{
    if (divObject.scrollTop === (divObject.scrollHeight - divObject.offsetHeight))
    {
        scrollToBottom = true;
        if (docOneClicked === true && docTwoClicked === true)
        {
            agree.disabled=false;
            notagree.disabled=false;
        }
    }
}

//button click function
function buttonClick()
{
    if (docOneClicked && docTwoClicked && scrollToBottom)
    {
        if (!agree.checked && !notagree.checked)
        {
            alert("You must choose to agree or not agree");
        }
        
        else if (agree.checked)
        {
            document.getElementById('header1').style.visibility="hidden";
            document.getElementById('section1').style.visibility="hidden";
            document.getElementById('section2').style.visibility="hidden";
            document.getElementById('body').innerHTML = '<div class="welcome">Thank you for agreeing to our terms, and we hope you enjoy our service!</div>';
        }
        
        else if (notagree.checked)
        {
            alert("You have chosen to disagree with out terms. We're sorry to see you go.");
            document.getElementById('header1').style.visibility="hidden";
            document.getElementById('section1').style.visibility="hidden";
            document.getElementById('section2').style.visibility="hidden";
        }
    }
    
    else if (!docOneClicked || !docTwoClicked)
    {
        document.getElementById('section1').innerHTML += '<span class="error">You must read both documents to continue.</span>';
        if (!scrollToBottom) {document.getElementById('scrollWrapper').innerHTML += '<span class="error">You must scroll to the bottom to continue.</span>';}
    }
}