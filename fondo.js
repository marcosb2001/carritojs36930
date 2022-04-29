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

//fondo de ventana 1

const wBtns = document.getElementsByClassName('wFondo')

let wFondoFirst = localStorage.getItem('wColor') || 'khaki'
const div = document.getElementById('window')

div.backgroundColor = wFondoFirst

for (const wFondo of wBtns) {
    wFondo.addEventListener('click', e => {
        let wColor = (e.target.innerHTML).toLowerCase()
        div.style.backgroundColor = wColor

        localStorage.setItem('wFondo', wColor)
    })
}