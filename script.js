let elem1 = document.querySelector('#elem1')
let elem2 = document.querySelector('#elem2')
let elem3 = document.querySelector('#elem3')

// Метод event.stopPropagation() - остановка всплытия.
// Метод event.stopImmediatePropagation() - полностью останавливает
// обработку события.

elem1.addEventListener('click', ()=> {
    console.log('зеленый')
})
elem2.addEventListener('click', ()=> {
    console.log('голубой')
    event.stopImmediatePropagation();
})
elem2.addEventListener('click', ()=> {
    console.log('голубой - второй обработчик')
})
elem3.addEventListener('click', ()=> {
    console.log('красный')
    event.stopPropagation();
})

let parent = document.querySelector('#parent');
let button = document.querySelector('#button');
let block = document.querySelector('#block');

button.addEventListener('click', ()=> {
    block.classList.add('active');
    // отменяем всплытие события при клике на кнопку.
    event.stopPropagation();
    // Если этого не сделать, то при клике на кнопку сработает событие,
    // новешанное на родителе.
    // (грубо говоря, кнопка моментально удаляется из-за block.classList.remove()).
})

parent.addEventListener('click', ()=> {
    block.classList.remove('active');
})


// делегирование

let list = document.querySelector('#list');

list.addEventListener('click', (event)=> {
    console.log(event.target);
    // .toggle - добавляет класс, если его нету и удаляет класс,
    // если он уже есь на элементе.
    event.target.classList.toggle('color');
})