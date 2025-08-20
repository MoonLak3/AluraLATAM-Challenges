/*
sorter for a friend list. The user has to be able to write the names
of their friends, and it must display the names in a list. If the 
name is empty, it should put out an alert, and not insert the name in
the list. Afterwards, it has got to randomly select one of the names
of the list
*/

// Variables
let friends = []; //array where we'll store the name list
let goobers = 0; //integer where we'll count all the names on the array (is not really needed, but is a nice to have) 
let wizardry = 0; //integer dedicated to store the randomized number


// Functions
function rndm(samplevalue){//function to generate a random number
    let innerndm = Math.floor(Math.random() * samplevalue) + 1; //random number between 1 and user's inputted value
    console.log(`User wizardry value: ${wizardry}`); 
    return innerndm; //return the random number
}

function restartApp(){    //function to clear all the variables and reset the app
    console.log("Restarting app...");
    friends = [];
    goobers = 0;
    wizardry = 0;
    document.getElementById("amigo").value = "";//clear textbox
    document.getElementById("amigo").focus();//show cursor in textbox
    document.getElementById("friend-list").innerHTML = "";//clear the list of friends
    document.getElementById("result").innerHTML = "";//clear the sorting result
}

function MainApp(){

}

// Execution
for(;;){
    if
}