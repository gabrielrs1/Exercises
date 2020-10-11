// Busca elementos no mundo html
const menu = document.querySelector('.menu')
const links = document.querySelector('.links')

// Coloca um escutador de eventos no menu
menu.addEventListener('click', e => {
    // reset a ação padrão do click
    e.preventDefault()

    // Adiciona e retira classe da lista do menu
    links.classList.toggle('links--open')
})