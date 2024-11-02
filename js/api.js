let characters = document.querySelector("#characters")


fetch("https://rickandmortyapi.com/api/character")
.then((resp)=>resp.json())
.then((data)=>{
    console.log(data.results)

    
  

    })