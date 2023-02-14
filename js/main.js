var menuButtonStatus=false;
var menuButtonVissibility=false;



var navBarMenu=document.getElementById("menuButton");



function navBarMenu_onClick(){

    if(!menuButtonStatus){
        navBarMenu.classList.remove('fa-bars');
        navBarMenu.classList.add('fa-xmark');

        menuButtonStatus=true;
    }else{
        navBarMenu.classList.remove('fa-xmark');
        navBarMenu.classList.add('fa-bars');

        menuButtonStatus=false;

    }
 
    var sectionLink=document.getElementById("sectionLink");
    sectionLink.classList.toggle("section_navbar_links_toggle");

    var menuButton = document.getElementById("menuButton");



    var sectionLink1=document.getElementById("sectionLink1");
    sectionLink1.classList.toggle("section_navbar_links_toggle");

}

