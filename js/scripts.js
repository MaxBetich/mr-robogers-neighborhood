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
  console.log(inputArray);
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