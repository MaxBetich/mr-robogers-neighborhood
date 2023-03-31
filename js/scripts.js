function positiveBoop(number) {
  let outputArray = [];
  for (i = 0; i <= number; i++) {
    outputArray.push(i);
  }
  return outputArray;
}

function negativeBoop(number) {
  let outputArray = [];
  for (i = 0; i >= number; i--) {
    outputArray.push(i);
  }
  return outputArray;
}

function boopFilter(number) {
  if (number >= 0) {
    const outputArray = positiveBoop(number);
    return outputArray;
  } else {
    const outputArray = negativeBoop(number);
    return outputArray;
  }
}

function roboTranslator(number) {
  const inputArray = boopFilter(number).join(" ").split(" ");
  let outputArray = [];
  inputArray.forEach(element => {
    if (element.includes("3")) {
      outputArray.push("Won't you be my neighbor?");
    } else if (element.includes("2")) {
      outputArray.push("Boop!");
    } else if (element.includes("1"))  {
      outputArray.push("Beep!");
    } else {
      outputArray.push(parseInt(element));
    }
  })
  return outputArray;
}

function addName() {  
  const name = document.getElementById("name").value;
  document.getElementById("result").append(document.createElement("h2"));
  document.querySelector("h2").innerText = "HELLO " + name.toUpperCase();
}

function translator(event) {
  event.preventDefault();
  document.getElementById("result").innerText = "";
  addName();
  const number = document.getElementById("number").value;
  document.getElementById("result").setAttribute("class", "box1");
  document.getElementById("result").append(document.createElement("p"));
  document.querySelector("#result p").append(roboTranslator(number).join(", "));
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", translator);
})