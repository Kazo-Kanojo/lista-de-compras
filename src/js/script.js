const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras")
const botaoAdicionar = document.getElementById("adicionar-item")
let contador = 0;

botaoAdicionar.addEventListener("click", (evento)=>{
    evento.preventDefault();
    if (inputItem.value === ''){
        alert("preencha o campo para adicionar")
        return
    }

    const itemDaLista = document.createElement("li")
    const containerItemDaLista = document.createElement("div")
    containerItemDaLista.classList.add("lista-item-container")
    const inputCheckBox = document.createElement("input")
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    const nomeItem = document.createElement("p");
    nomeItem.innerHTML = inputItem.value;

    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);
    listaDeCompras.appendChild(itemDaLista);

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const data = new Date().toLocaleDateString("pt-BR")
    const hora = new Date().toLocaleTimeString("pt-BR",{
        hour: "numeric",
        minute: "numeric"
    });
    
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`
    
    const dataLista = document.createElement("p")
    dataLista.classList = "texto-data"
    dataLista.innerHTML = dataCompleta
    itemDaLista.appendChild(dataLista)
    
})


