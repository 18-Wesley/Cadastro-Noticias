const tituloInput = document.getElementById('titulo2')
const noticiaInput = document.getElementById('textarea')
const palavraChave =document.querySelector('.palavraChave')
const btn__2 = document.getElementById('btn_2')

const armazenarArrayLocalStorage = ()=>{

    localStorage.setItem('noticias', JSON.stringify(noticialocal))
}

const pegarNoticia = (event)=>{ //pega os valores dos inputs, passa para um objeto e esse objeto é mandado para um array no caso o primeiro array ali em cima
    event.preventDefault()

    var valorTituloInput = tituloInput.value

    var valorNoticiaInput = noticiaInput.value

    let valorPalavraChave = palavraChave.value

    let objNoticia = {
        id: noticialocal.length +1,
        introducao: valorNoticiaInput,
        titulo: valorTituloInput,
        palavraChave: valorPalavraChave
    }

    palavraChave.value = ""
    tituloInput.value = ""
    noticiaInput.value = ""

    noticialocal.push(objNoticia)
    armazenarArrayLocalStorage()
}
const btnMenu = document.querySelector('.btnPesquisa')

const abrirMenu = (event) => {
    event.preventDefault()

    const menuNav = document.querySelector('.navHamburguer')
    menuNav.classList.toggle('ativar')
}

btnMenu.addEventListener("click", abrirMenu)
btn__2.addEventListener("click", pegarNoticia)

let localStorageNoticia = JSON.parse(localStorage.getItem('noticias'))
let noticialocal = localStorage.getItem('noticias') !== null ? localStorageNoticia : []