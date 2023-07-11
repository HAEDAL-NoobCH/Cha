let stars = document.getElementById('starsImg');
let moon = document.getElementById('moonImg');
let mountains_behind = document.getElementById('mountainsBehindImg');
let text = document.getElementById('mainText');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountainsFrontImg');
let header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let value = window.scrollY;

    let height = window.innerWidth;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = -250 + value * 3 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    text.style.marginTop = value * 1.5 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
})
let value = window.scrollY;

let height = window.innerWidth;
stars.style.left = value * 0.25 + 'px';
moon.style.top = -300 + value * 3 + 'px';
mountains_behind.style.top = value * 0.5 + 'px';
mountains_front.style.top = value * 0 + 'px';
text.style.marginRight = value * 4 + 'px';
text.style.marginTop = value * 1.5 + 'px';
btn.style.marginTop = value * 1.5 + 'px';
header.style.top = value * 0.5 + 'px';