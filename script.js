let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let cross = document.querySelector('#cross')

menuIcon.onclick = () => {
    navbar.style.display='block'
    menuIcon.style.display='none'
   
};
cross.onclick =()=>{
    navbar.style.display='none'
    menuIcon.style.display='block'
}

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


ScrollReveal({ 
    distance:'80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});


var typed = new Typed(".skills",{
    strings:['FrontEnd Developer','Youtuber','Digital Creater'],
    typeSpeed:60,
    backSpeed:60,
    loop:true,
    loopCount:Infinity
})