
//Nav menu

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li'); 

//Burger Nav

burger.addEventListener('click', () => {
//Toggle Nav

    nav.classList.toggle('nav-active');

//Animate Links

    navLinks.forEach((link, index) => {
        if(link.style.animation){
           link.style.animation = '';
        } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0}s`
        }
    });
//Burger Animation
    burger.classList.toggle('toggle');
}); 
}

navSlide();


/*AJOUT SON IMAGE FICHEPERSO*/

/*CHERCHEZ PAS C'EST PETE O_O*/

let image = document.getElementById('imgperso'); // on récupère l'élément qui sera survolé pour jouer le son
let son = document.getElementById('son'); // on récupère l'élément <audio>
 
image.onmouseover = function play(){ // lorsque le div est survolé
    son.play(); // on joue le son
};
 
image.onmouseout = function pause(){ // lorsque la souris quitte le div
    son.pause(); // on met en pause le son
    son.currentTime() = 0;
};

play();
pause();

/* \Ö/ \Ö/ \Ö/ \Ö/ \Ö/ \Ö/ \Ö/ \Ö/ \Ö/ \Ö/ */
/*  |   |   |   |   |   |   |   |   |   |  */
/* / \ / \ / \ / \ / \ / \ / \ / \ / \ / \ */                        