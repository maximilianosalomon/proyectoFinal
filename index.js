//Mi clase "articulos" para luego instanciar objetos de esta clase

class Articulos{ 
    constructor (denominacion, marca, precio){
        this.denominacion =  denominacion;
        this.marca =marca;
        this.precio = parseInt (precio);

    }
    // metodo para calcular el precio con iva
    precioTotal() {
        return this.precio*1.21 ;

    }
}

const productos = [];

//Cargo mi array con push
productos.push(

    new Articulos('inodoro corto', 'ferrum', 8000),
    new Articulos('inodoro largo', 'ferrum', 8500),
    new Articulos('inodoro corto', 'capea',  7800),
    new Articulos('inodoro largo', 'capea', 8300),
    new Articulos('deposito de apoyo', 'ferrum', 8500),
    new Articulos('deposito de apoyo', 'capea', 8000),
    new Articulos('bide', 'ferrum', 8000),
    new Articulos('bide', 'capea', 8000),
    new Articulos('lavatorio+pie', 'ferrum', 10000),
    new Articulos('lavatorio+pie', 'capea', 9000)
    
)
    

console.log(productos);

//creo la variable para capturar el click
let btn = document.getElementById("btn");
const btnLimpiar = document.getElementById("btnLimpiar");


let busqueda = document.getElementById("buscado");

console.log(busqueda);

//capturo el click
btn.addEventListener("click", buscar);


// traigo el contenedor del html
const contenedorLista = document.getElementById('listaProd');

//Funcion para buscar con el boton
function buscar (){
    console.log("clickeaste el boton");

    let valor = busqueda.value;
    if (valor.length == 0){
        alert('campo vacío');


    }else{
        let serch = productos.filter(producto => producto.denominacion.includes(valor))
        console.log(serch);

        //creo el elemento
        let contenedorResultados = document.createElement("div");
        let listaResultados = document.createElement('ul');

        //selecciono el elemento padre
        contenedorResultados.appendChild(listaResultados);
        contenedorLista.appendChild(contenedorResultados);
        for(let producto of serch){
            let resultado = document.createElement('li');
            resultado.innerText = `${producto.denominacion} ${producto.marca} ${producto.precio}`
            listaResultados.appendChild(resultado);
            // alert(`${producto.denominacion} ${producto.marca} ${producto.precio}`);
        }


    return serch;
    }
    }

    
    // let ul = document.createElement('p');
    // ul.innerText = ` - ${serch.denominacion} ${serch.marca} ${serch.precio}`;
    // lista.appendChild(ul);

const lista = document.getElementById('lista');

//Funcion para mostrar la lista recorriendo mi array    
const mostrarLista = () => {
    for (let producto of productos){    
        let ul = document.createElement('li');
        ul.innerText = `${producto.denominacion} ${producto.marca} ${producto.precio}`;
        lista.appendChild(ul);
    }
}

mostrarLista();


