var GameState = {
    preload: function loadPage () {
        this.load.image('background', 'assets/Images/background.png')
    },
    create: function loadGameComponents () {
        this.background = this.game.add.sprite(100, 100, 'background');
    },
    update: function playGame () {

    },
};

var game = new Phaser.Game(648, 368, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
