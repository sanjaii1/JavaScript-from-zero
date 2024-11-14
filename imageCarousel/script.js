let index = 0;
show_image(index);

function show_image(i) {
  const images = document.getElementsByClassName("image");
  const dots = document.getElementsByClassName("dot");

  index += i;


  if (index >= images.length) index = 0;
  if (index < 0) index = images.length - 1;


  for (let j = 0; j < images.length; j++) {
    images[j].style.display = "none";
    dots[j].classList.remove("active");
  }

 
  images[index].style.display = "block";
  dots[index].classList.add("active");
}


setInterval(() => {
  show_image(1); 
}, 3000);


const dots = document.getElementsByClassName("dot");
for (let k = 0; k < dots.length; k++) {
  dots[k].addEventListener("click", function () {
    index = k; 
    show_image(0);
  });
}
