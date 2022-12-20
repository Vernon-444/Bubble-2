class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload() {
        this.load.image("startButton", "assets/Images/startbut.png");
    }
    create() {
        console.log('SceneTitle');
        var startGameButton = this.add.image(400, 300, "startButton");
        startGameButton.setInteractive();
        startGameButton.on("pointerdown", this.startGame, this);
    }
    startGame() {
        this.scene.start('SceneMain');
    }
    update() {
    }
}
