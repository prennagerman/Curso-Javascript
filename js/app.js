
const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
const productos = [
     
    {
    id:1,
    nombre:"nueces",
    precio: 120,
    stock:30,
    img:""
},
{
    id:2,
    nombre:"pasas de un va",
    precio: 120,
    stock:30,
    img:"",
},
{
    id:3,
    nombre:"almendras",
    precio: 120,
    stock:30,
    img:"",
},
{
    id:4,
    nombre:"mix frutal",
    precio: 120,
    stock:30,
    img:"",
},
]

let carrito = []


productos.forEach((prod)=>{
    let content = document.createElement("div");

    content.className = "card";
    content.innerHTML = `
    <img src = "${prod.img}">
    <h3> ${prod.nombre}</h3>
    <p class = "price">${prod.precio}</p>
    <p> $${prod.stock}</p>`

    shopContent.append(content)

let comprar = document.createElement("button")

comprar.innerText = "comprar";
comprar.className = "comprar";

content.append(comprar)



comprar.addEventListener("click",()=>{  

carrito.push({

id:prod.id,
img:prod.img,
nombre:prod.nombre,
precio:prod.precio,


})
console.log(carrito)
})
})

verCarrito.addEventListener("click", ()=>{
    const modalHeader = document.createElement("h1");

    modalHeader.className = "modal-header";
    modalHeader.innerHTML= `
    <h1 class = "modal-header-title">carrito</h1>`

modalContainer.append(modalHeader)


const modalButton = document.createElement ("h1")

modalButton.innerText = "x";
modalButton.className = `
modal-button-header`

modalHeader.append(modalButton)

carrito.forEach((prod)=>{

    const modalContent = document.createElement("div");

    modalContent.className = "modal-header-content";
    modalContent.innerHTML = `
    <img src = "${prod.img}">
    <h3> ${prod.nombre}</h3>
    <p class = "price">${prod.precio}</p>
    <p> $${prod.stock}</p>`

    modalContainer.append(modalContent)
})

})