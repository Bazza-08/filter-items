const itemsContainer = document.querySelector('.items');
card = '';

function addItems() {
    const itemsArray = items; 
    itemsArray.forEach(item=>{
        card += 
            `<div class="card transform" data-product = ${item.data}>
                <img src=${item.image}>
                <h3>${item.name}<span>R${item.cost}</span></h3>
            </div>`;
        itemsContainer.innerHTML=card;
    });
};

addItems();

//Show onclick store

function showAll(){
    card='';
    const itemsArray = items;
    
    itemsArray.forEach(item => {
        card += 
            `<div class="card transform" data-product = ${item.data}>
                <img src=${item.image}>
                <h3>${item.name}<span>R${item.cost}</span></h3>
            </div>`;
        itemsContainer.innerHTML=card;
    });

    // var element = document.getElementsByClassName('items');
    // element.classList.toggle('transform-active');
}

function showCakes(){
    card='';
    const itemsArray = items.filter(itemChoice => itemChoice.name === 'Cakes');
    
    itemsArray.forEach(item => {
        card += 
            `<div class="card transform" data-product = ${item.data}>
                <img src=${item.image}>
                <h3>${item.name}<span>R${item.cost}</span></h3>
            </div>`;
        itemsContainer.innerHTML=card;
    });
}

function showSweets(){
    card='';
    const itemsArray = items.filter(itemChoice => itemChoice.name === 'Sweets');
    
    itemsArray.forEach(item => {
        card += 
            `<div class="card transform" data-product = ${item.data}>
                <img src=${item.image}>
                <h3>${item.name}<span>R${item.cost}</span></h3>
            </div>`;
        itemsContainer.innerHTML=card;
    });
}

function showCupcakes(){
    card='';
    const itemsArray = items.filter(itemChoice => itemChoice.name === 'Cupcakes');
    
    itemsArray.forEach(item => {
        card += 
            `<div class="card transform" data-product = ${item.data}>
                <img src=${item.image}>
                <h3>${item.name}<span>R${item.cost}</span></h3>
            </div>`;
        itemsContainer.innerHTML=card;
    });
}

function showDoughnuts(){
    card='';
    const itemsArray = items.filter(itemChoice => itemChoice.name === 'Doughnuts');
    
    itemsArray.forEach(item => {
        card += 
            `<div class="card transform" data-product = ${item.data}>
                <img src=${item.image}>
                <h3>${item.name}<span>R${item.cost}</span></h3>
            </div>`;
        itemsContainer.innerHTML=card;
    });
}