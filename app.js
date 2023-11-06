const body = document.getElementById("body");

const btnPlus = document.createElement("button");
btnPlus.innerHTML = "+";

const btnMinus = document.createElement("button");
btnMinus.innerHTML = "-";

const btnMultiply = document.createElement("button");
btnMultiply.innerHTML = "*";

const btnDivision = document.createElement("button");
btnDivision.innerHTML = "/";

const inputA = document.createElement("input");
inputA.setAttribute("type", "Number");
inputA.className = "A";
const inputB = document.createElement("input");
inputB.setAttribute("type", "Number");
inputB.className = "B";

const div = document.createElement("div");

body.appendChild(div);
body.appendChild(inputA);
body.appendChild(inputB);
body.appendChild(btnPlus);
body.appendChild(btnMinus);
body.appendChild(btnMultiply);
body.appendChild(btnDivision);

btnPlus.addEventListener("click", function () {
  calculate("sum");
});

btnMinus.addEventListener("click", function () {
  calculate("minus");
});

btnMultiply.addEventListener("click", function () {
  calculate("multiply");
});

btnDivision.addEventListener("click", function () {
  calculate("division");
});

function calculate(operation) {
  div.innerHTML = "";
  let result = document.createElement("output");
  div.appendChild(result);
  let a = Number(inputA.value);
  let b = Number(inputB.value);
  switch (operation) {
    case "sum":
      result.innerHTML = a + b;
      break;
    case "minus":
      result.innerHTML = a - b;
      break;
    case "multiply":
      result.innerHTML = a * b;
      break;
    case "division":
      result.innerHTML = a / b;
      break;
    default:
      alert("Ошибка" + operation);
      break;
  }
}
