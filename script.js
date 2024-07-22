const root = document.querySelector('#root');

const container = document.createElement('div');
container.classList.add("container");

const sizeBtn = document.createElement('button');
sizeBtn.classList.add('Btn');
sizeBtn.textContent = 'Количество?'

const modeBtn = document.createElement('button');
modeBtn.classList.add('Btn');
modeBtn.textContent = 'Мод'


root.append(sizeBtn, modeBtn, container);

let modeFlag  = 'rgb'

function getRgbNum() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor () {
    return `rgb(${getRgbNum()}, ${getRgbNum()}, ${getRgbNum()})`;
}

function addCells(num) {
    container.textContent = ''
    container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

    for(let i = 0; i < num * num; i++) {
        const cell = document.createElement('div');

        cell.style.border = '1px solid';

        let opacity = 0;

        cell.addEventListener('mouseenter', () => {
            if(modeFlag === 'rgb') {
                cell.style.backgroundColor = getRandomColor()
                cell.style.border = '1px solid #000000';
                cell.style.opacity = 1;
            } else {
                if(opacity < 9 ) {
                    opacity++
                } else {
                    opacity = 1;
                }

                cell.style.backgroundColor = '#000000';
                cell.style.border = '1px solid #ffffff';
                cell.style.opacity = '0.' + opacity
            }
        });


        container.append(cell);
    }
}

sizeBtn.addEventListener('click', () => {
    const size = prompt('Введите количество клеток')

    if(isNaN(size)) {
        alert('числа знаешь? Ну так вводи их!')
    }

    if(size > 100) {
        alert('Твоя ведро столько не потянет...')
        return
    }

    addCells(+size)
})

modeBtn.addEventListener('click', () =>{
    if (modeFlag === 'rgb') {
        modeFlag = 'apacity'
    } else {
        modeFlag = 'rgb'
    }
})
 