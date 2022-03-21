// 'use strict';

// variable to hold dragged object for events where dragged object is not event.target
let dragged;

const init = () => {

    const images = document.querySelectorAll('.piece-img');
    images.forEach(img => {
        img.addEventListener("dragstart", dragstart);
        img.addEventListener("dragend", dragend);
    })

    const containers = document.querySelectorAll('.target');
    containers.forEach(container => {
        container.addEventListener("dragover", dragover)
        container.addEventListener("dragenter", dragenter)
        container.addEventListener("dragleave", dragleave)
        container.addEventListener("drop", drop)
    })
}

const dragstart = (event) => {
    if (event.target && event.target.nodeName === 'P') {
        // event.dataTransfer.setData('text/html', 'This text may be dragged')
        dragged = event.target;
    }
}

const dragend = (event) => {
    if (event.target && event.target.nodeName === 'P') {
        dragged = null;
    }
}

const dragover = (event) => {
    event.preventDefault();
    // event.p.style.borderRadius = "15px"
    event.dataTransfer.dropEffect = "move";
}

const dragenter = (event) => {
    event.preventDefault();
    // event.p.style.borderRadius = "15px"
    event.target.style.boxShadow = "inset 1em 1em white";
}

const dragleave = (event) => {
    event.preventDefault();
    // event.p.style.borderRadius = "15px"
    event.target.style.boxShadow = "inset 5em 1em gold";
    event.p.style.boxShadow = "inset 15px 15px red";
    // event.target.style.transform = "skewY(5deg)";
    // event.target.style.textShadow = "5px 5px 0px red";
    // event.p.style.backgroundColor = "red";
}

const drop = (event) => {
    if (event.target.dataset.target === dragged.dataset.piece) {
        event.target.appendChild(dragged);
    }
    event.target.style.textShadow = "5px 5px 0px red";
    event.target.style.boxShadow = "inset 2em 10em #00B600";
    // event.p.style.borderRadius = "15px"
}

document.addEventListener("DOMContentLoaded", init);