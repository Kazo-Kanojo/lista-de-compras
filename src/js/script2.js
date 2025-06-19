const botaoSalvar = document.getElementById("button")
const textoInput = document.getElementById("input-texto")
const listaDeCompras = document.querySelector("div")
const removerItes = document.getElementById("remover")
let contador = 0;

botaoSalvar.addEventListener("click", (salvar)=>{
    salvar.preventDefault()
    if(textoInput.value === ""){
        alert("digite algo antes de enviar")
        return
    }
    console.log(textoInput.value)
    
    const nomeItem = document.createElement("p")
    nomeItem.innerHTML = textoInput.value
    const lista = document.createElement("li")
    
    lista.appendChild(nomeItem)
    listaDeCompras.appendChild(lista)
})
