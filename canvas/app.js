// this looks like space and stars where you can push them away from mouse

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];

//handle mouse int

const mouse = {
  x: null,
  y: null,
  radius: 250,
};

window.addEventListener('mousemove', function (event) {
  (mouse.x = event.x), (mouse.y = event.y);
});

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 2;
    this.baseX = this.x;
    this.baseY = this.y;
    this.density = Math.random() * 30 + 1;
  }
  draw() {
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
  update() {
    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx * dx + dy * dy);
    let forceDX = dx / distance;
    let forceDY = dy / distance;
    let maxDist = mouse.radius;
    let force = (maxDist - distance) / maxDist;
    let dirX = forceDX * force * this.density;
    let dirY = forceDY * force * this.density;

    if (distance < mouse.radius) {
      this.x -= dirX;
      this.y -= dirY;
    } else {
      if (this.x !== this.baseX) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (this.y !== this.baseY) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    }
  }
}

function init() {
  particleArray = [];
  for (let i = 0; i < 1000; i++) {
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    particleArray.push(new Particle(x, y));
  }
}
init();

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particleArray.length; i++) {
    particleArray[i].draw();
    particleArray[i].update();
  }
  requestAnimationFrame(animate);
}
animate();
