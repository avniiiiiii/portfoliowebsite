const heading = document.getElementById("headingtext");
heading.addEventListener("mouseenter", function () {
  this.style.color = "#9e6b34"; //
});

heading.addEventListener("mouseleave", function () {
  this.style.color = "#9E4770"; // Change color back to original on mouse leave
});
