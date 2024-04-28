
const wrapper = document.querySelector('.wrappper'),
    header = document.querySelector('header');

const onDrag = ({ movementX, movementY }) => {
    let getSye = window.getComputedStyle(wrapper);
    let left = parseInt(getSye.left);
    let top = parseInt(getSye.top);

    wrapper.style.left = ` ${left + movementX}px `;
    wrapper.style.top = ` ${top + movementY}px `;

};

header.addEventListener('mousedown', () => {
    header.classList.add('active');
    header.addEventListener('mousemove', onDrag);
});

document.addEventListener('mouseup', () => {
    header.classList.remove('active');

    header.removeEventListener('mousemove', onDrag);
});

