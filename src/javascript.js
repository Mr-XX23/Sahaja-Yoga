AOS.init({
    offset: 300,
});


$(document).ready(function(){
// Toggle menu 1 on hover
$("#toggleMenu1").hover(function(){
    $("#toggleMenuCard1").slideDown("slow");
    clearTimeout(debounce);
});

$("#toggleMenuCard1").mouseleave (function() {
    debounce = setTimeout(closeMenu);
});

let debounce;
let closeMenu = function(){
    $("#toggleMenuCard1").slideUp("fast");
    clearTimeout(debounce);
}

 // Toggle menu 2 on hover

  $("#toggleMenu2").hover(function(){
    $("#toggleMenuCard2").slideDown("slow");
    clearTimeout(debounce);
});

$("#toggleMenuCard2").mouseleave (function() {
    debounce = setTimeout(closeMenu2);
});

let closeMenu2 = function(){
    $("#toggleMenuCard2").slideUp("fast");
    clearTimeout(debounce);
}


// Mobile flyout out menu
 
$('#openMenu').click(function(e){
    e.stopPropagation();
    $('#mobileMenuCard').show();   
});
$('#closeMenu').click(function(e){
    e.stopPropagation();
    $('#mobileMenuCard').hide();
});
});


// typed js
var typed = new Typed('#typed', {
    strings: ['Meditation.'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  });

//  <!-- https://photos.smugmug.com/PHOTOGRAPHS/PORTRAITS/Portraits-prime-1/i-sdwvZzS/4/6a1e04d3/M/IMG0012-M.jpg --> main photo

// date
const d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();


// Slider Desktop

let slides = document.querySelectorAll(".slide-ana>div");
let slideSayisi = slides.length;
let prev = document.getElementById("prev");
let next = document.getElementById("next");
for (let index = 0; index < slides.length; index++) {
    const element = slides[index];
    element.style.transform = "translateX(" + 100 * index + "%)";
}
let loop = 0 + 1000 * slideSayisi;

function goNext() {
    loop++;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

function goPrev() {
    loop--;
    for (let index = 0; index < slides.length; index++) {
        const element = slides[index];
        element.style.transform = "translateX(" + 100 * (index - (loop % slideSayisi)) + "%)";
    }
}

next.addEventListener("click", goNext);
prev.addEventListener("click", goPrev);
