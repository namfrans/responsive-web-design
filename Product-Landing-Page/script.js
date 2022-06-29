var navList = document.getElementById("navlink-items");

navList.style.maxHeight = "0px";

function togglemenu(){
    if(navList.style.maxHeight == "0px"){
        navList.style.maxHeight = "130px";
    }
    else{
        navList.style.maxHeight = "0px";
    }
}