// Initalization script

function preload() {
    this.load.image('sky','image/sky.png');
    this.load.image('bee', 'image/bee.png');
}


function create () {
    this.sloppyBee = {
        sprites: {
            sky: this.add.image(0, 0, 'sky'),
            bee: this.add.sprite(gameWidth / 2, gameHeight / 2, 'bee')
        },
        enemies: [],
        flowers: []
    };

    this.sloppyBee.sprites.bee.fallingStage = 0;
    this.sloppyBee.sprites.bee.escalatingStage = 0;
    this.sloppyBee.sprites.sky.width = gameWidth;
    this.sloppyBee.sprites.sky.height = gameHeight;

}

function render() {
    // game.debug.pointer(game.input.pointer1);
}

function update() {
    if (game.input.pointer1.isDown) {
        this.sloppyBee.sprites.bee.fallingStage = 0;
        this.sloppyBee.sprites.bee.escalatingStage++;
        this.sloppyBee.sprites.bee.y -= Math.log(this.sloppyBee.sprites.bee.escalatingStage);
    } else {
        this.sloppyBee.sprites.bee.escalatingStage = 0;
        this.sloppyBee.sprites.bee.fallingStage++;
        this.sloppyBee.sprites.bee.y += Math.log(this.sloppyBee.sprites.bee.fallingStage);
    }
    if (this.sloppyBee.sprites.bee.y >= (gameHeight - this.sloppyBee.sprites.bee.height / 1.5)) {
        game.paused = true;
    }
}

var mainState = {
    preload: preload,
    create: create,
    update: update,
    render: render
};

var game = new Phaser.Game(gameWidth, gameHeight);
game.state.add('main', mainState);
game.state.start('main');