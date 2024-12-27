class Ammunition extends Item {
  frameIndex = 0;
  totalFrames = 5;
  w = 170;
  h = 52;

  constructor() {
    const IMG_ITEM_PATH = "../../asset/img/art/8_items/munit_transparent.png";
    super(IMG_ITEM_PATH);
  }
}
