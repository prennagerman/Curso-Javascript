

const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");
const cantidadCarrito = document.getElementById("cantidadCarrito");

let carrito = JSON.parse(localStorage.getItem ("carrito")) || [];

productos.forEach((prod) => {
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

const saveLocal = ()=>{ 

localStorage.setItem("carrito", JSON.stringify (carrito))


}
const cubrirCarrito = () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("h1");

  modalHeader.className = "modal-header";
  modalHeader.innerHTML = `
    <h1 class = "modal-header-title">🇦🇷</h1>`;

  modalContainer.append(modalHeader);

  const modalButton = document.createElement("h1");

  modalButton.innerText = "❌";
  modalButton.className = `
modal-header-button`;

  modalHeader.append(modalButton);
  modalButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  });

  carrito.forEach((prod) => {
    const modalContent = document.createElement("div");

    modalContent.className = "modal-header-content";
    modalContent.innerHTML = `
    <img src = "${prod.img}">
    <h3> ${prod.nombre}</h3>
    <p class = "price"> $${prod.precio}</p>
    <span class = "restar"> - </span>
    <p> ${prod.cantidad}</p>
    <span class = "sumar"> + </span>`;

    modalContainer.append(modalContent);

    let restar = modalContent.querySelector(".restar");

    restar.addEventListener("click", () => {
      if (prod.cantidad !== 1) {
        prod.cantidad--;
      }
      cubrirCarrito();
    });

    //CONTADOR DE PRODUCTOS, PRECIO CANTIDADES

    let sumar = modalContent.querySelector(".sumar");
    sumar.addEventListener("click", () => {
      prod.cantidad++;
      cubrirCarrito();
    });

    let eliminar = document.createElement("span");

    eliminar.innerText = "x";
    eliminar.className = "eliminar-producto";

    modalContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

  const totalpro = document.createElement("div");

  totalpro.className = "total-content";
  totalpro.innerHTML = `
total a pagar: $${total}.
`;
  modalContainer.append(totalpro);

  //BOTON PARA FINALIZAR COMPRA

  /*const finalizarCompra = document.createElement("button");

finalizarCompra.className = "finalizar-compras"
finalizarCompra.innerText ="finalizar compras"


modalContainer.append(finalizarCompra)*/
  const vaciarCarrito = document.createElement("button");
  vaciarCarrito.className = "Vaciar";
  vaciarCarrito.innerText = "Vaciar";

  shopContent.append(vaciarCarrito);

  vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    shopContent.innerHTML = "";
    carritoCounter();
  });
};

/*finalizarCompra.addEventListener("click",()=>{
  modalContainer.innerHTML = ""
  carrito = []
  carritoCounter()
})*/

verCarrito.addEventListener("click", cubrirCarrito);

const eliminarProducto = () => {
  const encontrarId = carrito.find((element) => element.id);

  carrito = carrito.filter((carritoId) => {
    return carritoId !== encontrarId;
  });
  carritoCounter();
  cubrirCarrito();
};
const carritoCounter = () => {
  cantidadCarrito.style.display = "block";

  const  carritoLength = carrito.length;
  localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

  cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"))
};
carritoCounter()