var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
var btnToggle = document.getElementById("btnToggle");
var X = 0;
var Y = 0;
var X2 = 0;
var Y2 = 0;
var mouse = {x: 0, y: 0};
var mouse2 = {x: 0, y: 0};

document.addEventListener("mousemove", function(e){
  mouse.x = e.clientX - cursor.offsetWidth / 2;
  mouse.y = e.clientY - cursor.offsetHeight / 2;
  mouse2.x = e.clientX - cursor2.offsetWidth / 2;
  mouse2.y = e.clientY - cursor2.offsetHeight / 2;
});

function btnActive(){
  document.getElementById("body").classList.toggle("c-none");
  btnToggle.classList.toggle("c-none");
  cursor.classList.toggle("d-none");
  cursor2.classList.toggle("d-none");
  if (btnToggle.textContent == "on") 
    btnToggle.innerHTML = "off";
  else 
    btnToggle.innerHTML = "on";
}

function move(){
  X += (mouse.x - X) * 0.1;
  Y += (mouse.y - Y) * 0.1;
  X2 += (mouse2.x - X2) * 0.1;
  Y2 += (mouse2.y - Y2) * 0.1;
  cursor.style.transform = `matrix(1, 0, 0, 1, ${X}, ${Y})`;
  cursor2.style.transform = `matrix(1, 0, 0, 1, ${X2}, ${Y2})`;
  requestAnimationFrame(move);
}

move();
