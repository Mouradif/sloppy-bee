// Initalization script

function preload () {
    this.load.image('sky','image/sky.png');
    this.load.image('bee', 'image/bee.png');
}


function create () {
    var sky = this.add.image(0, 0, 'sky');
    sky.width = gameWidth;
    sky.height = gameHeight;
    this.physics.startSystem(Phaser.Physics.ARCADE);
    this.bee = this.add.sprite(gameWidth / 2, gameHeight / 2, 'bee');
}

function update () {
}

var mainState = {
    preload: preload,
    create: create,
    update: update
};

var game = new Phaser.Game(gameWidth, gameHeight);
game.state.add('main', mainState);
game.state.start('main');