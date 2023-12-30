const gridContainer = document.querySelector('.grid-container')
let itemCount = 16;

for (let i = 1; i <= (itemCount ** 2); i++) {
    let gridItem = document.createElement('div')
    gridItem.style.width = `${gridContainer.offsetHeight / itemCount}px`;
    gridItem.style.height = `${gridContainer.offsetHeight / itemCount}px`;

    gridItem.classList.add('grid-item')
    gridContainer.appendChild(gridItem);
}

