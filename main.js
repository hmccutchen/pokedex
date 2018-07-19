

  var xhttp = new XMLHttpRequest();

      function display(){
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


     var r = xhttp.responseText;
     var x = JSON.parse(r);
      var abilities = []
   var name = x.name;
     abilities = x.abilities;
     var attack = x.stats[4].base_stat;
     var defense = x.stats[3].base_stat;
     var hp = x.stats[5].base_stat;


var i = 0;

typeWriter();

function typeWriter(){
  if (i < name.length) {
    document.getElementById("poke-name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }

}




function createPokemon(abilities,name,attack,defense,hp){

          flareon = {
          name: name,
          hp: hp,
          attack: attack,
          defense: defense,
         abilities: abilities
      }


     console.log(flareon);
     pokemon.push(flareon)
}
createPokemon(abilities, name, attack, defense, hp);
 }
}
  }

  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/flareon/", true);

  xhttp.send();


var xhr = new XMLHttpRequest();

      function display2(){
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {


    var r = xhr.responseText;
    var x = JSON.parse(r);

     var abilities = []
   var name = x.name;
     abilities = x.abilities;
     var attack = x.stats[4].base_stat;
     var defense = x.stats[3].base_stat;
     var hp = x.stats[5].base_stat;



     var i = 0;

typeWriter();

function typeWriter(){
  if (i < name.length) {
    document.getElementById("poke-name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }

}

function createPokemon(abilities,name,attack,defense,hp){

          vaporeon = {
          name: name,
          hp: hp,
          attack: attack,
          defense: defense,
         abilities: abilities
      }


     console.log(vaporeon);
     pokemon.push(vaporeon);
}
createPokemon(abilities, name, attack, defense, hp);
 }
}
  }
  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/vaporeon/", true);
  xhr.send();





var xhp = new XMLHttpRequest();

      function display3(){
  xhp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

    var r = xhp.responseText;
    var x = JSON.parse(r);

     var abilities = []
   var name = x.name;
     abilities = x.abilities;
     var attack = x.stats[4].base_stat;
     var defense = x.stats[3].base_stat;
     var hp = x.stats[5].base_stat;


var i = 0;
typeWriter();



function typeWriter(){
  if (i < name.length) {
    document.getElementById("poke-name").innerHTML += name.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }

}

function createPokemon(abilities,name,attack,defense,hp){

          jolteon = {
          name: name,
          hp: hp,
          attack: attack,
          defense: defense,
         abilities: abilities
      }


     console.log(jolteon);
     pokemon.push(jolteon);
}
createPokemon(abilities, name, attack, defense, hp);
 }
}
  }

  xhp.open("GET", "https://pokeapi.co/api/v2/pokemon/jolteon/", true);

  xhp.send();



  pokemon = [];


class Trainer{
  constructor(){

    this.pokemon = pokemon;

  }

  all (){
    return pokemon;

  }

   get(name){
 for(var i = 0; i < pokemon.length; i++){
   if(name == pokemon[i]){
    return name;
   }
 }
}

}


















var images = ["joltean.png","vaporeon.png"];

function displayAvatar(){

addEventListener("click", function(){
  count = 0;
var a = document.getElementById("data-stuff");
var b = document.createElement("img");

b.src = "images/"+ images[count];
b.width = "300"
a.appendChild(b);

count +=1;

})

}

















//animations
  var avatar = document.getElementById("avatar1");
    avatar1.addEventListener("click", function(){
   avatar1.classList.toggle("flash");

  })


  var avatar2 = document.getElementById("avatar2");
    avatar2.addEventListener("click", function(){
   avatar2.classList.toggle("flash");

  })


  var avatar3 = document.getElementById("avatar3");
    avatar3.addEventListener("click", function(){
   avatar3.classList.toggle("flash");

  })
