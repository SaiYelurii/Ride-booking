const innerCircle = document.querySelector('.inner-circle');

let rotationAngle = 0;

function rotateCircle() {
  rotationAngle += 1; // Change this value to adjust the rotation speed
  innerCircle.style.transform = `rotate(${rotationAngle}deg)`;
}

setInterval(rotateCircle, 50); // Change the interval to adjust the smoothness of rotation
