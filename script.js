
//Nav menu

const btnNav = document.querySelector('.nav-mobile');
const listeNav = document.querySelector('nav.main-nav ul');
let imgBtn = document.querySelector('.nav-mobile img');




btnNav.addEventListener('click', () => {

    listeNav.classList.toggle('active-nav');

    if(window.location.href.includes('index')){
        if(imgBtn.src.includes('menu')){
            imgBtn.src = 'images/croix.svg';
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = 'images/menu.svg';
            imgBtn.style.width = "40px";
            imgBtn.style.height = "40px";
        }
    
    } else {
        if(imgBtn.src.includes('menu')){
            imgBtn.src = 'images/croix.svg';
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = 'images/menu.svg';
            imgBtn.style.width = "40px";
            imgBtn.style.height = "40px";
        }
    
    }

})


