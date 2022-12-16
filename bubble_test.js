var config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 2000,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 500},
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
  };
  var game = new Phaser.Game(config);

  function preload() {
    this.load.image('background', './assets/Images/background.png');
    this.load.audio('backgroundMusic', '/assets/Sound_Effects/Adventure-320bit.mp3')
  }
  
  
  function create() {
    this.add.image(400, 200, 'background');
    backgroundMusic = game.sound.play('backgroundMusic');
  }
  
  function update() {
  
  }











  //var GameState = {
   // preload: function loadPage () {
       // this.load.image('background', 'assets/Images/background.png')
    //},
    //create: function loadGameComponents () {
       // this.background = this.game.add.sprite(100, 100, 'background');
   // },
   // update: function playGame () {
//
   // },
//};

//var game = new Phaser.Game(648, 368, Phaser.AUTO);

//game.state.add('GameState', GameState);
//game.state.start('GameState');
