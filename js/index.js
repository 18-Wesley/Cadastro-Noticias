const btnMenu = document.querySelector('.btnPesquisa')

async function fetchApi (){

    await fetch('http://servicodados.ibge.gov.br/api/v3/noticias/')
    .then(Response => Response.json())
    .then(api =>{

        let arrayNoticiasIbge = [api.items]
        let objDoArrayIbge = arrayNoticiasIbge[0]
        const array2 = []

        for(let i = 0; i <= 10; i++ ){
            let indice = objDoArrayIbge[i]
            //apagar( indice,undefined, undefined,)
            array2.push(indice)
            localStorage.setItem('principal', JSON.stringify(array2))
            criarElementoCard(indice)
        }

    })

}

document.body.onload = function (){

    fetchApi()
    exibirNoticias()

}

function exibirNoticias(){

    var dados = JSON.parse(localStorage.getItem('noticias'))

    if(dados !== null){
        carregarNoticias(dados)
    }else{
        carregarNoticias(dados)
    }
    
}

const carregarNoticias = (dados)=>{
    if(Array.isArray(dados)){

        dados.forEach(function(item){
            criarElementoCard(item)
        })
    }

}

const criarElemento = (tag, className)=> {
    const elemento = document.createElement(tag)
    elemento.className = className
    return elemento
}

const criarElementoCard = (elementoArray) =>{

    let parse = elementoArray.id

    const cards = criarElemento('div', `card ${parse}`)

    cards.setAttribute("id", `${parse}`)

    const apagar = criarElemento('div', 'excluir')

    const btnApagar =criarElemento('button', 'btnApagar')

    btnApagar.setAttribute("type", "button")

    const img = criarElemento('img', 'img')

    img.src = "lixeira.png"

    btnApagar.setAttribute("onclick", `apagar(${parse})`) 

    const titulo = criarElemento('div', 'titulo')

    const h2 = criarElemento('h2', '')

    const noticia = criarElemento('div', 'noticia')

    const p = criarElemento('p', '')

    const btnDiv = criarElemento('div', 'acessar_btn')

    const btn = criarElemento('button', 'btn')

    const gridEl = document.querySelector('.grid')

    gridEl.appendChild(cards)
    cards.appendChild(apagar)
    apagar.appendChild(btnApagar)
    btnApagar.appendChild(img)
    cards.appendChild(titulo)
    titulo.appendChild(h2)
    cards.appendChild(noticia)
    noticia.appendChild(p)
    cards.appendChild(btnDiv)
    btnDiv.appendChild(btn)
    btn.setAttribute('type','button')
    btn.appendChild(document.createTextNode('Acessar'))

    p.innerText = elementoArray.introducao
    h2.innerText = elementoArray.titulo
}

const abrirMenu = (event) => {
    event.preventDefault()

    const menuNav = document.querySelector('.navHamburguer')
    menuNav.classList.toggle('ativar')
}

btnMenu.addEventListener("click", abrirMenu)