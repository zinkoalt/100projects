const grayHeart = document.querySelector('.gray-heart');
const redHeart = document.querySelector('.red-heart');

grayHeart.addEventListener('click', () => {
    grayHeart.classList.add('fill-color');
    redHeart.classList.add('animation');
    });
redHeart.addEventListener('click', () => {
    redHeart.classList.remove('animation');
    grayHeart.classList.remove('fill-color');
    });