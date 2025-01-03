class Movement extends DrawableObject {
  speed = 0.5;
  otherDirection = false;
  energy = 80;
  lastHit = 0;

  deathframe = true;

  dmgValue = 80;

  coinCount = 0;
  magazine = 0;

  IMG_DEATH = {
    path: "../../asset/img/art/2_enemy/06_fish/Attack.png",
    animationCount: 6,
  };

  moveToLeft() {
    setInterval(() => {
      this.x -= this.speed;
      this.otherDirection = true;
      if (this.x < -500) {
        this.x = 1500;
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

  // calcCollision(other) {
  //   return (
  //     this.x < other.x + other.boundingBox.w &&
  //     this.x + this.boundingBox.w > other.x &&
  //     this.boundingBox.y < other.boundingBox.y + other.boundingBox.h &&
  //     this.boundingBox.y + this.boundingBox.h > other.boundingBox.y
  //   );
  // }

  calcCollision(other) {
    return (
      this.x + this.offset.x < other.x + other.offset.x + other.boundingBox.w - other.offset.w &&
      this.x + this.offset.x + this.boundingBox.w - this.offset.w> other.x + other.offset.x &&
      this.boundingBox.y + this.offset.y < other.boundingBox.y + other.offset.y + other.boundingBox.h - other.offset.h &&
      this.boundingBox.y + this.offset.y + this.boundingBox.h - this.offset.h > other.boundingBox.y + other.offset.y
    );
  }
  

  
//   this.boundingBox.x + this.offset.x + this.boundingBox.w - this.offset.w >
//   other.boundingBox.x + other.offset.x &&
// this.boundingBox.y + this.offset.y + this.boundingBox.h - this.offset.h >
//   other.boundingBox.y + other.offset.y &&
// this.boundingBox.x + this.offset.x <
//   other.boundingBox.x +
//     other.offset.x +
//     other.boundingBox.w -
//     other.offset.w &&
// this.boundingBox.y + this.offset.y <
//   other.boundingBox.y +
//     other.offset.y +
//     other.boundingBox.h -
//     other.offset.h

  isDead() {
    return this.energy <= 0;
  }

  hit(obj) {
    if (obj instanceof Endboss) {
      console.log("Treffer Endboss");
      this.energy -= 20;
    } else if (obj instanceof Enemy) {
      console.log("Treffer Mobs");
      this.energy -= 10;
    }

    if (this.isDead()) {
      this.energy = 0;
      console.log("Player Tod");
    } else {
      this.lastHit = new Date().getTime();
    }

    console.log("Energie", this.energy);
  }

  pickUp(obj) {
    if (obj instanceof Ammunition) {
      this.magazine += 40;
      console.log("Muni", this.magazine);
    } else if (obj instanceof Coin) {
      this.coinCount += 20;
      console.log("Coins", this.coinCount);
    }
  }

  isHurt() {
    let timepassed = new Date().getTime() - this.lastHit;
    timepassed = timepassed / 1000;
    return timepassed < 2;
  }

  dmg(obj) {
    if (obj instanceof ThrowableObject) {
      console.log("Bubble Treffer");
      this.energy -= this.dmgValue;
      console.log("Energie: ", this.energy);
    }

    if (this.isDead()) {
      this.energy = 0;
      console.log("DEATH ENEMY");
    } else {
      this.lastHit = new Date().getTime();
    }
  }
}
