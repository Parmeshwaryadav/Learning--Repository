const actionbutton = document.getElementById("action");

// generating hex code to generate random colors.
const colorChange = () => {
  let value = "0123456789ABCDEF";
  let cos = "#";
  for (i = 0; i < 6; i++) {
    cos = cos + value[Math.floor(Math.random() * 16)];
  }
  return cos;
};

// event to a button
actionbutton.addEventListener("click", fn);

// connected colorchange to a button
function fn() {
  document.body.style.backgroundColor = colorChange();
}
