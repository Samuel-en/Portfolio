//setting variables for the class names to get the 

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// this function's purpose is to hide the underline and also the text content under each heading 
function opentab(tabName){
    for(tablink of tablinks){
    //this is to remove the underline under each header 
        tablink.classList.remove("active-link");
}
    for(tabcontent of tabcontents){
    //this is to remove the text content for each header 
        tabcontent.classList.remove("active-tab");    
}

//this block of code is functionality for the underline and the 
    event.currentTarget.classList.add("acitve-link")
    document.getElementById(tabName).classList.add("active-tab");
}
