const button = document.getElementById('button');
const body = document.body;

let thisBox = null,
    shiftX,
    shiftY;

button.addEventListener('click', (e) => {
    if (e.target === button) {
        makeBox();
    }
});

document.addEventListener('mousedown', (e) => {
    if (e.target.nodeName === 'DIV') {
        thisBox = e.target;

        shiftX = e.pageX - getCoords(thisBox).left;
        shiftY = e.pageY - getCoords(thisBox).top;
    }
});

document.onmousemove = move;
document.onmouseup = endMove;

function makeBox() {
    let newBox = document.createElement('DIV'),
        height = Math.floor((Math.random() + 0.1) * 100) + 'px',
        width = Math.floor((Math.random() + 0.1) * 100) + 'px',
        color = getRandomColor(100, 75),
        top = Math.floor(Math.random() * (window.innerHeight - parseInt(height))) + 'px',
        left = Math.floor(Math.random() * (window.innerWidth - parseInt(width))) + 'px';
    console.log(parseInt(height));

    newBox.style.height = height;
    newBox.style.width = width;
    newBox.style.backgroundColor = color;
    newBox.style.top = top;
    newBox.style.left = left;
    body.appendChild(newBox);
}

function getRandomColor(s, l) {
    let h = Math.round(Math.random() * 360);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

function getCoords(elem) {
    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function move(e) {
    if (thisBox !== null) {
        thisBox.style.left = (e.pageX - shiftX) + 'px';
        thisBox.style.top = (e.pageY - shiftY) + 'px';
    }
}

function endMove() {
    thisBox = null;
}
