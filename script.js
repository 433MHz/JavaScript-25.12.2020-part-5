var haslo = "Bez pracy nie ma kołaczy";
var haslo1 = "";

function insertText(){

    for(var i = 0; i <= haslo.length - 1; i++){
        if(haslo.charAt(i) == " "){
            haslo1 = haslo1 + " ";
        }
        else haslo1 = haslo1 + "-";

    }

    document.getElementById("logo").innerHTML = haslo1;
}

window.onload = insertText;