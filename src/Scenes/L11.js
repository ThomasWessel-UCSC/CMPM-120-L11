class L11 extends Phaser.Scene {
    constructor() {
        super();

    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("player", "character_squareGreen.png");
        this.load.image("projectile", "character_handGreen.png");
    }

    create() {
        this.projectileArray = [];
        this.playerSprite = this.add.sprite(30, 545, 'player');
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
        this.spaceKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }

    update() {
        if (this.aKey.isDown) {
            this.playerSprite.x -= 10;
            if (this.playerSprite.x <= 30){
                this.playerSprite.x = 30;
            }
        }
        if (this.dKey.isDown) {
            this.playerSprite.x += 10;
            if (this.playerSprite.x >= 765){
                this.playerSprite.x = 765;
            }
        }
        if (this.spaceKey.isDown) {
            this.projectileSprite = this.add.sprite(this.playerSprite.x, this.playerSprite.y, 'projectile');
            this.projectileArray.push(this.projectileSprite);
        }
        for(let i = 0; i < this.projectileArray.length; i++){
            this.projectileArray[i].y -= 10;
            if(this.projectileArray[i].y <= 0){
                this.projectileArray[i].destroy();
                this.projectileArray.splice(i, 1);
            }
        }
    }

}