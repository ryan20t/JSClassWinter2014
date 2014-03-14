//declare variables to determine if conditions have been met, etc
var docOneClicked = false;
var docTwoClicked = false;
var scrollToBottom = false;
//variables for elements
var divObject = document.getElementById('agreeScroll');
var agree = document.getElementById('agree');
var notagree = document.getElementById('notagree');
var submitButton = document.getElementById('submitAgreement');
//to determing if error messages are displayed
var docMessageShown = false;
var scrollMessageShown = false;

//event listeners for document clicks
document.getElementById('agreeLink1').addEventListener('click', onClick1);
document.getElementById('agreeLink2').addEventListener('click', onClick2);
divObject.addEventListener('scroll', onScroll);
submitButton.addEventListener('click', buttonClick);

//function to indicate you are OK to continue
function radioSelected()
{
    submitButton.style.color="green";
    document.getElementById('check').style.visibility="visible";
    //console.log("hello");
}

//function to indicate link 1 is clicked
//and if link 2 is clicked and the div is scrolled, enable the radio buttons
function onClick1()
{
    docOneClicked = true;
    //console.log(docOneClicked);
    if (scrollToBottom === true && docTwoClicked === true)
    {
        agree.disabled=false;
        notagree.disabled=false;
        agree.addEventListener('click', radioSelected);
        notagree.addEventListener('click', radioSelected);
    }
}

//function to indicate link 2 is clicked
//and if link 1 is clicked and the div is scrolled, enable the radio buttons
function onClick2()
{
    docTwoClicked = true;
    //console.log(docTwoClicked);
    if (scrollToBottom === true && docOneClicked === true)
    {
        agree.disabled=false;
        notagree.disabled=false;
        agree.addEventListener('click', radioSelected);
        notagree.addEventListener('click', radioSelected);
    }
}

//function to check if div is fully scrolled and if both links are also
//clicked, enable the radio buttons
function onScroll()
{
    if (divObject.scrollTop === (divObject.scrollHeight - divObject.offsetHeight))
    {
        scrollToBottom = true;
        //console.log(scrollToBottom);
        if (docOneClicked === true && docTwoClicked === true)
        {
            agree.disabled=false;
            notagree.disabled=false;
            agree.addEventListener('click', radioSelected);
            notagree.addEventListener('click', radioSelected);
        }
    }
}

//button click function
function buttonClick()
{
    //documents read error?
    if (!docOneClicked || !docTwoClicked)
    {
        if (docMessageShown === false) 
        {
            document.getElementById('docErrorSpan').style.visibility="visible";
            docMessageShown = true;
        }
    }
    
    else { document.getElementById('docErrorSpan').style.visibility="hidden"; }
    
    //scroll to bottom error?
    if (!scrollToBottom) 
        {
            if (scrollMessageShown === false) 
            {
                document.getElementById('scrollErrorSpan').style.visibility="visible";
                scrollMessageShown = true;
            }
        }
        
    else { document.getElementById('scrollErrorSpan').style.visibility="hidden"; }
        
    
    //if 3 conditions are satisfied
    if (docOneClicked && docTwoClicked && scrollToBottom)
    {
        //if no agreement selection is made
        if (!agree.checked && !notagree.checked)
        {
            alert("You must choose to agree or not agree");
        }
        
        //if agree
        else if (agree.checked)
        {
            document.getElementById('header1').style.visibility="hidden";
            document.getElementById('section1').style.visibility="hidden";
            document.getElementById('docErrorSpan').style.visibility="hidden";
            document.getElementById('section2').innerHTML = 'Thank you for agreeing to our terms, and we hope you enjoy our service!';
            document.getElementById('section2').style.textAlign="center";
        }
        
        //if disagree
        else if (notagree.checked)
        {
            alert("You have chosen to disagree with out terms. We're sorry to see you go.");
            document.getElementById('header1').style.visibility="hidden";
            document.getElementById('section1').style.visibility="hidden";
            document.getElementById('scrollErrorSpan').style.visibility="hidden";
            document.getElementById('section2').innerHTML = 'Come back any time!';
            document.getElementById('section2').style.textAlign="center";
        }
    }
    
    //console.log("doc1", docOneClicked);
    //console.log("doc2", docTwoClicked);
    //console.log("scroll", scrollToBottom);
    
}