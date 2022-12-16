var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        defaut: 'arcade',
        arcade: {
            gravity: {y: 5},
            debug: false
        },
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let game = new Phaser.Game(config);
let player;
let click;
let bubbles;
let score = 0;
let fallSpeed;
let cursors;
let timer;

function preload() {
    this.load.image('background', 'assets/background.jpeg');
    this.load.spritesheet('pointer', 'assets/pointing_finger_sprite.jpeg');
    this.load.audio('backgroundMusic', 'assets/Adventure-320bit.mp3');
    this.load.spritesheet('bubbles', 'assets/bubble_sprite_sheet.jpeg');
}

function create() {
    this.add.image(400, 300, 'background');
    score = this.add.text(16, 16, 'Your Score Is: 0', {fontSize: '32px', fill: '#000'});
    player = this.physics.add.sprite(200, 150, 'pointer');
    player.setCollideWorldBounds(true);
    bubbles = this.physics.add.sprite(400, 300, 'bubbles');
    bubbles.setCollideWorldBounds(true);
    cursors = this.input.keyboard.createCursorKeys();
    click = this.input.click(Phaser.Input.click)
}
