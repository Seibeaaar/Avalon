import { projectAnimation, serviceAnimation, isScrolledTo } from './animations.js';

// Elements
const pageScroller = document.querySelector('.page__scroller');
const carousel = document.querySelector('.carousel');
const offices = document.querySelectorAll('.office__item');
const specs = document.querySelectorAll('.spec__item');
const blogSection = document.querySelector('.post__container');
const phoneInput = document.querySelector('.telephone__input');

// Insta Auth
// const userInfo = {
//     accessToken: "IGQVJWdEtja0gxa2dUWFlRTTlMVzZAtME9KOXRuZADdUZAnJDOGk1XzlPY1JKdTRBeEo1M3VTcElmZAFVxeDRjcVpiUUlDbl91TFh1X1ZAGdnlpd19seU5aZAVgzVkl2R2UtdXBya1IzVm9n",
//     userId: 17841403065184612
// }

const accessToken = '147038277291060|b6f20ec010f1562e33fa7bcc4e6a8aae'

// For now it's hardcoded, in the future urls will be dynamic
const urls = [
    'https://www.instagram.com/tv/CMRyvLdlUIG/?utm_source=ig_web_copy_link',
    'https://www.instagram.com/p/CMO06_dgb9H/?utm_source=ig_web_copy_link',
    'https://www.instagram.com/tv/CMMPlB4lQNS/?utm_source=ig_web_copy_link'
]

const getPosts = async () => {
    const IGPosts = await Promise.all(urls.map(async (url) => {
        const response = await fetch(`https://graph.facebook.com/v10.0/instagram_oembed?url=${url}&access_token=${accessToken}`);
        const post = await response.json();
        return post;
    }))
    IGPosts.forEach(post => {
        const postItem = document.createElement('div');
        postItem.innerHTML = post.html;
        postItem.classList.add('post__item', 'col-lg-4', 'col-md-6', 'col-sm-12');
        postItem.style.backgroundImage = `url(${post.thumbnail_url})`;
        blogSection.insertAdjacentElement('beforeend', postItem);
    })
}

getPosts();

const posts = document.querySelectorAll('.post__item');
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
