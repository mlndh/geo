function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }

  var x = 0; 
 function shoppaFunktion() {
     document.querySelector("#räknaren").innerHTML = x+=1;
 }



// Get the modal hela första diven 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var starta = document.getElementById("starta");

var musöver = document.querySelector("p")

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
  musöver.addEventListener("click", function() {
    musöver.style.color="red";
  })

  starta.addEventListener("click", function() {
    starta.value="Tyvärr är chatten obemannad just nu, fyll i formuläret";
    start.style.backgroundColor= "green"; 
  })
 
}




 var skicka = document.querySelector("#submit")
var ändras = document.querySelector("#ändras")
  skicka.addEventListener("click", function() {
        var uppgifter = document.querySelector("#texten").value
        var uppgifter = document.querySelector("#nummer").value
        var uppgifter = document.querySelector("#mejl").value
        if(uppgifter === "") {
            alert("Du behöver fylla i fälten markerade med *")
            event.preventDefault();
        } 
        else {
            ändras.innerHTML=("Vi hör av oss")
            ändras.style.color="green"
            event.preventDefault();
        }
});
