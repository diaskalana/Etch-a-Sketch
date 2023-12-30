const gridContainer = document.querySelector('.grid-container')

construct()

document.body.addEventListener('dragstart', event => {
    event.preventDefault();
});
document.body.addEventListener('drop', event => {
    event.preventDefault();
});

let mouseDown = false
gridContainer.onmousedown = () => (mouseDown = true)
gridContainer.onmouseup = () => (mouseDown = false)

var slider = document.getElementById("myRange");
var sliderValue = document.querySelector('.slider-value');
sliderValue.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = () => {
    sliderValue.textContent = `${slider.value} x ${slider.value}`
}
slider.onchange = () => {
    gridContainer.innerHTML = ""
    construct(slider.value)
}


function construct(itemCount = 16) {

    for (let i = 1; i <= (itemCount ** 2); i++) {
        let gridItem = document.createElement('div')
        gridItem.style.width = `${gridContainer.offsetHeight / itemCount}px`;
        gridItem.style.height = `${gridContainer.offsetHeight / itemCount}px`;

        gridItem.addEventListener('mousemove', changeColor)
        gridItem.addEventListener('mousedown', changeColor)

        gridItem.classList.add('grid-item')
        gridContainer.appendChild(gridItem);



        function changeColor(event) {
            if (event.type === 'mousemove' && mouseDown) {
                gridItem.style.backgroundColor = 'black'
            }
        }

    }



}

