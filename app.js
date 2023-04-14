const container = document.querySelector(".container");
const dropDown = document.querySelector("#drop");
const dropContainer = document.querySelector(".drop-container");

container.addEventListener("click", clicked);

function clicked() {
  if (container.classList[1]) {
    // console.log("thiyenawa!");
    container.classList.remove("hello");
    dropContainer.style.width = 20 + "px";
  } else {
    // console.log("na bokkah!");
    container.classList.add("hello");
    dropContainer.style.width = 350 + "px";
    // dropContainer.style.transform = translateX(80 + "px");
  }

  if (dropDown.classList[0] === "drop-down") {
    // console.log(dropDown.classList);
    dropDown.classList.add("slide-in");
    dropDown.classList.remove("drop-down");
  } else {
    dropDown.classList.add("drop-down");
    dropDown.classList.remove("slide-in");
  }
  //   console.log(container.classList);
}
