
let menuEat = document.getElementById('menu-eat');
let menuDrink = document.getElementById('menu-drink')

let foodMenu = document.getElementById('food-menu')
let drinksMenu = document.getElementById('drinks-menu')

function showFoodMenu(){
    drinksMenu.style.display = 'none';
    foodMenu.style.display = 'block'
}

function showDrinksMenu(){
    foodMenu.style.display = 'none';
    drinksMenu.style.display = 'block';
}

