var img_path = '/img/';
var products = [
  {
    name: 'Mealworms: 714 oz tub',
    description: 'Keep your (O)possoms fed for years with just an absolutely insane amount of mealworms. Like seriously Seven Hundred and Foourteen Ounces of Mealworms. That is over 44 pounds of straight mealwormy deliciousness. Some might say, who would ever need so many mealworms. Well if you do for some reason, here they are.',
    price: 6.90,
    img: img_path+'mealworms.jpg'
  },
  {
    name: 'Live Mealworms (GIANT) 100 Pack',
    description: 'I prefer my Giant Mealworms dead...said nobdy every. Step right up and your 100 pack of fresh, wriggling, writhing mealworms. Plucked fresh from wherever mealworms are plucked from.',
    price: 9.90,
    img: img_path+'livemealworms.jpg'

  },
  { 
    name: 'Dried Insect Assortment (3 Pack)',
    description: 'If your (O)possom has a hankering for something other than Mealworms, try our assortment of other delicious insects.',
    price: 3.00,
    img: img_path+'DriedInsect3Pack.jpg'
  },
  {
    name: 'Berries and Bugs Diet (16 oz.',
    description: 'If you\'re like us, you require only the best for your(o)possom. Treat him to the best with this bad of bugsnberries, and he probably wont eat your fingers.',
    price: 13.95,
    img: img_path+'berriesandbugs.jpg'
  },
  { 
    name: 'Specialty Milk Replacer 250.',
    description: 'A Special replacement for milk...I guess?, I have no idea why you would need this.',
    price: 9.90,
    img: img_path+'milkreplacer.jpg'
  },
  {
    name: 'Brisbane Cage',
    description: 'A large cage for your Brisbane(O)possom. 10 out of 10 Brisbane (O)possoms agree, this cage is the bees knees',
    price: 149.95,
    img: img_path+'brisbanecage.jpg'
  },
  {
    name: '4-Level Mansion',
    description: 'CRIKEY. This four story mansion will make all the other (O)possoms on the block beyond jealous. Give the Number 1 (O)possom in your life the castle he truly',
    price: 219.95,
    img: img_path+'4levelmansion.jpg'
  },
  {
    name: '2-Level Mansion',
    description: 'Maybe four stories is too much for you. Maybe your (O)possom just left a dead bird on your bed. Well this modest two story mansion is perfect for the (O)possom who lacks a certain 4 story character',
    price: 149.95,
    img: img_path+'2levelmansion.jpg'
  },
  {
    name: 'Treadmill Wheel 11 inches',
    description: 'Is your just a frantic, insane, destructive ball of...love. Well with this wheel he can run his destructive little heart out without ripping apart your brand new wallpaper',
    price: 39.00,
    img: img_path+'treadmill.jpg'   
  },
  {
    name: 'Jumbo Hanging Hamock',
    description: 'Is your (O)possom uncomfortable? Does he has bedsores? Never fear! This comfy and stylish hamock, your (O)possom will never want to leave his cage.',
    price: 13.40,
    img: img_path+'jumbohamock.jpg'
  },
  {
    name: 'Full Moon Night Light',
    description: 'Does your (O)possom pine for his former life, running in the deep dark words, demonically hissing a the full moon? Well no longer. With this full moon nightlight, give that special (O)possom the feeling of his free life, while safely locked in your one bedroom closet.',
    price: 22.15,
    img: img_path+'fullmoon.jpg'
  },
  {
    name: 'Exploration Ball',
    description: 'What am I supposed to say about this? Its a ball, for exploration, you figure it out, genius.',
    price: 13.95,
    img: img_path+'explorationball.jpg'
  },
  {
    name: 'Sisal Rope Swing',
    description: 'What the hell is a sisal? Wikipedia says al, with the botanical name Agave sisalana, is a species of Agave native to southern Mexico but widely cultivated and naturalized in many other countries. It yields a stiff fibre used in making various products. SO it is made of sisal or do (O)possoms like swing on swissals in the wild or something? I dont know. Its a rope swing. They swing on it. Good times',
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
