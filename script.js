const gridContainer = document.querySelector('.grid-container')
const colorPicker = document.getElementById('colorPicker')
const eraser = document.getElementById('eraser')
const singleColorBtn = document.getElementById('singleColor')
const clear = document.getElementById('clear')
const randomColorBtn = document.getElementById('randomColor')

// To invoke main function and to apply default settings
construct()
singleColorBtn.classList.add('active-button')

// To disable drag and drop feature
document.body.addEventListener('dragstart', event => {
    event.preventDefault();
});
document.body.addEventListener('drop', event => {
    event.preventDefault();
});


// To enable color picker and color changes
let singleColor = "#000";
colorPicker.onchange = () => {
    singleColor = colorPicker.value
}

// To enable erasing feature
eraser.addEventListener('click', () => {
    singleColor = "#f5f5f5"
    deselectBtn();
    eraser.classList.add('active-button')
})

// To enable single color feature
singleColorBtn.addEventListener('click', () => {
    singleColor = colorPicker.value
    deselectBtn();
    singleColorBtn.classList.add('active-button')
})

// To enable random color feature 
let randomColor = false;
randomColorBtn.addEventListener('click', () => {
    deselectBtn();
    randomColor = true
    randomColorBtn.classList.add('active-button')
})

// To enable drawing feature
let mouseDown = false

gridContainer.onmousedown = () => (mouseDown = true)
gridContainer.onmouseup = () => (mouseDown = false)

// To remove 'active-button' class from buttons and  to reset random color feature
function deselectBtn() {
    eraser.classList.remove('active-button')
    singleColorBtn.classList.remove('active-button')
    randomColorBtn.classList.remove('active-button')
    randomColor = false;
}

// To enable slider 
let slider = document.getElementById("myRange");
let sliderValue = document.querySelector('.slider-value');
sliderValue.textContent = `${slider.value} x ${slider.value}`;

slider.oninput = () => {
    sliderValue.textContent = `${slider.value} x ${slider.value}`
}
slider.onchange = () => {
    gridContainer.innerHTML = ""
    construct(slider.value)
}

// To enable clear function
clear.addEventListener('click', () => {
    gridContainer.innerHTML = ""
    construct(slider.value)
    singleColor = colorPicker.value
    deselectBtn();
})

// To implement and combine basic features
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
                if (randomColor) {
                    gridItem.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                } else {

                    gridItem.style.backgroundColor = singleColor
                }
            }
        }

    }

}

