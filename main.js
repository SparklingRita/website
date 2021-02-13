var toggleStatus = 0;
function toggleMenu () {
    if (toggleStatus == 1) {
        document.getElementById("menu").style.left = "-240px";
        toggleStatus = 0;    
    }   else if (toggleStatus == 0) {
        document.getElementById("menu").style.left = "0px";
        toggleStatus = 1; 
    }
}