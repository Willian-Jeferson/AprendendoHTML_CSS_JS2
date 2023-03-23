var table = document.querySelector("tbody");

table.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove();
    },500); 
})