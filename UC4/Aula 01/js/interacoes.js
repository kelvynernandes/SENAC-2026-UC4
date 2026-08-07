//Menu hamburger
// function clickMenu(){
    // let itens= document.getElementById("itens");
    // if (itens.style.display ==="block" || itens.style.
        // display===""){
            // itens.style.display = "none";       
    // }else{
        // itens.style.display ="block";
    // }
// }


// carrosel
$(document).ready(function(){
    $('#destaque').slick({
        donts:true,
        autoplay:true,
        autoplaySpeed:3000,
        arrows:false
    });
});