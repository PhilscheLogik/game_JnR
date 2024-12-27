class Movement extends DrawableObject {
  speed = 0.5;
  otherDirection = false;
  energy = 80;
  lastHit = 0;

  coinCount = 0;
  magazine = 0;

  boundingBox = { x: 0, y: 0, w: 0, h: 0 };

  updateBoundingBox(x, y, w, h) {
    this.boundingBox = { x, y, w, h };
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
      this.energy -= 20;
    } else if(obj instanceof Enemy){
      console.log("Treffer Mobs");
      this.energy -= 10;
    }

    if (obj instanceof Ammunition) {
      console.log("Muni gefunden");
      this.magazine += 30;
    } else if(obj instanceof Coin){
      console.log("Geld, Geld, Geld");
      this.coinCount += 30;
    }

    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }

    console.log(this.energy);
  }

  pickUp(obj) {   

    if (obj instanceof Ammunition) {
      console.log("Muni gefunden");
      this.magazine += 30;
    } else if(obj instanceof Coin){
      console.log("Geld, Geld, Geld");
      this.coinCount += 30;
    }
    console.log(this.magazine, this.coinCount);
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 2;
  }
}
