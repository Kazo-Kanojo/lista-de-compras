const inputItem = document.getElementById("input-item");

const botaoAdicionar = document.getElementById("adicionar-item")
botaoAdicionar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    if (inputItem.value === ''){
        alert("preencha o campo para adicionar")
    }else{
        console.log(inputItem.value)
    }




    const itemDaLista = document.createElement("li")
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-conteiner")
})

