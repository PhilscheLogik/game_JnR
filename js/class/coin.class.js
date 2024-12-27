class Coin extends Item {
  frameIndex = 0;
  totalFrames = 8;
  w = 384;
  h = 48;

  constructor() {
    const IMG_ITEM_PATH = "../../asset/img/art/8_items/coin_transparent.png";
    super(IMG_ITEM_PATH);
  }
}
