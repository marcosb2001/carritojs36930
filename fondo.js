//fondo del body

const btns = document.getElementsByClassName('fondo')

let fondoFirst = localStorage.getItem('fondoColor') || 'white'

document.body.style.backgroundColor = fondoFirst

for (const fondo of btns) {
    fondo.addEventListener('click', e => {
        let color = (e.target.innerHTML).toLowerCase()
        document.body.style.backgroundColor = color

        localStorage.setItem('fondoColor', color)
    })
}

//fondo de ventanas

const wBtns = document.getElementsByClassName('wFondo')

let wFondoFirst = localStorage.getItem('wFondoColor') || 'khaki'
const div = document.getElementsByClassName('window')[0]
const div2 = document.getElementsByClassName('window')[1]

div.style.backgroundColor = wFondoFirst
div2.style.backgroundColor = wFondoFirst


for (const wFondo of wBtns) {
    wFondo.addEventListener('click', e => {
        let color = (e.target.innerHTML).toLowerCase()
        div.style.backgroundColor = color
        div2.style.backgroundColor = color

        localStorage.setItem('wFondoColor', color)
    })
}