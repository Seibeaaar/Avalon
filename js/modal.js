// Elements
const modal = document.querySelector('.modal__window');
const close = document.querySelector('.modal__close');
const orderButton = document.querySelector('.order__btn');
const orderOptions = document.querySelector('.order__options');
const labels = document.querySelectorAll('.form__input label');
const inputs = document.querySelectorAll('.form__input input');
const message = document.querySelector('.message');

const heading = document.createElement('h1');

// Order options popup
const optionsHideStyles = {
    transform: 'scaleX(0)',
    opacity: 0
}

const optionsShowStyles = {
    transform: 'scaleX(1)',
    opacity: 1
}

const hideOptions = () => Object.assign(orderOptions.style, optionsHideStyles)
const showOptions = () => Object.assign(orderOptions.style, optionsShowStyles)

Array.from([orderButton, orderOptions]).forEach(elem => {
    elem.addEventListener('mouseenter', showOptions);
    elem.addEventListener('mouseleave', hideOptions);
})
// Modal window
Array.from(orderOptions.children).forEach(e => e.addEventListener('click', () => {
    modal.style.transform = 'translateY(0%)';
    heading.innerText = `Заявка на ${e.getAttribute('data-value')}`;
    heading.style.color = '#fff';
    heading.style.marginBottom = '20px';
    modal.insertAdjacentElement('afterbegin', heading);
}))

close.addEventListener('click', () => {
    modal.style.transform = 'translateY(100%)';
})

// Function to mockup input focus state when there is a value entered by user
const formInputs = [...inputs, message];
formInputs.forEach((input, i) => {
    input.addEventListener('focus', () => {
        labels[i].style.top = 0;
        labels[i].style.fontSize = '12px';
    })
    input.addEventListener('blur', e => {
        if (e.target.value) {
            labels[i].style.top = 0;
            labels[i].style.fontSize = '12px';
        } else {
            labels[i].style.top = '20px';
            labels[i].style.fontSize = '14px';
        }
    })
})

