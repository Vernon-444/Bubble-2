class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }

    preload() {
        this.load.image('background', 'assets/Images/back-ground.png');
        this.load.audio('backgroundMusic', 'assets/Sound_Effects/Adventure-320bit.mp3');
        // this.load.spritesheet({
        //     key: 'bubby',
        //     url: 'assets/Images/bub.png',
        //     frameConfig: {
        //         frameWidth: 100,
        //         frameHeight: 100,
        //         startFrame: 0,
        //         endFrame: 9
        //         }});
        this.load.spritesheet('bubbypop', 'assets/Images/bub.png', { frameWidth: 100, frameHeight: 100, endFrame: 9});
        }
      
    create() {
        this.add.image(400, 300, 'background');
        this.add.text(300, 40, 'Quick, pop em as fast as you can!', {color: '#00ff00'}).setOrigin(0.5, 0);
        const config1 = {
            key: 'growing',
            frames: 'bubbypop',
            frameRate: 5,
            repeat: -1
        };
        this.anims.create(config1);
        this.add.sprite(200, 300, 'boom').play('growing');

        const manyconfig = {
            key: 'many',
            x: { randInt: [ 100, 400 ] },
            y: { randInt: [ 100, 500 ] },
            scale: { randFloat: [ 0.25, 2.5 ]},
            anims: 'growing'
        };
        for (var i = 0; i < 12; i++) {
            this.add.sprite(manyconfig);
        }
        // backgroundMusic = game.sound.play('backgroundMusic');
        // scoreText = this.add.text(16, 16, 'score: 0', { fontsize: '32px', fill: '#000' });
        // timerText = this.add.text(200, 16, 'timer: 0', { fontsize: '32px', fill: '#000' });
        // cursors = this.input.keyboard.createCursorKeys();
        // enter = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
        backgroundmusic = this.sound.add('backgroundMusic');
        backgroundmusic.play();
        // var bubble;
        // this.add.image(50, 100, 'bubby', 0);
        // bubble = this.physics.add.sprite(200, 150, 'bubble');
        // bubble.setCollideWorldBounds(true);
      }
      
    update() {
        // if(gameover){
        //     return;
        // }
    
        // if(bubble.x >= 750){
        //     bubble.x = 749;
        //     bubbleXSpeed = bubbleXSpeed * (-1);
        //     bubble.setVelocityX(bubbleXSpeed);
        // } else {
        //     bubble.x = bubble.x + bubbleXSpeed;
        // }
    
    
        // if(bubble.x <= 50){
        //     bubble.x = 51;
        //     bubbleXSpeed = bubbleXSpeed * (-1);
        //     bubble.setVelocityX(bubbleXSpeed);
        // } else {
        //     bubble.x = bubble.x + bubbleXSpeed;
        // }
    
    
        // if(bubble.y >= 550){
        //     bubble.y = 549;
        //     bubbleYSpeed = bubbleYSpeed * (-1);
        //     bubble.setVelocityY(bubbleYSpeed);
        // } else {
        //     bubble.y = bubble.y + bubbleYSpeed;
        // }
    
    
        // if(bubble.y <= 50){
        //     bubble.y = 51;
        //     bubbleYSpeed = bubbleYSpeed * (-1);
        //     bubble.setVelocityY(bubbleYSpeed);
        // } else {
        //     bubble.y = bubble.y + bubbleYSpeed;
        // }
    }
}
