const gridContainer = document.querySelector('.grid-container')
let itemCount = 16;

let mouseDown = false
gridContainer.onmousedown = () => (mouseDown = true)
gridContainer.onmouseup = () => (mouseDown = false)

for (let i = 1; i <= (itemCount ** 2); i++) {
    let gridItem = document.createElement('div')
    gridItem.style.width = `${gridContainer.offsetHeight / itemCount}px`;
    gridItem.style.height = `${gridContainer.offsetHeight / itemCount}px`;

    gridItem.addEventListener('dragstart', event => {
        event.preventDefault();
    });

    gridItem.addEventListener('drop', event => {
        event.preventDefault();
    });


    gridItem.addEventListener('mousemove', changeColor)
    // gridItem.addEventListener('mousedown', changeColor)

    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem);


    function changeColor(event) {
        if (event.type === 'mousemove' && mouseDown) {
            gridItem.style.backgroundColor = 'black'
        }
    }

}


