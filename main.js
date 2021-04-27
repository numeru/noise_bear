const canvas = document.querySelector(".video");
const context = canvas.getContext("2d");
const basicVideoImages = [];
const effectVideoImages = [];
let totalImagesCount = 121;
let currentFrame = 0;
let isClicked = false;

function setImages() {
  for (let i = 1; i <= totalImagesCount; i++) {
    let imgElem = new Image();
    let currentNum;
    if (i < 10) currentNum = `00${i}`;
    if (10 <= i && i < 100) currentNum = `0${i}`;
    if (100 <= i) currentNum = `${i}`;
    imgElem.src = `bear_without_noise/ezgif-frame-${currentNum}.jpg`;
    basicVideoImages.push(imgElem);
  }

  for (let i = 1; i <= totalImagesCount; i++) {
    let imgElem = new Image();
    let currentNum;
    if (i < 10) currentNum = `00${i}`;
    if (10 <= i && i < 100) currentNum = `0${i}`;
    if (100 <= i) currentNum = `${i}`;
    imgElem.src = `bear/ezgif-frame-${currentNum}.jpg`;
    effectVideoImages.push(imgElem);
  }
}

function loop() {
  currentFrame += 1;
  if (totalImagesCount <= currentFrame) currentFrame = 1;

  if (isClicked) {
    context.drawImage(effectVideoImages[currentFrame], 0, 0);
  } else {
    context.drawImage(basicVideoImages[currentFrame], 0, 0);
  }

  requestAnimationFrame(loop);
}

function init() {
  context.drawImage(basicVideoImages[0], 0, 0);

  loop();
}

window.addEventListener("load", init);
setImages();

canvas.addEventListener("click", () => {
  isClicked = true;
  setTimeout(() => {
    isClicked = false;
  }, 1500);
});
