class Movement {
  frameIndex = 0;
  totalFrames = 6;

  x = 10;
  y = 10;
  w = 288;
  h = 48;
  img = new Image();

  currentIndex = 0;
  speed = 0.5;
  otherDirection = false;
  boundingBox = { x: 0, y: 0, w: 0, h: 0 };

  energy = 100;
  lastHit = 0;

  loadImage(path) {
    this.img.src = path;
    this.totalFrames = path.animationCount;
  }

  moveToLeft() {
    setInterval(() => {
      this.x -= this.speed;
      this.otherDirection = true;
      if (this.x < -50) {
        this.x = 1450;
        this.y = 100 + Math.random() * 300;
      }
    }, 100 / 6);
  }

  moveToRight() {
    setInterval(() => {
      this.x += this.speed;
      this.otherDirection = false;
      if (this.x > 1450) {
        this.x = -50;
        this.y = 100 + Math.random() * 300;
      }
    }, 100 / 6);
  }

  moveToUp() {
    setInterval(() => {
      this.y -= this.speed;

      if (this.y < -100) {
        this.y = 480;
        this.x = -200 + Math.random() * 1000;
      }
    }, 100 / 6);
  }

  moveToDown() {
    setInterval(() => {
      this.y += this.speed;

      if (this.y > 500) {
        this.y = -100;
        this.x = -100 + Math.random() * 200;
      }
    }, 100 / 6);
  }

  drawRect(ctx) {
    ctx.beginPath();
    ctx.lineWdth = "5";
    ctx.strokeStyle = "blue";
    ctx.rect(
      this.boundingBox.x,
      this.boundingBox.y,
      this.boundingBox.w,
      this.boundingBox.h
    );
    ctx.stroke();
  }

  updateBoundingBox(x, y, w, h) {
    this.boundingBox = { x, y, w, h };
  }

  calcCollision(other) {    
    return (
      this.x < other.x + other.boundingBox.w &&
      this.x + this.boundingBox.w > other.x &&
      this.boundingBox.y < other.boundingBox.y + other.boundingBox.h &&
      this.boundingBox.y + this.boundingBox.h > other.boundingBox.y
    );
  }
 
  isDead() {
    return this.energy <= 0;
  }

  hit(obj) {
    if (obj instanceof Endboss) {
      console.log("Treffer Endboss");
      this.energy -= 10;
    } else {
      console.log("Treffer Mobs");
      this.energy -= 5;
    }

    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }

    console.log(this.energy);
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 1;
  }
}
