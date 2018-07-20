

  var xhttp = new XMLHttpRequest();


  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log("getting called");


     var r = xhttp.responseText;
     var x = JSON.parse(r);
      var abilities = []
   var name = x.name;
     abilities = x.abilities;
     var attack = x.stats[4].base_stat;
     var defense = x.stats[3].base_stat;
     var hp = x.stats[5].base_stat;





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


  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/flareon/", true);

  xhttp.send();







var xhr = new XMLHttpRequest();


  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
console.log("getting called");

    var r = xhr.responseText;
    var x = JSON.parse(r);

     var abilities = []
   var name = x.name;
     abilities = x.abilities;
     var attack = x.stats[4].base_stat;
     var defense = x.stats[3].base_stat;
     var hp = x.stats[5].base_stat;


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

  xhr.open("GET", "https://pokeapi.co/api/v2/pokemon/vaporeon/", true);
  xhr.send();





var xhp = new XMLHttpRequest();

  xhp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
console.log("getting called");

    var r = xhp.responseText;
    var x = JSON.parse(r);

     var abilities = []
   var name = x.name;
     abilities = x.abilities;
     var attack = x.stats[4].base_stat;
     var defense = x.stats[3].base_stat;
     var hp = x.stats[5].base_stat;




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







  function display(){
var button = document.getElementById("poke-name");
var a = document.getElementById("hp");
var b = document.getElementById("attack");
var c = document.getElementById("defense");
var d = document.getElementById("abilities");
var e = document.getElementById("abilities2");
button.innerHTML = flareon.name;
 a.innerHTML = flareon.hp;
 b.innerHTML = flareon.attack;
 c.innerHTML = flareon.defense;


d.innerHTML = flareon.abilities[0].ability.name;
e.innerHTML = flareon.abilities[1].ability.name;



  }


  function display2(){
var button = document.getElementById("poke-name");

button.innerHTML = vaporeon.name;
var a = document.getElementById("hp");
var b = document.getElementById("attack");
var c = document.getElementById("defense");
var d = document.getElementById("abilities");
var e = document.getElementById("abilities2");
button.innerHTML = vaporeon.name;
 a.innerHTML = vaporeon.hp;
 b.innerHTML = vaporeon.attack;
 c.innerHTML = vaporeon.defense;


d.innerHTML = vaporeon.abilities[0].ability.name;
e.innerHTML = vaporeon.abilities[1].ability.name;


  }


  function display3(){
var button = document.getElementById("poke-name");

button.innerHTML = jolteon.name;
var a = document.getElementById("hp");
var b = document.getElementById("attack");
var c = document.getElementById("defense");
var d = document.getElementById("abilities");
var e = document.getElementById("abilities2");
button.innerHTML = jolteon.name;
 a.innerHTML = jolteon.hp;
 b.innerHTML = jolteon.attack;
 c.innerHTML = jolteon.defense;


d.innerHTML = jolteon.abilities[0].ability.name;
e.innerHTML = jolteon.abilities[1].ability.name;

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
   var b = document.getElementById("pokemon").innerHTML
     = '<img src =\'https://www.freeiconspng.com/uploads/flareon-pokemon-png-1.png\'> </img>';


  })


  var avatar2 = document.getElementById("avatar2");
    avatar2.addEventListener("click", function(){
   avatar2.classList.toggle("flash");
   var b = document.getElementById("pokemon").innerHTML

    ='<img src =\'https://vignette.wikia.nocookie.net/wingsoffire/images/1/1e/Jolteon.png/revision/latest?cb=20160624090722\'> </img>';


  })


  var avatar3 = document.getElementById("avatar3");
    avatar3.addEventListener("click", function(){
   avatar3.classList.toggle("flash");
   var b = document.getElementById("pokemon").innerHTML

    ='<img src =\'https://www.freeiconspng.com/uploads/vaporeon-free-png-3.png\'> </img>';

  })
