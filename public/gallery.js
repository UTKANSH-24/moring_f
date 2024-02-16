let next = document.querySelector('.next-gallery')
let prev = document.querySelector('.prev-gallery')

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item-gallery')
    document.querySelector('.slide-gallery').appendChild(items[0])
})

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item-gallery')
    document.querySelector('.slide-gallery').prepend(items[items.length - 1]) // here the length of items = 6
})
