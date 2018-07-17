
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("data-stuff").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://pokeapi.co/api/v1/sprite/1/", true);
  xhttp.send();

}


