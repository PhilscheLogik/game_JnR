class Level {
  enemies;
  endboss;
  foregrounds;
  backgroundObjects;
  level_max_x_coordinate = 1390;
  level_max_y_coordinate = 430;

  constructor(enemies, endboss, foregrounds, backgroundObjects) {
    this.enemies = enemies;
    this.endboss = endboss;
    this.foregrounds = foregrounds;
    this.backgroundObjects = backgroundObjects;
  }
}
