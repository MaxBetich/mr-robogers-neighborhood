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
    if (element.includes("1"))  {
      outputArray.push("Beep!");
    } else {
      outputArray.push(parseInt(element));
    }
  })
  return outputArray;
}