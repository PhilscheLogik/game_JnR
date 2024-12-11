class World {
  enemies = [new Enemy(), new Enemy()];
  character = new PlayableCharacter();
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.draw();
  }

  draw() {
    this.ctx.drawImage(
      this.character.img,
      this.character.x,
      this.character.y,
      this.character.h,
      this.character.w
    );
    // {this.ctx.drawImage(this.item.img, this.item.x , this.item.y, this.item.h, this.item.w)}
    this.enemies.forEach((item) => this.ctx.drawImage(item.img, item.x , item.y, item.h, item.w));
  }
}
