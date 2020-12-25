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
    insertDivs();
}

window.onload = insertText;


function insertDivs() {
    var div_value = "A Ą B C Ć D E Ę F G H I J K L Ł M N Ń O Ó P Q R S Ś T U V W X Y Z Ź Ż";
    var div_html = "";
    var div_clear = "<div style=\"clear: both;\"></div>"
    var counter = 0;
    var y = 7;

    
        for(x = 1; x <=div_value.length; x++){
            if(div_value.charAt(x)==" ");

            else{
                var temporaryDivHtml = "<div class=\"button\">" + div_value.charAt(counter) + "</div>";
                div_html = div_html + temporaryDivHtml;
                counter = counter + 2;
            } 
            if((counter/2) == y){

                y = y +7
                div_html = div_html + div_clear;
            }
        }
    document.getElementById("right").innerHTML = div_html;
}