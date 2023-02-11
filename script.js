const box = document.getElementById("box");
const colorChange = document.getElementById("color-change")
const addChild = document.getElementById("add-child");
const removeChild = document.getElementById("remove-child")

  colorChange.addEventListener("click", () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // console.log(randomColor)
    box.style.backgroundColor = "#" + randomColor;
  });


let childBoxCounter = 0;

addChild.addEventListener("click", function() {
  const childBox = document.createElement("div");
  const width = 100 - (childBoxCounter*10);
  childBox.style.width = `${width}px`;
  childBox.style.height = `${width}px`;
  childBox.style.border = "2px solid white";
  childBox.style.position="fixed";
  childBox.style.margin="20px";
  childBox.id = `child-box-${childBoxCounter}`;
  box.appendChild(childBox);
  childBoxCounter++;
});


removeChild.addEventListener("click", function() {
    const childBox = box.lastElementChild;
    if (childBox) {
      box.removeChild(childBox);
      childBoxCounter--;
    }
  });





