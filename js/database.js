"use strict";
/**
 * Hier werden globale Objekte oder Variablen zugewiesen.
 */

let canvas;
let world;
let keyboard = new Keyboard();

let music_path = "./asset/audio/music/menu/chill_drum.mp3";
let level_path = "./asset/audio/music/levels/ambient.mp3";

let menuSound = new Audio(music_path);
menuSound.volume = 0;
const musicSlider = document.getElementById("music-volume");

const SFXSlider = document.getElementById("effects-volume");
