console.log("hello");
const draggables = document.querySelectorAll(".draggable");
const subContainer = document.querySelectorAll(".subContainers");
const container1 = document.querySelector("#subContainer1");
const container2 = document.querySelector("#subContainer2");
const btn = document.querySelector("#reset");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

subContainer.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const draggable = document.querySelector(".dragging");
    container.appendChild(draggable);
  });
});
const cont1 = subContainer1.innerHTML;
const cont2 = subContainer2.innerHTML;
btn.addEventListener("click", () => {
  container1.innerHTML = cont1;
  container2.innerHTML = cont2;
});
