
const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")


let carrito = []


productos.forEach((prod)=>{
    let content = document.createElement("div");

    content.className = "card";
    content.innerHTML = `
    <img src = "${prod.img}">
    <h3> ${prod.nombre}</h3>
    <p class = "price">$${prod.precio}</p>
    <p>cantidad: ${prod.cantidad}</p>`

    shopContent.append(content)

let comprar = document.createElement("button")

comprar.innerText = "comprar";
comprar.className = "comprar";

content.append(comprar)



comprar.addEventListener("click",()=>{  

    const repetir = carrito.some((repetirProduc)=> repetirProduc.id === prod.id);

    if(repetir){
        carrito.map((produc)=>{
            if(produc.id===prod.id++){
                produc.cantidad++
            }
        })
    }else{ 
    


carrito.push({

id:prod.id,
img:prod.img,
nombre:prod.nombre,
precio:prod.precio,
cantidad:prod.cantidad,


})
console.log(carrito)
}
})
})
const cubrircarrito=()=>{
     
    modalContainer.innerHTML = ""
    modalContainer.style.display = "flex"
    const modalHeader = document.createElement("h1");

    modalHeader.className = "modal-header";
    modalHeader.innerHTML= `
    <h1 class = "modal-header-title">carrito</h1>`

modalContainer.append(modalHeader)


const modalButton = document.createElement ("h1")

modalButton.innerText = "x";
modalButton.className = `
modal-button-header`


modalButton.addEventListener("click",()=>{
    modalContainer.style.display = "none"
    
})
modalHeader.append(modalButton)

carrito.forEach((prod)=>{

    const modalContent = document.createElement("div");

    modalContent.className = "modal-header-content";
    modalContent.innerHTML = `
    <img src = "${prod.img}">
    <h3> ${prod.nombre}</h3>
    <p class = "price"> $${prod.precio}</p>
    <p> ${prod.cantidad}</p>`

    modalContainer.append(modalContent)


    let eliminar = document.createElement("span");

    eliminar.innerText = "x"
    eliminar.className = "eliminar-producto"

    modalContent.append(eliminar)

    eliminar.addEventListener("click", eliminarProducto)
})

const total = carrito.reduce((acc, el)=>acc +  el.precio * el.cantidad, 0)

const totalpro = document.createElement("div");

totalpro.className = "total-content";
totalpro.innerHTML = `
total a pagar: $${total}.
`
modalContainer.append(totalpro)

}

 verCarrito.addEventListener("click", cubrircarrito)

 const eliminarProducto =()=>{
    const encontrarId = carrito.find((element)=> element.id)

    carrito= carrito.filter((carritoId)=>{
        return carritoId !== encontrarId
    })

    cubrircarrito()
 }

