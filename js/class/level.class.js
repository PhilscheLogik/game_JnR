class Level {
  enemies;
  foregrounds;
  backgroundObjects;
  level_max_x_coordinate = 1390;
  level_max_y_coordinate = 430;

  constructor(enemies, foregrounds, backgroundObjects) {
    this.enemies = enemies;
    this.foregrounds = foregrounds;
    this.backgroundObjects = backgroundObjects;
  }
}
