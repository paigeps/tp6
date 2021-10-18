window.onload = function() {
  
  newheader = document.querySelector("#titlebanner h1");
  
  newheader.style.color = "CornflowerBlue";
  newheader.style.textShadow = "0px 8px 8px #ffffff";
  
  document.querySelector("#ingredients").onclick = function() {
    document.querySelector("#ingredients ul").classList.toggle("dontshow");
  }
  
  document.querySelector("#equipment").onclick = function() {
    document.querySelector("#equipment ul").classList.toggle("dontshow");
  }
  
  document.querySelector("#directions").onclick = function() {
    document.querySelector("#directions ol").classList.toggle("dontshow");
  }
  
  document.querySelector("#titlebanner h1").onclick = function() {
    document.querySelector("#titlebanner h1").style.color = "Black";
  }
  
  document.querySelector("#footer").innerHTML += "<p>Paige was here for TP6!</p>"
}