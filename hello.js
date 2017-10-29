var yeet = document.querySelectorAll('p,li,h1,h2,h3,h4,h5,h6,a');
//var color = "purple";
//var bgColor = "#000";
//var fontFamily = "monospace";

for (i = 0; i < yeet.length; i++) {
    yeet[i].setAttribute("style","color: " + color + "; background-color: " + bgColor + "; font-family: " + fontFamily);
}