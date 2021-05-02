const canvas = document.querySelector(".video");
const context = canvas.getContext("2d");
const basicVideoImages = [];
const effectVideoImages = [];
let totalImagesCount = 125;
let currentFrame = -1;
let isClicked = false;

function setImages() {
  let imgElem = new Image();
  imgElem.src = `bear_stop/BEAR_distort_stop.png`;
  basicVideoImages.push(imgElem);

  for (let i = 0; i <= totalImagesCount; i++) {
    let imgElem = new Image();
    let currentNum;
    if (i < 10) currentNum = `00000${i}`;
    if (10 <= i && i < 100) currentNum = `0000${i}`;
    if (100 <= i) currentNum = `000${i}`;
    imgElem.src = `bear_moving//BEAR_distort${currentNum}.png`;
    effectVideoImages.push(imgElem);
  }
}

function loop() {
  currentFrame += 1;
  if (totalImagesCount <= currentFrame) {
    currentFrame = -1;
    init();
    return;
  }

  context.drawImage(effectVideoImages[currentFrame], 0, 0);

  requestAnimationFrame(loop);
}

function init() {
  context.drawImage(basicVideoImages[0], 0, 0);
}

window.addEventListener("load", init);
setImages();

canvas.addEventListener("click", () => {
  loop();
});
