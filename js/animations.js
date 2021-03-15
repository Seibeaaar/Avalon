const projects = document.querySelectorAll('.project__item');
const services = document.querySelectorAll('.service__item');

export const isScrolledTo = (elemHeight, elemTop) => window.scrollY >= elemTop - elemHeight;

export const projectAnimation = () => {
  projects.forEach((p, i) => {
      p.classList.add('animate__animated')
      if (isScrolledTo(p.offsetHeight, p.offsetTop)) {
          if (i % 4 === 0) p.classList.add('animate__fadeInLeft')
          else if ((i + 1) % 4 === 0) p.classList.add('animate__fadeInRight')
          else p.classList.add('animate__fadeInUp')
          p.style.opacity = '1'
      }
  })
}

export const serviceAnimation = () => {
  services.forEach((s, i) => {
      s.classList.add('animate__animated')
      if (isScrolledTo(s.offsetHeight, s.offsetTop)) {
          switch (i) {
              case 0:
                  s.classList.add('animate__fadeInLeft');
                  break;
              case 1:
                  s.classList.add('animate__fadeInUp')
                  break;
              case 2:
                  s.classList.add('animate__fadeInDown');
                  break;
              case 3:
                  s.classList.add('animate__fadeInRight');
                  break;
          }
          s.style.opacity = '1'
      }
  })
}