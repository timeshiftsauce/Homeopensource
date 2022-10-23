let bar = document.getElementById("bar");
let checkee = document.getElementById("check");
const more = document.querySelector(".more");

function check() {
  if (checkee.checked) {
    more.classList.add("left");
  } else {
    more.classList.remove("left");
  }
}
window.onload = () => {
  let doing = document.querySelector("#doing");
  doing.style.opacity = "0";

  setTimeout(() => {
    let doing = document.querySelector("#doing");
    doing.style.display = "none";
  }, 800);
};
