

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem ("carrito")) || [];

// creamos una funcion asny
const getproducos = async()=>{


const response = await fetch ("data.json")
const data = await response.json()



data.forEach((prod) => {
  let content = document.createElement("div");

  content.className = "card";
  content.innerHTML = `
    <img src = "${prod.img}">
    <h3> ${prod.nombre}</h3>
    <p class = "price">$${prod.precio}</p>
    <p>cantidad: ${prod.cantidad}</p>`;

  shopContent.append(content);

  let comprar = document.createElement("button");

  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () => {
    const repetir = carrito.some(
      (repetirProduc) => repetirProduc.id === prod.id
    );

    if (repetir) {
      carrito.map((produc) => {
        if (produc.id === prod.id) {
          produc.cantidad++;
        }
      });
    } else {
      carrito.push({
        id: prod.id,
        img: prod.img,
        nombre: prod.nombre,
        precio: prod.precio,
        cantidad: prod.cantidad,
      });
      console.log(carrito);
      console.log(carrito.length);
      carritoCounter();
      saveLocal()
    }
  });
});

}
getproducos()

const saveLocal = ()=>{ 

localStorage.setItem("carrito", JSON.stringify (carrito))


}
