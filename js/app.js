
const shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("verCarrito")
const modalContainer = document.getElementById("modalContainer")
const productos = [
     
    {
    id:1,
    nombre:"nueces",
    precio: 120,
    cantidad:1,
    img:"https://tse1.mm.bing.net/th?id=OIP.untn8SAydJEzlKTSRLySFQHaEb&pid=Api&P=0&h=180"
},
{
    id:2,
    nombre:"pasas de un va",
    precio: 120,
    cantidad:1,
    img:"https://tse4.mm.bing.net/th?id=OIP.NyjXHOO5gBPhLUWKjkpz4AHaE3&pid=Api&P=0&h=180",
},
{
    id:3,
    nombre:"almendras",
    precio: 120,
    cantidad:1,
    img:"https://tse3.mm.bing.net/th?id=OIP.eunHk_tH70sNfPn_KW1dwQHaE6&pid=Api&P=0&h=180",
},
{
    id:4,
    nombre:"mix frutal",
    precio: 120,
    cantidad:1,
    img:"https://tse3.mm.bing.net/th?id=OIP.kms8ZzEoyZEJHMPkpz56ugHaHC&pid=Api&P=0&h=180",
},
]

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

verCarrito.addEventListener("click", ()=>{
     
    modalContainer.innerHTML = ""
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
    modalButton.style.display = "none"
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
})

const total = carrito.reduce((acc, el)=>acc +  el.precio * el.cantidad, 0)

const totalpro = document.createElement("div");

totalpro.className = "total-content";
totalpro.innerHTML = `
total a pagar: $${total}.
`
modalContainer.append(totalpro)

})
})