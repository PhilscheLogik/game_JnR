// enemies, endboss, foregrounds, backgroundObjects
let img_f = 2;
let img_w = 576*img_f;
let imh_h = 324*img_f;


let level1 = new Level(
  //enemies
  [
    new Fish("../../asset/img/img_sharkie/2_enemy/6_fish/Walk.png", 4),
    new Fishman("../../asset/img/img_sharkie/2_enemy/5_fish_man/Idle.png", 4),
    new Fish("../../asset/img/img_sharkie/2_enemy/6_fish/Walk.png", 4),
    new Fish("../../asset/img/img_sharkie/2_enemy/6_fish/Walk.png", 4),
    new Fishman("../../asset/img/img_sharkie/2_enemy/5_fish_man/Idle.png", 4),
  ],
  //endboss
  new Endboss(
    "../../asset/img/img_sharkie/2_enemy/7_endboss/3 Big bloated/Big_bloated_idle.png",
    4
  ),
  // new Endboss(
  //   "../../asset/img/img_sharkie/2_enemy/7_endboss/PNG/Slime2/Idle/Slime2_Idle_direct.png",
  //   6
  // ),


  //foregrounds
  [
    new Bubble(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/5.png",
      0,
      0
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/6.png",
      0,
      0,
      720,
      480
    ),

    new Bubble(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/5.png",
      720,
      0
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/6.png",
      720,
      0,
      720,
      480
    ),
  ],

  //backgroundObjects
  [
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/1.png",
      -720,
      0,
      720,
      480
    ),

    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/1.png",
      0,
      0,
      720,
      480
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 2/5.png",
      0,
      0,
      720,
      480
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/2.png",
      0,
      0,
      720,
      405
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/3.png",
      0,
      0,
      720,
      480
    ),
    new Bubble(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/4.png",
      0,
      0
    ),

    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/1.png",
      720,
      0,
      720,
      480
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 2/5.png",
      720,
      0,
      720,
      480
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/2.png",
      720,
      0,
      720,
      405
    ),
    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/3.png",
      720,
      0,
      720,
      480
    ),

    new BackgroundObject(
      "../../asset//img/img_sharkie/3_background/Alternativ/background 3/1.png",
      1440,
      0,
      720,
      480
    ),
  ]
);
