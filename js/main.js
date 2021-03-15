import { projectAnimation, serviceAnimation, isScrolledTo } from './animations.js';

// Elements
const pageScroller = document.querySelector('.page__scroller');
const carousel = document.querySelector('.carousel');
const offices = document.querySelectorAll('.office__item');
const specs = document.querySelectorAll('.spec__item');
const posts = document.querySelectorAll('.blog__item');
const phoneInput = document.querySelector('.telephone__input');

// Insta Auth
const authLink = 'https://api.instagram.com/oauth/authorize?client_id=248901296885377&redirect_uri=http://localhost:3000&scope=user_profile,user_media&response_type=code'
window.addEventListener('load', () => window.location = authLink)

// Page scroller
window.addEventListener('scroll', () => {
    if (window.scrollY > carousel.offsetTop + carousel.offsetHeight) {
        pageScroller.classList.add('animate__fadeInRight');
        pageScroller.classList.remove('animate__fadeOutRight');
        pageScroller.style.right = '45px';
    } else {
        pageScroller.classList.add('animate__fadeOutRight');
        pageScroller.classList.remove('animate__fadeInRight');
        pageScroller.style.right = '-45px';
    }
})
pageScroller.addEventListener('click', () => window.scrollTo(0, 0));

// Adding animation to elements
const animationCB = () => {
    projectAnimation()
    serviceAnimation()
    offices.forEach((a, i) => {
        a.classList.add('animate__animated')
        if (isScrolledTo(a.offsetHeight, a.offsetTop)) {
            if (i % 2) a.classList.add('animate__fadeInRight')
            else a.classList.add('animate__fadeInLeft')
            a.style.opacity = '1'
        }
    })
    specs.forEach((s) => {
        s.classList.add('animate__animated')
        if (isScrolledTo(s.offsetHeight, s.offsetTop)) {
            s.classList.add('animate__fadeInUp')
            s.style.opacity = '1'
        }
    })
    posts.forEach((p) => {
        p.classList.add('animate__animated')
        if (isScrolledTo(p.offsetHeight, p.offsetTop)) {
            p.classList.add('animate__fadeInUp')
            p.style.opacity = '1'
        }
    })
}

window.addEventListener('scroll', animationCB)

const phoneMask = IMask(phoneInput, {
    mask: '+{38} (000) 000-00-00'
})
