let sendBtn = document.getElementById("send");
let resetBtn = document.getElementById("reset");
let form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
  
})

resetBtn.addEventListener("click", (e) => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let direccion = document.getElementById("direccion");

    // Set Value
    name.value = ''
    email.value = ''
    direccion.value = ''

})

sendBtn.addEventListener("click", (e) => {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let direccion = document.getElementById("direccion");

    name = name.value;

    localStorage.setItem('name', name);


    email = email.value;
    localStorage.setItem('email', email);


    direccion = direccion.value
    localStorage.setItem('direccion', direccion);
})