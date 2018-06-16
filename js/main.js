// Initalization script

function preload () {
    this.load.image('sky','image/sky.png');
    this.load.image('bee', 'image/bee.png');
    this.load.image('sol', 'image/sol.png');
    this.load.image('monts', 'image/monts.png');
}


function create () {
   this.sloppyBee = {
       sprites: {
           sky : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'sky'),
           sol : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'sol'),
           monts : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'monts')
       }
    };
}

function update () {
    this.sloppyBee.sprites.sky.tilePosition.x -= 0.1;
    this.sloppyBee.sprites.sol.tilePosition.x-=2.5;
    this.sloppyBee.sprites.monts.tilePosition.x-=0.5;
}

var mainState = {
    preload: preload,
    create: create,
    update: update
};

var game = new Phaser.Game(gameWidth, gameHeight);
game.state.add('main', mainState);
game.state.start('main');
