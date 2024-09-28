
const productos = [

  { id: 1, nombre: "nueces", precio: 500 },

  { id: 2, nombre: "almendras", precio: 100 },

  { id: 3, nombre: "pasas de uva", precio: 200 },

  { id: 4, nombre: "mixfrutal", precio: 400 },

  { id: 5, nombre: "mani", precio: 200 },

];

let carrito = [];

let seleccion = prompt("hola desea comprar algun productos si o no");

//armado de bucles

while (seleccion != "si" && seleccion != "no") {

  alert("por favor ingrese si o no");

  seleccion = prompt("hola desea comprar algo si o no");

}

//recorrer el array

if (seleccion == "si") {

  alert("a continuacion nuestra lista de productos");

  let todoslosProductos = productos.map(

    (producto) => producto.nombre + " " + producto.precio + "$"

  );

  alert(todoslosProductos.join(" - "));

} else if (seleccion == "no") {

  alert("gracias por venir, hasta pronto!!");

}

while (seleccion != "no") {

  let producto = prompt("agregar un producto a tu carrito");

  let precio = 0;

  let optenerPrecio;



  switch (producto) {

    case "nueces":

      optenerPrecio = productos.find((el) => el.nombre === producto);

      precio = optenerPrecio.precio;

      break;

    case "almendras":

      optenerPrecio = productos.find((el) => el.nombre === producto);

      precio = optenerPrecio.precio;

      break;

    case "pasas de uva":

      optenerPrecio = productos.find((el) => el.nombre === producto);

      precio = optenerPrecio.precio;

      break;

    case "mixfrutal":

      optenerPrecio = productos.find((el) => el.nombre === producto);

      precio = optenerPrecio.precio;

      break;

    case "mani":

      optenerPrecio = productos.find((el) => el.nombre === producto);

      precio = optenerPrecio.precio;

      break;

    default:

      alert("no tenemos ese producto");

      break;

  }




  let unidades = parseInt(prompt("cuantas unidades va a llevar"));




  carrito.push({ producto, unidades, precio });

  console.log(carrito);




  seleccion = prompt("desea seguir comprando?");




  while (seleccion === "no") {

    alert("gracias por la compra!!");

    carrito.forEach((carritoFinal) => {

      console.log(

        "producto: ",

        carritoFinal.producto,

        "unidades: ",

        carritoFinal.unidades,

        "total a pagar por producto $",

        carritoFinal.unidades * carritoFinal.precio

      );

    });

    break;

  }

}


// acumulador

function procesarCarrito(carrito) {
  // Calcular el total de la compra
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  
  // Mostrar el total en una alerta y en la consola
  alert(`El total a pagar por su compra es: ${total}`);
  console.log('El total a pagar por su compra es: ${total}');
  
  // Filtrar los productos con precio mayor a 400
  const mayorCosto = carrito.filter((el) => el.precio > 400);
  
  // Verificar si hay productos que cumplen la condición y mostrar el precio del primero en la consola
  if (mayorCosto.length > 0) {
    console.log(`El valor mayor de precios de producto comprado es: ${mayorCosto[0].precio}`);
  } else {
    console.log('No hay productos con precio mayor a 400.');
  }
}



  
 



