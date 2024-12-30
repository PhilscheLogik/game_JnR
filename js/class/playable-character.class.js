class PlayableCharacter extends Movement {
  frameIndex = 0;
  totalFrames = 6;
  world;
  speed = 3;
  swim_sound = new Audio("./asset/audio/effects/char/swim2.mp3");
  hit_sound = new Audio("./asset/audio/effects/actions/hit.mp3");
  death_sound = new Audio("./asset/audio/effects/enemies/sinister_laugh.mp3");

  IMG_SWIM = {
    path: "../../asset/img/art/1_character/01_steam_man/Swim.png",
    animationCount: 6,
  };

  IMG_ATTACK = {
    path: "../../asset/img/art/1_character/01_steam_man/Attack3.png",
    animationCount: 6,
  };

  IMG_IDLE = {
    path: "../../asset/img/art/1_character/01_steam_man/Idle.png",
    animationCount: 6,
  };

  IMG_DEATH = {
    path: "../../asset/img/art/1_character/01_steam_man/Death.png",
    animationCount: 6,
  };

  IMG_HURT = {
    path: "../../asset/img/art/1_character/01_steam_man/Hurt6.png",
    animationCount: 6,
  };

  IMG_SHOOT = {
    path: "../../asset/img/art/1_character/01_steam_man/Hurt6.png",
    animationCount: 6,
  };

  constructor() {
    super().loadImage(this.IMG_IDLE.path);

    this.currentState = "IDLE";
    this.totalFrames = Number(this.IMG_IDLE.animationCount);

    const SFXSlider = document.getElementById("effects-volume");
    SFXSlider.addEventListener("input", (e) => {
      const volume = Number(e.target.value);
      this.swim_sound.volume = volume;
      this.hit_sound.volume = volume;
      this.death_sound.volume = volume;
    });

    this.animate();
  }

  setState(newState) {
    if (this.currentState === newState) return;
    this.currentState = newState;
    switch (newState) {
      case "IDLE":
        this.img.src = this.IMG_IDLE.path;
        this.totalFrames = this.IMG_IDLE.animationCount;
        break;
      case "SWIM":
        this.img.src = this.IMG_SWIM.path;
        this.totalFrames = this.IMG_SWIM.animationCount;
        break;
      case "ATTACK":
        this.img.src = this.IMG_ATTACK.path;
        this.totalFrames = this.IMG_ATTACK.animationCount;
        break;
      case "SHOOT":
        this.img.src = this.IMG_SHOOT.path;
        this.totalFrames = this.IMG_SHOOT.animationCount;
        break;
      case "HURT":
        this.img.src = this.IMG_HURT.path;
        this.totalFrames = this.IMG_HURT.animationCount;
        break;
      case "DEATH":
        this.img.src = this.IMG_DEATH.path;
        this.totalFrames = this.IMG_DEATH.animationCount;
        break;
    }
    this.frameIndex = 0;
  }

  executeAttack() {
    if (this.isAttacking) return;
    this.isAttacking = true;
    this.hit_sound = new Audio("./asset/audio/effects/actions/hit.mp3");
    this.hit_sound.play();

    const interval = setInterval(() => {
      this.frameIndex++;
      if (this.frameIndex >= this.totalFrames) {
        clearInterval(interval);
        this.isAttacking = false;
        this.hit_sound.pause();
      }
    }, 200);
  }

  moveRight() {
    this.x += this.speed;
    this.otherDirection = false;    
    this.swim_sound.play();
  }

  moveLeft() {
    this.x -= this.speed;
    this.otherDirection = true;
    this.swim_sound.play();
  }

  moveUp() {
    this.y -= this.speed;
    this.swim_sound.play();
  }

  moveDown() {
    this.y += this.speed;
    this.swim_sound.play();
  }

  //---------------------------------
  animate() {
    let stateInterval = setInterval(() => {
      this.swim_sound.pause();
      // if (this.isAttacking) return;

      if (this.isDead()) {
        this.setState("DEATH");
        this.death_sound.play();
        clearInterval(stateInterval);

        console.log("Tod");
        setTimeout(() => {
          toggleClass("canvas", "d_none");
          toggleClass("menu-section", "d_none");
          createGameOver();
        }, 1000);
      } else if (this.isHurt()) {
        this.setState("HURT");
        setTimeout(() => {}, 1000);
        console.log("Aua");
      } else if (this.world.keyboard.Q) {
        this.setState("ATTACK");
        this.executeAttack();
        return;
      } else if (
        this.world.keyboard.RIGHT &&
        this.x < this.world.level.level_max_x_coordinate
      ) {
        this.setState("SWIM");
        this.moveRight();
      } else if (this.world.keyboard.LEFT && this.x > 0) {
        this.setState("SWIM");
        this.moveLeft();
      } else {
        this.setState("IDLE");
      }

      if (this.world.keyboard.UP && this.y > 50) {
        this.moveUp();
      }

      if (
        this.world.keyboard.DOWN &&
        this.y < this.world.level.level_max_y_coordinate
      ) {
        this.moveDown();
      }
      // Kamera
      this.world.camera_x = -this.x + 50;
      this.world.camera_y = -this.y + 55;
    }, 100 / 6);

    let animationIntervall = setInterval(() => {
      // Animation
      this.frameIndex++;

      if (
        this.currentState === "DEATH" &&
        this.frameIndex >= this.totalFrames
      ) {
        clearInterval(animationIntervall);
      } else if (this.frameIndex >= this.totalFrames) {
        this.frameIndex = 0;

        // Nach Abschluss einer Attack-Animation zu Idle wechseln
        if (this.currentState === "ATTACK") {
          this.setState("IDLE");
        }
      }
    }, 200);
  }
}
