class World {
  ctx;
  canvas;

  enemies = [new Enemy(), new Enemy(), new Enemy()];
  character = new PlayableCharacter();

  bubbles = [new Bubbles()];

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  draw() {
    // console.log(this.character.w);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.drawImage(
      this.character.img,
      this.character.w / 6,
      0,
      this.character.w / 6,
      this.character.h,
      this.character.x,
      this.character.y,
      this.character.w / 6,
      this.character.h
    );

    // let self = this;
    requestAnimationFrame(() => {
      this.draw();
    });

    this.enemies.forEach((item) =>
      this.ctx.drawImage(
        item.img,
        item.w / 4,
        0,
        item.w / 4,
        item.h,
        item.x,
        item.y,
        item.w / 4,
        item.h
      )
    );

    this.bubbles.forEach((item) =>
      this.ctx.drawImage(item.img, item.x, item.y, item.w, item.h)
    );
  }
}
