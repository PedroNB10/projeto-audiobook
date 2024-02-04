const botaoPlayPause = document.querySelector('#play-pause')
const audioCapitulo = document.querySelector('#audio-capitulo')
const botaoProximo = document.querySelector('#proximo')
const botaoAnterior = document.querySelector('#anterior')
const capitulo = document.querySelector('#capitulo')

const numeroCapitulos = 10
const classPause = 'bi-pause-circle-fill'
const classPlay = 'bi-play-circle-fill'

let taTocando = false
let capituloAtual = 1

function tocarFaixa() {
    audioCapitulo.play()
}

function pausarFaixa() {
    audioCapitulo.pause()
}

function proximaFaixa() {

    if (capituloAtual === 10)
    {
        capituloAtual = 1
        audioCapitulo.src = `./src/books/dom-casmurro/${capituloAtual}.mp3`
        capitulo.innerHTML = `Capítulo ${capituloAtual}`
        
    }
    else
    {
        capituloAtual++
        audioCapitulo.src = `./src/books/dom-casmurro/${capituloAtual}.mp3`
        capitulo.innerHTML = `Capítulo 0${capituloAtual}`
    }

    tocarFaixa()

}

botaoProximo.addEventListener('click', () => {
    proximaFaixa()

    if (!taTocando) {
        botaoPlayPause.classList.remove(classPlay)
        botaoPlayPause.classList.add(classPause)
        taTocando = true
    }
   
})

botaoAnterior.addEventListener('click', () => {
    if (capituloAtual === 1)
    {
        audioCapitulo.src = `./src/books/dom-casmurro/0${1}.mp3`
        capitulo.innerHTML = `Capítulo ${capituloAtual}`
    }
    else if (capituloAtual === 10)
    {

        audioCapitulo.src = `./src/books/dom-casmurro/${capituloAtual}.mp3`
        capitulo.innerHTML = `Capítulo ${capituloAtual}`
    }

    else
    {
        capituloAtual--
        audioCapitulo.src = `./src/books/dom-casmurro/0${capituloAtual}.mp3`
        capitulo.innerHTML = `Capítulo ${capituloAtual}`
    }

    tocarFaixa()

    if (!taTocando) {
        botaoPlayPause.classList.remove(classPlay)
        botaoPlayPause.classList.add(classPause)
        taTocando = true
    }
})

botaoPlayPause.addEventListener('click', () => {
    
    if (taTocando) {
        pausarFaixa()
        botaoPlayPause.classList.remove(classPause)
        botaoPlayPause.classList.add(classPlay)
        taTocando = false
    }
    else
    {
        tocarFaixa()
        botaoPlayPause.classList.remove(classPlay)
        botaoPlayPause.classList.add(classPause)
        taTocando = true
    }

})




