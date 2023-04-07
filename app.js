const board = document.querySelector('#board')
const colors = ['#f6433f', '#1ba90b', '#8813f3', '#d3ee14', '#02bcc9']
const SQUARES_NUMBER = 900

for (let i = 0; i < SQUARES_NUMBER; i++) {
    //динамически создаем html элемент
    const square = document.createElement('div')
    //чтоб квадрат был квадратом - добывляем класс
    square.classList.add('square')
    //слушатель события для каждого квадратика, mouseover - вызывается когда мы наводим мышь на квадрат
    square.addEventListener('mouseover', setColor)
    //слушатель события для каждого квадратика, mouseleave - вызывается когда мы отводим мышь от квадрата
    //конструкция замыкание
    square.addEventListener('mouseleave', () => removeColor(square))

    //добавляем элемент в html
    board.append(square)
}

    function setColor(event) {
        const element = event.target
        const color = getRandomColor() 
        element.style.backgroundColor = color
        element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

    }
    //для конструкции конструкции замыкание (без event.target)
    function removeColor(element) {
        element.style.backgroundColor = '#1d1d1d'
        element.style.boxShadow = `0 0 2px #000`
    }
    //получаем случайное число из массива colors
    function getRandomColor() { 
        return colors[Math.floor(Math.random() * colors.length)]
    }