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
    let finalizarComprar = document.createElement("button");

    finalizarComprar.className = "Finalizar-Compra";
    finalizarComprar.innerText = "Finalizar Compra";
  
    modalContainer.append(finalizarComprar);
    const vaciarCarrito = document.createElement("button");
  
    vaciarCarrito.className = "Vaciar";
    vaciarCarrito.innerText = "Vaciar";
  
    modalContainer.append(vaciarCarrito)
    vaciarCarrito.addEventListener("click", () => {
      carrito = [];
      modalContainer.innerHTML=""
      carritoCounter()
      Swal.fire({
  
        title: "EL carrito esta vacio!!",
  
      });;
      modalContainer.append(vaciarCarrito)
    })
  
    finalizarComprar.addEventListener("click", () => {
      modalContainer.innerHTML= ""
      carrito = []
      carritoCounter()
      Swal.fire({
  
        title: "Gracias por su compra!!",
        text: "Esperamos por otra vuelta!!",
        footer: '<a href="#">Market grmannnn!!</a>'
      });;
  
    });
  };
   
   
  
 
  
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