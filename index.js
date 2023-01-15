// document.querySelector(".set").addEventListener("click", handleClick);

// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick(){
//     alert("I got clicked");
// }

// ******* Detecting button press ********* 
for (var i  = 0; i  < document.querySelectorAll(".drum").length; i ++) {
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var buttonInnerHtml= this.innerHTML;
        makesound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
             
    });
    
}

// ******* Detecting key press *************
document.addEventListener("keypress", function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});


function makesound(key){
    switch (key) {
        case "w":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "a":
            var kick= new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "d":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "j":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "k":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
    
        default:
            break;
    }  
}

function buttonAnimation(currentkey){
    var activeButton= document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout (function(){
        activeButton.classList.remove("pressed");
    }, 100);
}



