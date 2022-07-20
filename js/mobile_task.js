//things called when script loads
window.onload=function(){
    document.getElementById("nav_toggle").addEventListener("click", MenuToggle);
    window.addEventListener("resize", ResetMenu);
}
//functions

//toggles the visibility of the menu (should only be called by the menu toggle button only visible on smaller windows)
function MenuToggle(){
    if(document.getElementById("nav_bar_ul").style.display == "block") 
        document.getElementById("nav_bar_ul").style.display = "none";
    else
        document.getElementById("nav_bar_ul").style.display = "block";
}

//resets the menu's display if the window size is changed
function ResetMenu(){
    if (window.innerWidth >= 900)
        document.getElementById("nav_bar_ul").style.display = "flex";
    else
    document.getElementById("nav_bar_ul").style.display = "block";
}
    