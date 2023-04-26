'use strict';
let saturate = document.getElementById('saturate');

let contrast = document.getElementById('contrust');
let brightness = document.getElementById('brightness');
let sepia = document.getElementById('sepia');
let grayScale = document.getElementById('grayscale');
let blur = document.getElementById('blur');
let hueRotate = document.getElementById('hue_rotate');

let upLoad = document.getElementById('upload');
let downLoad = document.getElementById('download');
let img = document.getElementById('img');
let reset = document.querySelector('span');
let imgBox = document.querySelector('.img-box');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

function resetValue() {
  img.style.filter = 'none';
  saturate.value = '100';
  contrast.value = '100';
  brightness.value = '100';
  sepia.value = '0';
  grayScale.value = '0';
  blur.value = '0';
  //   hueRotate.value = '0';
}

window.onload = function () {
  downLoad.style.display = 'none';
  reset.style.display = 'none';
  imgBox.style.display = 'none';
};
upLoad.onchange = function () {
  resetValue();
  downLoad.style.display = 'block';
  reset.style.display = 'block';
  imgBox.style.display = 'block';
  let file = new FileReader();
  file.readAsDataURL(upLoad.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = 'none';
  };
};
let filters = document.querySelectorAll('ul li input');
filters.forEach(filter => {
  filter.addEventListener('input', function () {
    ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayScale(${grayScale.value})
        blur(${blur.value}px)
       
        `;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });
});

// hue_rotate(${hueRotate.value})
downLoad.onclick = function () {
  downLoad.href = canvas.toDataURL();
};
