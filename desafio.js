//definir funciones

function suma(...precios) {
    console.log(precios, precios.length)
    return precios.reduce((total, n)=> total + n, 0)
}
const resta = (a, b) => a - b
const impuesto1 = x => x * 0.11
const impuesto2 = x => x * 0.16
const shipping = x => x * 0.20

//inicio del algoritmo
//definir arrays y plantilla de objeto

const Carrito = []
const Precios = []

function Item(nombre, precio, info) {
    this.nombre = nombre
    this.precio = precio
    this.info = nombre + ', precio: $' + precio
}

//definir función para añadir elementos HTML


// función que se activa al apretar el botón "añadir productos"

function Compra() {
    
    //preguntar y recopilar nombres y precios de objetos

    while(respuestaClick){
    const nombre = prompt('ingrese el nombre del producto')
    const precio = parseInt(prompt('ingrese su precio'))
    const info = nombre + ', precio: $' + precio

    const producto = new Item(nombre, precio, info)
    
    Carrito.push(producto.info)

    function NuevoProducto() {
        const nuevoP = document.createElement('p')
        const nuevoTxt = document.createTextNode('Se ha añadido un nuevo producto (' + producto.info + '). ')
        const nuevoTxt2 = document.createTextNode('Hay ' + Carrito.length + ' productos en el carrito.')
        nuevoP.appendChild(nuevoTxt)
        nuevoP.appendChild(nuevoTxt2)
        document.body.appendChild(nuevoP)
    }

    if(prompt('va a comprar más productos?') == 'no') {
        console.log('no se han agregado más items en el carrito')
        console.log('hay ' + Carrito.length + ' items en el carrito.')
        Precios.push(producto.precio)
        NuevoProducto()
        break
    }

    Precios.push(producto.precio)

    console.log('se ha agregado un nuevo producto.')
    NuevoProducto()
    console.log('hay ' + Carrito.length + ' items en el carrito.')
    //let PrecioTotalInicial = producto.precio + PrecioProducto
    //console.log(PrecioTotalInicial)
    }
}

let boton = document.getElementById('buy')
boton.addEventListener('click', respuestaClick)
function respuestaClick() {
    Compra()
}

// función que se activa al apretar el botón "confirmar compras"

function confirm() {

    //sumar todos los precios para un precio final pre-descuentos

    const sumarPrecios = Precios.reduce((acumulador, elemento)=> acumulador + elemento, 0)

    console.log('el precio total de los productos sin impuestos o descuentos es: $' + sumarPrecios)


    //preguntar y calcular impuestos y descuentos

    let edad = parseInt(prompt('introduzca su edad'))
    let descuento = 0
    let impuestoSeleccion = parseInt(prompt('seleccione el tipo de impuesto (1 o 2)'))

    // se calcula el impuesto basado en la selección

    if (impuestoSeleccion == 1) {
        impuestoCalculo = impuesto1(sumarPrecios)
        console.log ('se aplica el impuesto tipo 1')
    } else if (impuestoSeleccion == 2) {
        impuestoCalculo = impuesto2(sumarPrecios)
        console.log ('se aplica el impuesto tipo 2')
    } else { // en caso de que no se introduzca 1 o 2
        console.log('no se ha definido un impuesto válido, no se aplicará un impuesto')
    }

    // calculo de costo de envío
    const shippingCalculo = shipping(sumarPrecios)

    // check de descuento para menores

    if (edad <= 18) {
        console.log('tiene acceso a descuento para menores')
        descuento = sumarPrecios * 0.20
    } else if (edad >= 60) { // check de descuento para jubilados
        console.log('tiene acceso a descuento para jubilados')
        descuento = sumarPrecios * 0.20
    } else {
        console.log('no tiene acceso a descuentos')
    }

    // calculo precio final

    let precioFinal = resta(suma(sumarPrecios, impuestoCalculo, shippingCalculo), descuento)


    //mostrar carrito y precio final

    function CarritoFinal() {
        const nuevoH3 = document.createElement('h3')
        const nuevoTxt = document.createTextNode('Carrito:')
        nuevoH3.appendChild(nuevoTxt)
        document.body.appendChild(nuevoH3)
        console.log('creado titulo')

        const listaNuevoDiv = document.createElement('div')
        const listaElementos = document.createElement('ul')
        let ListaLength = Carrito.length;

        document.getElementsByTagName('body')[0].appendChild(listaNuevoDiv)
        listaNuevoDiv.appendChild(listaElementos)

        for(i = 0; i < ListaLength; ++i) {
            listaItem = document.createElement('li')
            listaItem.innerHTML = Carrito[i];

        
            listaElementos.appendChild(listaItem);
        }

        const nuevoPcarrito = document.createElement('p')
        const nuevoTxt2 = document.createTextNode('el costo de envío es: $' + parseInt(shippingCalculo) + 'el precio total contando impuestos y descuentos es: $' + parseInt(precioFinal))
        nuevoPcarrito.appendChild(nuevoTxt2)
        document.body.appendChild(nuevoPcarrito)

}


CarritoFinal()
console.log(`usted tiene en su carrito: \n` + Carrito.join(`\n`))
console.log('el costo de envío es: $' + parseInt(shippingCalculo))
console.log(', el precio total contando impuestos y descuentos es: $' + parseInt(precioFinal))

}

let boton2 = document.getElementById('confirmar')
boton2.addEventListener('click', respuestaClick2)
function respuestaClick2() {
    confirm()
}
