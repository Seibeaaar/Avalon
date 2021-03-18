// For now it's hardcoded, in the future should be fetched from backend
const projectBackground = document.querySelector('.project__bg');
const projectWrapper = document.querySelector('.project__list');

const imageRoot = 'assets/img/projects/';
const projects = [
    {name: 'Avalon Yard', src: 'Avalon-Yard.jpg', inUse: false, link: 'https://avalon-inc.com.ua/avalon-yard.html'},
    {name: 'Avalon Up', src: 'Avalon-Up.jpg', inUse: false, link: 'https://avalon-inc.com.ua/avalon-up.html'},
    {name: 'Avalon Zelena St.', src: 'Avalon-Zelena.jpg', inUse: false, link: 'https://avalon-inc.com.ua/avalon-zelena.html'},
    {name: 'Avalon Holiday', src: 'Avalon-Holiday.jpg', inUse: false, link: 'https://avalon-inc.com.ua/avalon-holiday.html'},
    {name: 'Avalon Flex', src: 'Avalon-Flex.jpg', inUse: false, link: 'https://avalon-inc.com.ua/avalon-flex.html'},
    {name: 'Avalon Time', src: 'Avalon-Time.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon-time.html'},
    {name: 'Avalon 37', src: 'Avalon-37.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon-37.html'},
    {name: 'Avalon', src: 'Avalon.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon.html'},
    {name: 'Avalon 2Day', src: 'Avalon-2Day.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon-2day.html'},
    {name: 'Avalon Lux', src: 'Avalon-Lux.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon-lux.html'},
    {name: 'Avalon Light', src: 'Avalon-Light.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon-light.html'},
    {name: 'Avalon Comfort', src: 'Avalon-Comfort.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon-comfort.html'},
    {name: 'Avalon Garden', src: 'Avalon-Garden.jpg', inUse: true, link: 'https://avalon-inc.com.ua/avalon-garden.html'},
    {name: 'New Point by Avalon', src: 'New-Point.jpg', inUse: true, link: 'https://avalon-inc.com.ua/new-point-by-avalon-inc.html'}
];

// Default slide displayed
projectBackground.style.backgroundImage = `url(${imageRoot + projects[0].src})`;

projects.forEach(project => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-image', project.src);
    listItem.innerText = project.name;
    listItem.innerHTML = `<a href=${project.link} target="_blank" class="project__item">${project.name}</a> ${project.inUse ? '<span class="sticker">Здано</span>' : ''}`;
    listItem.addEventListener('mouseover', (event) => {
        projectBackground.style.backgroundImage = `url(${imageRoot + event.currentTarget.dataset.image})`;
    });
    projectWrapper.insertAdjacentElement('beforeend', listItem);
});