const review = [
    {
        id: 1,
        image: '/Review-Quotes/img/person1.jpg',
        name: 'Susan Smith',
        job: 'WEB DEVELOPER',
        info: 'I\'m baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry'
    },

    {
        id: 2,
        image: '/Review-Quotes/img/person2.jpeg',
        name: 'Lucas Morais',
        job: 'MEDIC',
        info: 'Gosta de pessoas, adora jogar um futebol entre amigos, gosta de ler livros de diversos conteúdos.'
    },

    {
        id: 3,
        image: '/Review-Quotes/img/person3.jpg',
        name: 'Nicole Walter',
        job: 'INFLUENCER',
        info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.'
    }
]

const image = document.getElementById('image')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const next = document.getElementById('next')
const previ = document.getElementById('previous')
const sorted = document.getElementById('sorted')

let currentItem = 0

window.addEventListener('DOMContentLoaded', () => {
    const item = review[currentItem]
    image.src = item.image
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.info
})

function showPerson(person) {
    const item = review[person]
    image.src = item.image
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.info
}

next.addEventListener('click', () => {
    currentItem++
    if(currentItem > review.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

previ.addEventListener('click', () => {
    currentItem--
    if(currentItem < 0) {
        currentItem = review.length -1
    }
    showPerson(currentItem)
})

sorted.addEventListener('click', () => {
    const rando = Math.floor(review.length*Math.random())
    showPerson(rando)
})