//Create products with OOP JS
//Author: Lyes MEDJAHED 
//October 2025

import { calculation } from "./cartCounter.js";

class Products{
    constructor(title, price, size, color, description, stock){
        this.title = title;
        this.price = price;
        this.size = size;
        this.color = color;
        this.description = description;
        this.stock = stock;
    }

    item(){
        return `${this.title}, ${this.price}, ${this.size}, ${this.color}, ${this.description}`
    }
}
 
class Dress extends Products{
    constructor(title, price, size, color, description, stock){
        super(title, price, size, color, description, stock);
    }
}

class Jeans extends Products{
    constructor(title, price, size, color, description, stock){
        super(title, price, size, color, description, stock);
    }
}

class Shoes extends Products{
    constructor(title, price, size, color, description, stock){
        super(title, price, size, color, description, stock);
    }
}

class Jewellery extends Products{
    constructor(title, price, size, color, description, stock){
        super(title, price, size, color, description, stock);
    }
}

class Underwear extends Products{
    constructor(title, price, size, color, description, stock){
        super(title, price, size, color, description, stock);
    }
}

const dress = new Dress("Elegant Dress", 119, ["S", "M", "L", "XL"], "#DEB078", "Elegant dress for summer evenings. 🌿✨", 15);

//Display product on webpage
document.getElementById('dressTitle').textContent = dress.title;
document.getElementById('dPrice').textContent = dress.price + "€";
document.getElementById('dSize').textContent = "Sizes: " + dress.size.join("| ");
document.getElementById('dColor').textContent = "Colors: ";
document.getElementById('dDescription').textContent = dress.description;

// Créer et ajouter un carré pour la couleur
const colorBox = document.createElement("div");
colorBox.style.backgroundColor = dress.color;
colorBox.style.width = "25px";
colorBox.style.height = "25px";
colorBox.style.border = "1px solid #ccc";
colorBox.style.borderRadius = "4px";
colorBox.style.margin = "5px"

// Ajouter le carré de couleur dans la zone de couleur
document.getElementById("dColor").appendChild(colorBox);

//CHECKOUT BUTTON 
const button = document.getElementById('button');
const close = document.getElementById('close');
const payment = document.getElementById('payment');

button.addEventListener('click', function(){
    payment.style.display = "flex";
});

close.addEventListener('click', function(){
    payment.style.display = "none";
});

calculation();


//load coming soon
import { coming } from './JavaScript/loaderComponent.js';

// Appel de la fonction pour charger le composant
document.addEventListener('DOMContentLoaded', () => {
   coming();
});
