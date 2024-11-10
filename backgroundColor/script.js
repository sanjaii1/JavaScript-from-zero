var index = 0;

function changeBgColor() {
  var color = ["red", "yellow", "blue", "orange", "green", "purple"];

  document.getElementsByTagName("body")[0].style.background = color[index++];

  if (index > color.length - 1) index = 0;
}
