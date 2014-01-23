/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



/*
 * Declare an array and assign JSON values to it
 */
var adArray = [];
adArray.push({ "title" : "Nike", "description" : "Just do it!" });
adArray.push({ "title" : "Pepsi", "description" : "You got the right one, baby!" });
adArray.push({ "title" : "Slurm", "description" : "It's highly addictive!" });
adArray.push({ "title" : "Fishy Joes", "description" : "Ride the walrus!" });
adArray.push({ "title" : "Moe's Tavern", "description" : "Home of the world's smallest big screen TV!" });

/*
 * Get a random value for an Ad from the array
 */
var randomAd = Math.floor(Math.random()*adArray.length);
console.log(randomAd);

/*
 * Concat the title and description of the randomyly chosen Ad
 */
var displayAd = adArray[randomAd]["title"] + ". " + [adArray[randomAd]["description"]];
console.log(displayAd);

/*
 * Extract just the title from the randomly chosen Ad value to be
 * used as a page title
 */
var pageTitle = adArray[randomAd]["title"];
console.log(pageTitle);

/*
 * Function used to display the randomly selected Ad and to
 * change the page title to the first 10 characters of the 
 * title of the Ad using .substr
 */
function adToDisplay( displayAd, pageTitle ){
    var ad = document.getElementById("ad");
    ad.innerHTML = displayAd;
    document.title = pageTitle.substr(0,10);
};

/*
 * Call the function
 */
adToDisplay( displayAd, pageTitle );