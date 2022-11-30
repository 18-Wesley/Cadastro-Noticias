const form = document.querySelector('.form')
const input = document.querySelector('.input')
const form_2 = document.querySelector('.formHamburguer')
const input_2 = document.querySelector('.input_2')


const bordarElemento = (item) => {
    const card = document.getElementById(`${item.id}`)
    card.classList.add('bordar')
    card.style.transition = '1.5s'
    setTimeout(()=>{
        card.classList.remove('bordar')

    },20000)
}

const procurarNoticia = (event)=>{
    event.preventDefault()

    let localStorageNoticia = JSON.parse(localStorage.getItem('noticias'))
    localStorageNoticia.map(item => item.palavraChave == input.value ? bordarElemento(item) : procurarNoticiaPrincipal() )
    
}

function procurarNoticiaPrincipal(){

    let localStoragePrincipal =JSON.parse(localStorage.getItem('principal')) 
    localStoragePrincipal.map(item => {

        let noticiaItem = item.titulo.toLowerCase()
        let inputUSuario = input.value.toLowerCase()
        let regex = new RegExp(inputUSuario)

        if(noticiaItem.match(regex)){
            bordarElemento(item)
        }

    })  
}

form_2.addEventListener("submit", procurarNoticiaMenuHamburguer)
form.addEventListener("submit", procurarNoticia)

function procurarNoticiaMenuHamburguer(event){
    event.preventDefault()

    let localStorageNoticia2 = JSON.parse(localStorage.getItem('noticias'))
    console.log(localStorageNoticia2)

    localStorageNoticia2.map(item => item.palavraChave == input_2.value ? bordarElemento(item) : procurarNoticiaPrincipal_2() )
}

function procurarNoticiaPrincipal_2(){

    const localStoragePrincipal2 =JSON.parse(localStorage.getItem('principal')) 
    localStoragePrincipal2.map(item => {

        const noticiaItem2 = item.titulo.toLowerCase()
        const inputUSuario2 = input_2.value.toLowerCase()
        const regex2 = new RegExp(inputUSuario2)

        if(noticiaItem2.match(regex2)){
            bordarElemento(item)
        }

    })  
}