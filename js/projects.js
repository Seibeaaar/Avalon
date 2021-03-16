// For now it's hardcoded, in the future should be fetched from backend
const projectBackground = document.querySelector('.project__bg');
const projectWrapper = document.querySelector('.project__list');

const imageRoot = 'assets/img/projects/';
const projects = [
    {name: 'Avalon Yard', src: 'Avalon-Yard.jpg', inUse: false},
    {name: 'Avalon Up', src: 'Avalon-Up.jpg', inUse: false},
    {name: 'Avalon Zelena St.', src: 'Avalon-Zelena.jpg', inUse: false},
    {name: 'Avalon Holiday', src: 'Avalon-Holiday.jpg', inUse: false},
    {name: 'Avalon Flex', src: 'Avalon-Flex.jpg', inUse: false},
    {name: 'Avalon Time', src: 'Avalon-Time.jpg', inUse: true},
    {name: 'Avalon 37', src: 'Avalon-37.jpg', inUse: true},
    {name: 'Avalon', src: 'Avalon.jpg', inUse: true},
    {name: 'Avalon 2Day', src: 'Avalon-2Day.jpg', inUse: true},
    {name: 'Avalon Lux', src: 'Avalon-Lux.jpg', inUse: true},
    {name: 'Avalon Light', src: 'Avalon-Light.jpg', inUse: true},
    {name: 'Avalon Comfort', src: 'Avalon-Comfort.jpg', inUse: true},
    {name: 'Avalon Garden', src: 'Avalon-Garden.jpg', inUse: true},
    {name: 'New Point by Avalon', src: 'New-Point.jpg', inUse: true}
];

projectBackground.style.backgroundImage = `url(${imageRoot + projects[0].src})`;

projects.forEach(project => {
    const listItem = document.createElement('li');
    listItem.setAttribute('data-image', project.src);
    listItem.innerText = project.name;
    listItem.innerHTML = `<a href="#" class="project__item">${project.name}</a> ${project.inUse ? '<span class="sticker">Здано</span>' : ''}`;
    listItem.addEventListener('mouseover', (event) => {
        projectBackground.style.backgroundImage = `url(${imageRoot + event.currentTarget.dataset.image})`
    });
    projectWrapper.insertAdjacentElement('beforeend', listItem);
});