var img_path = '/img/';
var products = [
  {
    name: 'Mealworms: 714 oz tub',
    description: 'A 714 ounce tub of mealworms',
    price: 6.90,
    img: img_path+'mealworms.jpg'
  },
  {
    name: 'Live Mealworms (GIANT) 100 Pack',
    description: '100 giant living mealworms.',
    price: 9.90,
    img: img_path+'livemealworms.jpg'

  },
  { 
    name: 'Dried Insect Assortment (3 Pack)',
    description: 'Sixteen ounces of berry and bug deliciousness for your [O]Possom',
    price: 3.00,
    img: img_path+'DriedInsect3Pack.jpg'
  },
  {
    name: 'Berries and Bugs Diet (16 oz.',
    description: 'A three pack of assorted dried insects.',
    price: 13.95,
    img: img_path+'berriesandbugs.jpg'
  },
  { 
    name: 'Specialty Milk Replacer 250.',
    description: 'A Special replacement for milk...(I guess????)',
    price: 9.90,
    img: img_path+'milkreplacer.jpg'
  },
  {
    name: 'Brisbane Cage',
    description: 'A large cage for your (O)possom',
    price: 149.95,
    img: img_path+'brisbanecage.jpg'
  },
  {
    name: '4-Level Mansion',
    description: 'A glorious four story mansion for your Possom',
    price: 219.95,
    img: img_path+'4levelmansion.jpg'
  },
  {
    name: '2-Level Mansion',
    description: 'A slightly less glorious tw0 story mansion for your Possom',
    price: 149.95,
    img: img_path+'2levelmansion.jpg'
  },
  {
    name: 'Treadmill Wheel 11 inches',
    description: 'Eleven inch treadmill wheel',
    price: 39.00,
    img: img_path+'treadmill.jpg'   
  },
  {
    name: 'Jumbo Hanging Hamock',
    description: 'A Jumbo Hanging Hamock',
    price: 13.40,
    img: img_path+'jumbohamock.jpg'
  },
  {
    name: 'Full Moon Night Light',
    description: 'Keep your (O)possom brightly lit at night',
    price: 22.15,
    img: img_path+'fullmoon.jpg'
  },
  {
    name: 'Exploration Ball',
    description: 'A fun ball for your Possom to explore',
    price: 13.95,
    img: img_path+'explorationball.jpg'
  },
  {
    name: 'Sisal Rope Swing',
    description: 'A fun rope swing for your possum',
    price: 9.85,
    img: img_path+'ropeswing.jpg'
  },

];


for(i = 0; i<products.length; i++){
  var product =  document.getElementById('product');
  if(product){
    product.innerHTML += "<div class='card'> " + 
    "<img src='"+ products[i].img+ "'>" +
  "<p>"+"$"+ parseFloat(Math.round(products[i].price *100) /100).toFixed(2)+"</p>" +
  "<h4>"+ products[i].name + "</h4>" +  
  "<p class='description'>" + products[i].description + "</p>" +  "</div>";
    }
  }

  var usedNumbers = [];//Array of items to not repeat on featured items

for(i=0; i<3; i++) {
  var featured = document.getElementById('featured-products-wrap');

  if(featured) {

    var randomArrayIndex = Math.floor(Math.random() * products.length);//Generate random index array.

    var fp;//featured product
    
    while (usedNumbers.indexOf(randomArrayIndex) > -1) {//Loop until randomArrayIndex is not within usedNumbers array
      randomArrayIndex = Math.floor(Math.random() * products.length)
    }
    fp = products[randomArrayIndex];
    usedNumbers.push(randomArrayIndex);


    var rPrice = (fp.price *.9)
    featured.innerHTML += "<div class='card'> " + 
    "<img src='"+ fp.img+ "'>" +
    "<p>"+"$"+ parseFloat(Math.round(rPrice *100) /100).toFixed(2)+"</p>" +
    "<h4>"+ fp.name + "</h4>" +  
    "<p class='description'>" + fp.description + "</p>" +  "</div></div>";
  }
}
