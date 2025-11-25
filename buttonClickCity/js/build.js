//console log just to test that your JS is linked properly
console.log("We are linked up!");
//create a variable for the number of buildings in the city and start it at zero

let buildings = 0;
//send a message to the page to inform the user of how many buildings there are in their city. This will happen right away when the page loads
document.getElementById("city").innerHTML =
    "You have " + buildings + " buildings in your city!";

//Functions --
//Think of this as a group of instructions that will always run together
//Create a function that will run when the first button is clicked
//This gets trigger by the submit button in the form. This trigger is known as an EVENT! (Button click event)
//It will:



//-- Print a message to the console

//--Add one to the variable that is tracking the number of buildings
//---Print a message with the number of buildings
function storageBuild() {
    buildings++;
    console.log("Storage unit is working!!");
    document.getElementById("city").innerHTML = 
        "You have " + buildings + " buildings in your city!";
document.getElementById("cityGraphic").innerHTML +="<img src='images/BuildingBlock1.png' alt'storage unit'>";
}

//break!!

function apartBuild(){console.log("apartment is working!!");
        buildings++;
    console.log("Storage unit is working!!");
    document.getElementById("city").innerHTML = 
        "You have " + buildings + " buildings in your city!";
document.getElementById("cityGraphic").innerHTML +="<img src='images/BuildingBlock2.png' alt'apartment building'>";
}


function Block3(){console.log("Block is Working!");
        buildings++;
    console.log("Block is Working!  ");
    document.getElementById("city").innerHTML = 
        "You have " + buildings + " buildings in your city!";
document.getElementById("cityGraphic").innerHTML +="<img src='images/BuildingBlock3.png' alt'placehold>";
}


//---Place an image graphic into the other div


function Ratio(){console.log("Ratio");
        buildings++;
    console.log("Ratio");
    document.getElementById("city").innerHTML = 
        "You have " + buildings + " buildings in your city!";
document.getElementById("cityGraphic").innerHTML +="<img src='images/download.jpg' alt'placehold>";
}
//Create a function for the second button that prints a message with the number of buildings and the graphic for the second building

//Create a function for the third button that prints a message with the number of buildings and the graphic for the second building
