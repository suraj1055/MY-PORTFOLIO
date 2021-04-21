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

let isActive = false;

Hamburger.addEventListener('click', function(){
    MobileNav.classList.toggle('open');
})