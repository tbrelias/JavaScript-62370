const Productos = [
    {
        id: '001',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Blue Label",
        region: "Escocia",
        stock: 13,
        precio: 58500  
    },

    {
        id: '002',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Gold Label",
        region: "Escocia",
        stock: 22,
        precio: 14000  
    },

    {
        id: '003',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Black Label",
        region: "Escocia",
        stock: 18,
        precio: 10000  
    },

    {
        id: '004',
        marca: "Jonhnnie Walker",
        nombre: "Whisky Red Label",
        region: "Escocia",
        stock: 15,
        precio: 5000 
    },
]

let Carrito = []

function DatosDelUsuario(){

    alert ("Bienvenidos a Bebradas")

    let Nombre = prompt ("Ingrese su Nombre");
    console.log ("Su Nombre es:" + " " +Nombre)

    let Apellido = prompt ("Ingrese su Apellido")
    console.log ("Su Apellido es:" + " " +Apellido)

    let DocumentoId = prompt ("Ingrese su numero de Documento")
    console.log ("Su Numero de Documento es:" + " " +DocumentoId)

    alert ("¡ Bienvenido a Bebradas" + " " + Nombre + "!")
}

DatosDelUsuario()

function EleccionDeProductos(){
    let Seleccion = prompt('¡ Hola! ¿ desea comprar algun producto ? Si/No')
    while(Seleccion != "si" && Seleccion != "no"){
        alert('Por favor ingresa si o no')
        Seleccion = prompt('¡ Hola! ¿ desea comprar algun producto ? Si/No')
    }

    if (Seleccion == 'si'){
        alert('A continuacion nuestra lista de pruductos')
        let TodosLosProductos = Productos.map(
            (Producto) => Producto.nombre + '' + Producto.precio + '$'
        );
        alert(TodosLosProductos.join(' / '))
    } else if ( Seleccion == 'no'){
        alert('¡Gracias por venir, Hasta pronto!')
    }

    while(Seleccion != 'no'){
        let Producto = prompt('Agrega un producto a tu carrito')
        let Precio = 0

        if(Producto == 'Whisky Blue Label' || Producto == 'Whisky Gold Label' || Producto == 'Whisky Black Label' || Producto == 'Whisky Red Label' ){
            switch (Producto) {
                case 'Whisky Blue Label':
                    Precio = 58500;
                    break;
                case 'Whisky Blue Label':
                    Precio = 14000;
                    break;
                case 'Whisky Blue Label':
                    Precio = 10000;
                    break;
                case 'Whisky Blue Label':
                    Precio = 5000;
                    break;
                default:
                    break;
            }
        let Unidades = parseInt(prompt('¿ Cuantas Unidades desea ?'))

        Carrito.push({Producto, Unidades, Precio})
        console.log(Carrito)
        } else {
            alert('No tenemos disponible ese producto')
        }

        Seleccion = prompt('¿Desea seguir comprando ?')

        while(Seleccion === 'no'){
            alert('¡ Gracias por la compra, Hasta pronto!')
            Carrito.forEach((CarritoFinal) => {
                console.log(`Producto: ${CarritoFinal.Producto}, Unidades: ${CarritoFinal.Unidades}, total a pagar por producto ${CarritoFinal.Unidades * CarritoFinal.Precio}`)
            })
        break; 
        }
    }
}

EleccionDeProductos()

const Total = Carrito.reduce((acc, el) => acc + el.Precio * el.Unidades, 0)
alert(`El total a pagar por su compra es: ${Total}`)