const loader = document.querySelector('.loader');
const content = document.querySelector('.content');
const body = document.querySelector('.body');

function init() {
    setTimeout(() => {
        
        loader.style.opacity = '0';

        loader.style.display = 'none';

        content.style.display = 'block';

        body.style.height = '0';

        setTimeout(() => {
            content.style.opacity = '1';
        }, 50)

    }, 3000);
}

init();