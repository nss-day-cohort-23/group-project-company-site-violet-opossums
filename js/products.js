var products = [
  {
    name: 'Mealworms: 714 oz tub',
    description: 'A 714 ounce tub of mealworms',
    price: 6.90,
    img: 'images/mealworms.jpg'
  },
  {
    name: 'Live Mealworms (GIANT) 100 Pack',
    description: '100 giant living mealworms.',
    price: 9.90,
    img: 'images/livemealworms.jpg'

  },
  { 
    name: 'Dried Insect Assortment (3 Pack)',
    description: 'A three pack of assorted dried insects.',
    price: '13.95',
    img: 'images/DriedInsect3Pack.jpg'
  },
  { 
    name: 'Specialty Milk Replacer 250.',
    description: 'A Special replacement for milk...(I guess????)',
    price: '9.90',
    img: 'images/milkreplacer.jpg'
  },
  {
    name: 'Treadmill Wheel 11 inches',
    description: 'Eleven inch treadmill wheel',
    price: '39.00',
    img: 'images/treadmill.jpg'   
  },
  {
    name: 'Jumbo Hanging Hamock',
    description: 'A Jumbo Hanging Hamock',
    price: '13.40',
    img: '/images/jumbohamock.jpg'
  },
  {
    name: 'Brisbane Cage',
    description: 'A large cage for your (O)possom',
    price: 149.95,
    img: '/images/brisbanecage.jpg'
  },
  {
    name: 'Full Moon Night Light',
    description: 'Keep your (O)possom brightly lit at night',
    price: 22.15,
    img: '/images/fullmoon.jpg'
  }

];

for(i = 0; i<products.length; i++){
  document.getElementById('prodList').innerHTML += '<p> ' + 
  products[i].name + ', ' + 
  products[i].description + ', ' +
   + products[i].price + ', ' +"<img src='"+
 products[i].img+ "'" +  '</p>';

}
// document.getElementById('prodList').innerHTML = '<p> ' + products[0].name + '</p>';
