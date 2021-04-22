window.addEventListener('resize', function(){
    addRequiredClass();
})

function addRequiredClass(){
    if(window.innerWidth < 830){
        document.body.classList.add('mobile')
    }
    else{
        document.body.classList.remove('mobile')
    }
}

window.onload = addRequiredClass;

let Hamburger = document.querySelector('.Hamburger');

let MobileNav = document.querySelector('.nav-items');

let bars = document.querySelectorAll('.Hamburger span');

let Main = document.querySelector('section');

let isActive = false;

Hamburger.addEventListener('click', function(){
    MobileNav.classList.toggle('open');

    Main.classList.toggle('nav');

    if(!isActive){
        bars[0].style.transform = 'rotate(45deg)';
        bars[1].style.opacity ='0';
        bars[2].style.transform = 'rotate(-45deg)';
        isActive = true;
    }
    else{
        bars[0].style.transform = 'rotate(0deg)';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'rotate(0deg)';
        isActive = false;
    }
})