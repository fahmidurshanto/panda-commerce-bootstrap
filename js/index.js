const h2Elements = document.getElementsByTagName("h2");
for (const item of h2Elements) {
  item.style.color = "lightblue ";
}
const backpackSection = document.getElementById("backpack");
backpackSection.style.backgroundColor = "tomato";

const cards = document.getElementsByClassName("card");
for (const item of cards) {
  item.style.borderRadius = "30px";
}
document.getElementById("nav-btn-1").addEventListener("click", function () {
  console.log("button clicked");
});

const button = document.getElementsByClassName("panda-btn-buy-now");
for (const item of button) {
  item.addEventListener("click", function (event) {
    event.target.parentNode.parentNode.parentNode.remove();
  });
}
const emailInput = document
  .getElementById("exampleInputEmail1")
  .addEventListener("keyup", function (event) {
    const emailText = event.target.value;
    const emailButton = document.getElementById("email-btn");
    if (emailText === "email") {
      emailButton.removeAttribute("disabled");
    } else {
      emailButton.setAttribute("disabled", true);
    }
  });
document.getElementById("color").addEventListener("dblclick", function () {
  const colorField = document.getElementById("color");
  colorField.style.backgroundColor = "steelblue";
});
function setNewImage() {
  document.getElementById("change-img").src = "images/bags/bag-1.png";
}
function setOldImage() {
  document.getElementById("change-img").src = "images/categories/watch.png";
}
