var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload () {
    function loadpage () {
        this.load.image('background', 'assets/Images/stones.png');
    }
}

function create () {
    this.add.image(300, 200, 'background');
}

function update () {
    function playGame () {
    }
};
