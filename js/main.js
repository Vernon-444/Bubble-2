var game;

var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        parent: 'phaser-game',
        physics: {
            default: 'arcade',
            arcade: {
                gravity: {y: 500},
                debug: false
            }
        },
        scene: [SceneTitle,SceneMain]
    };

game = new Phaser.Game(config);

let player;
let bubble;

let xSpeed = 0;
let ySpeed = 0;
let bubbleXSpeed = 1;
let bubbleYSpeed = 1;
let bubbleAccel = 4;
let accuracy = 50;
let score = 0;
let timer=0;
let interval;
let gameover = false;
