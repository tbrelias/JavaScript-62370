let productos = [
    {
        id: '001',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Blue Label",
        region: "Escocia",
        stock: 13,
        precio: 58500  
    },

    {
        id: '002',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Gold Label",
        region: "Escocia",
        stock: 22,
        precio: 14000  
    },

    {
        id: '003',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Black Label",
        region: "Escocia",
        stock: 18,
        precio: 10000  
    },

    {
        id: '004',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Jonhnnie Walker Red Label",
        region: "Escocia",
        stock: 15,
        precio: 5000 
    },

    {
        id: '005',
        marca: "Jack Daniels",
        nombre: "Whisky Jack Daniels Old",
        region: "Estados Unidos",
        stock: 20,
        precio: 12000  
    },

    {
        id: '006',
        marca: "Jack Daniels",
        nombre: "Whisky Jack Daniels Tennessee Honey",
        region: "Estados Unidos",
        stock: 15,
        precio: 12000   
    },
]

let contenedorProductos = document.getElementById("contenedorProductos")
let carrito = document.getElementById("carrito")
let arrayCarrito = []

if (localStorage.getItem("carrito")) {
    arrayCarrito = JSON.parse(localStorage.getItem("carrito"))
}

renderizarProductos(productos)

function renderizarProductos(arrayProductos) {
    contenedorProductos.innerHTML = ' '
    for (const producto of arrayProductos) {
        let tarjetaProducto = document.createElement("div")

        if (producto.stock < 5 ) {
            tarjetaProducto.className ="productosSinStock"
        } else {
            tarjetaProducto.className = "producto"
        }

        tarjetaProducto.id = producto.id

        tarjetaProducto.innerHTML = ` 
            <h3 class = "nombreProducto">${producto.nombre}</h3>
            <h4> $${producto.precio}</h4>
            <button class="botonProducto" id=${producto.id}>Agregar al carrito</button>
        `

        contenedorProductos.append(tarjetaProducto)

        let botones = document.getElementsByClassName("botonProducto")
        for (const boton of botones) {
            boton.addEventListener("click", agregarAlCarrito)
        }
    }
}

let input = document.getElementById ("input")
input.addEventListener("input", fnInput)

function fnInput (event) {
    console.log(event)
    let productosFiltrados = productos.filter (producto => producto.nombre.includes (input.value))
    renderizarProductos (productosFiltrados)
}

function agregarAlCarrito(e) {
    let productoBuscado = productos.find(producto => producto.id == e.target.id)
    let posicionProducto = arrayCarrito.findIndex(producto => producto.id == e.target.id)
    if (posicionProducto != -1) {
        arrayCarrito[posicionProducto] = {
            id: arrayCarrito[posicionProducto].id, nombre: arrayCarrito[posicionProducto].nombre, precio:arrayCarrito[posicionProducto].precio, unidades: arrayCarrito[posicionProducto].unidades + 1, subtotal: arrayCarrito[posicionProducto].precio * (arrayCarrito[posicionProducto].unidades + 1)
        }
    } else {
        arrayCarrito.push({
            id:productoBuscado.id, nombre:productoBuscado.nombre, precio: productoBuscado.precio, unidades: 1, subtotal: productoBuscado.precio
        })
    }

    let carritoJSON = JSON.stringify(arrayCarrito)
    localStorage.setItem("carrito", carritoJSON)

    renderizarCarrito()
    function renderizarCarrito() {
        carrito.innerHTML = ""
        for (const itemCarrito of arrayCarrito) {
            carrito.innerHTML += `
                <div class="itemCarrito">
                    <h4>${itemCarrito.nombre}</h4>
                    <h4>${itemCarrito.unidades}</h4>
                    <h4>${itemCarrito.subtotal}</h4>
                </div>
            `
        }
    }
}