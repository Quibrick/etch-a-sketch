//function that creates the grid inside the container
function gridMaker(gridSize)
{   
    const container = document.getElementById('container');
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr)`; 

    let totalBoxes = gridSize**2;
    let boxIdCounter = 0;  //for each box create a unique ID.
    
    for (let i = 0; i < totalBoxes; i++)
    {
        boxIdCounter++;
        const box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('id',String(boxIdCounter));
        container.appendChild(box);
    }

    let isDrawing = false;  //used to determine mousedown-up-move events
    
    const box = document.querySelectorAll('.box');
    box.forEach(div =>{
        div.addEventListener('mousedown',() =>{
            paint(div,color);
            isDrawing = true;
        });
    });

    box.forEach(div =>{
        div.addEventListener('mousemove',() =>{
            if (isDrawing === true)
            {
                paint(div,color);
            }
        });
    });

    box.forEach(div =>{
        div.addEventListener('mouseup',() =>{
            if (isDrawing === true)
            {
                paint(div,color);
                isDrawing = false;
            }
        });
    });
}

//change background color of selected div element
function paint(box,color)
{   
  box.style.background = color;
}

//showcase the slider value to the user
function showSliderValue(x)
{
    document.getElementById('slider-value').innerHTML=x;
}

// default 16x16 grid on page load
let sizeOfGrid = 16;
gridMaker(sizeOfGrid);

// global event listeners

//resets the board and window logs a confirmation box
const resetButton = document.getElementById('reset-btn');
resetButton.addEventListener('click',() =>{
    let answer = window.confirm('Are you sure you want to reset the board?')
    if (answer)
    {    
        gridMaker(sizeOfGrid);
    }
    else
    {
        return;
    }
});


const gridValue = document.getElementById('slider');
const setButton = document.getElementById('set-btn');
setButton.addEventListener('click',() =>{
    let sizeOfGrid = gridValue.value;
    gridMaker(sizeOfGrid);
});

const colorPicker = document.getElementById('color-picker');
let color = colorPicker.value;
colorPicker.addEventListener('change',() =>{
    color = colorPicker.value;
});

