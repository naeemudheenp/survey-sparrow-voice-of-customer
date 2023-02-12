var menuButtonStatus=false;
var menuButtonVissibility=false;

var navBarMenu=document.getElementById("menuButton");

footer_setDate();

function navBarMenu_onClick(){
 
    var sectionLink=document.getElementById("sectionLink");
    sectionLink.classList.toggle("section_navbar_links_toggle");

    var sectionLink1=document.getElementById("sectionLink1");
    sectionLink1.classList.toggle("section_navbar_links_toggle");

}

