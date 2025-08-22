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
    console.log(`sorting...`);
    let innerndm = Math.floor(Math.random() * samplevalue); //random number between 1 and user's inputted value
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
    document.getElementById("listaAmigos").innerHTML = "";//clear the list of friends
    document.getElementById("resultado").innerHTML = "";//clear the sorting result
    return; //exit the function
}

function agregarAmigo(){ //function to add a friend to the list
    let friend = document.getElementById("amigo").value; //get the value of the textbox
    if(friend === ""){ //if the textbox is empty
        console.log("Empty name field!"); //log the event
        alert("Ingrese un nombre!"); //alert the user
        document.getElementById("amigo").focus(); //show cursor in textbox
        return; //exit the function
    }
    if(friends.includes(friend)){ //if the name is already in the list
        alert("Este nombre ya se encuentra en la lista."); //alert the user
        console.log("Name already in the list!"); //log the event
        document.getElementById("amigo").value = ""; //clear the textbox
        document.getElementById("amigo").focus(); //show cursor in textbox
        return; //exit the function
    }
    if(friend.toLowerCase() === "reiniciar"){ //if the user wants to restart the app | to lower case means to convert all text in the field to lowercase, to make it match with "restart"
        restartApp(); //call the restart function
        return; //exit the function
    }
    console.log(`Adding friend: ${friend}`); //log the event
    friends.push(friend); //add the name to the array
    document.getElementById("listaAmigos").innerHTML = friends.join("<br>"); //update the list of friends in the HTML
    /*
    remember, use "document" before any call for modification of the HTML
    */
    document.getElementById("amigo").value = ""; //clear the textbox
    document.getElementById("amigo").focus(); //show cursor in textbox
}
function sortearAmigo(){
    goobers = friends.length;
    if (goobers === 1){
        alert(`Ingrese amigos en la lista!`);
        console.log(`Not enough names to sort! Add names via the textbox`);
        document.getElementById("amigo").focus();
        return;
    }
    wizardry = rndm(goobers);
    console.log(`Magic number for this iteration is $(wizardry)!`);
    document.getElementById("resultado").innerHTML = friends[wizardry];
    return;

}


// Execution
//since the app is based mainly on functions called in the html file, there's no need to call any function here.
document.getElementById("amigo").focus(); //show cursor in textbox

