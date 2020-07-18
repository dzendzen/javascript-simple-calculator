// selectors
const buttons = document.querySelectorAll(".num, .operator");
const display = document.querySelector(".display");
const equalsBtn = document.querySelector(".equals");
const clearBtn = document.querySelector(".clear");
let displayData = "";

// event-listeners

buttons.forEach((button) =>
  button.addEventListener("click", () => {
    const btnValue = button.getAttribute("data-id");
    displayData += btnValue;
    // console.log("clicked" + displayData);
    display.textContent = displayData;
  }),
);

equalsBtn.addEventListener("click", () => {
  displayData = eval(displayData);
  display.textContent = displayData;
});

clearBtn.addEventListener("click", () => {
  displayData = "";
  display.textContent = displayData;
});
