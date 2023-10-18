document.querySelector(".btn-menu").addEventListener("click", () => {
  document.querySelector(".menu").classList.add("open");
});

document.querySelector(".x-mark").addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("open");
});

const textToType = "Create grid of 8";
const textElement1 = document.getElementsByClassName("card-animation")[0];
const textElement2 = document.getElementsByClassName("card-animation")[1];
const textElement3 = document.getElementsByClassName("card-animation")[2];
const textElement4 = document.getElementsByClassName("card-animation")[3];
const textElement5 = document.getElementsByClassName("card-animation")[4];

function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    textElement1.innerHTML = text.substring(0, i + 1);
    textElement2.innerHTML = text.substring(0, i + 1);
    textElement3.innerHTML = text.substring(0, i + 1);
    textElement4.innerHTML = text.substring(0, i + 1);
    textElement5.innerHTML = text.substring(0, i + 1);
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback);
    }, 50);
  } else if (typeof fnCallback == "function") {
    setTimeout(fnCallback, 1000);
  }
}

function startTyping() {
  typeWriter(textToType, 0, function() {
    setTimeout(eraseText, 1000);
  });
}

function eraseText() {
  const currentText1 = textElement1.innerHTML;
  const currentText2 = textElement2.innerHTML;
  const currentText3 = textElement3.innerHTML;
  const currentText4 = textElement4.innerHTML;
  const currentText5 = textElement5.innerHTML;
  if (currentText1.length > 0 || currentText2.length > 0 || 
    currentText3.length > 0 || currentText4.length > 0 || currentText5.length > 0) {
    textElement1.innerHTML = currentText1.substring(0, currentText1.length - 1);
    textElement2.innerHTML = currentText2.substring(0, currentText2.length - 1);
    textElement3.innerHTML = currentText3.substring(0, currentText3.length - 1);
    textElement4.innerHTML = currentText4.substring(0, currentText4.length - 1);
    textElement5.innerHTML = currentText5.substring(0, currentText5.length - 1);
    setTimeout(eraseText, 50);
  } else {
    setTimeout(startTyping, 600);
  }
}

startTyping();