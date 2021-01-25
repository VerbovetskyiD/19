'use strict';

//задание 1
document.querySelectorAll('.squares > div').forEach(square =>
    square.addEventListener('click', event => {
        const square = event.target;
        if (square.style.backgroundColor === 'green') {
            square.style.backgroundColor = 'yellow';
        } else if (square.style.backgroundColor === 'blue') {
            square.style.backgroundColor = 'green';
        } else {
            square.style.backgroundColor = 'blue';
        }
        square.parentNode.append(square);
    })
);

//задание 2
function toggleClass(tag, newClass) {
    const classesSet = new Set(tag.className.split(' '));
    classesSet.has(newClass)
        ? classesSet.delete(newClass)
        : classesSet.add(newClass);
    tag.className = Array.from(classesSet).join(' ');
}

const $div = document.querySelector('.box');

toggleClass($div, 'border');
toggleClass($div, 'border');