const productsArray = [
  {
    image: 'images/first-dish.jpg',
    name: 'Seafood Symphony',
    description: 'A medley of fresh seafood such as shrimp, mussels, and calamari in a rich white wine and herb sauce, served with freshly baked bread.',
  },
  {
    image: 'images/grilled-beef-steak-dark-wooden-surface.jpg',
    name: 'Steak Jazz',
    description: 'A juicy grilled steak accompanied by a red wine and mushroom reduction, served with mashed potatoes and seasonal vegetables.',
  },
  {
    image: 'images/chicken.jpg',
    name: 'Swing Chicken',
    description: 'Grilled chicken breast stuffed with spinach and feta cheese, served with wild rice and a lemon caper sauce.',
  },
  {
    image: 'images/pexels-federico-ramirez-12006395.jpg',
    name: 'Pasta with Pesto Improvisation',
    description: 'Fresh pasta tossed with a vibrant blend of basil pesto, toasted pine nuts, sun-dried tomatoes, and Parmesan cheese.',
  },
  {
    image: 'images/pexels-los-muertos-crew-7601398.jpg',
    name: 'Blue Note Salad',
    description: 'Mixed greens, caramelized pears, toasted walnuts, and blue cheese, drizzled with a balsamic berry vinaigrette.',
  },
  {
    image: 'images/pexels-pegah-sharifi-6421872.jpg',
    name: 'Sweet Jazz Dessert',
    description: 'Decadent chocolate tart with a raspberry sauce, accompanied by homemade vanilla ice cream.',
  },
];

const dishesWrapper = document.querySelector('.dishes-wrapper');

for (let i = 0; i < productsArray.length; i += 1) {
  const productCard = document.createElement('article');
  productCard.classList.add('card-product');

  const productImage = document.createElement('img');
  productImage.setAttribute('src', productsArray[i].image);
  productCard.appendChild(productImage);

  const cardText = document.createElement('div');
  cardText.classList.add('product-description');

  const productName = document.createElement('h3');
  productName.innerHTML = productsArray[i].name;
  cardText.appendChild(productName);

  const productDescription = document.createElement('p');
  productDescription.innerHTML = productsArray[i].description;
  cardText.appendChild(productDescription);

  productCard.appendChild(cardText);
  dishesWrapper.appendChild(productCard);
}

const line1 = document.querySelector('.bar1');
const line2 = document.querySelector('.bar2');
const line3 = document.querySelector('.bar3');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navBar = document.querySelector('nav');

function openHbg() {
  line1.classList.toggle('activebar1');
  line2.classList.toggle('activebar2');
  line3.classList.toggle('activebar3');

  navMenu.classList.toggle('activeNavMenu');
  navBar.classList.toggle('activeNav');
}

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  line1.classList.remove('activebar1');
  line2.classList.remove('activebar2');
  line3.classList.remove('activebar3');

  navMenu.classList.remove('activeNavMenu');
  navBar.classList.remove('activeNav');
}));

hamburger.addEventListener('click', openHbg);
