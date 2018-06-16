// Initialization script

function preload() {
    game.load.image('starfield', 'image/sky.jpg');
    game.load.image('sol', 'image/sol.png');
    game.load.image('monts', 'image/monts.png');
}

function create() {
   this.sloppyBee = {
       sprites: {
           sky : game.add.tileSprite(0, 0, 800, 600, 'starfield'),
           sol : game.add.tileSprite(0, 0, 800, 600, 'sol'),
           monts : game.add.tileSprite(0, 0, 800, 600, 'monts')
       }
    }
}

function update() {
    this.sloppyBee.sprites.sky.tilePosition.x -= 0.1;
    this.sloppyBee.sprites.sol.tilePosition.x-=2.5;
    this.sloppyBee.sprites.monts.tilePosition.x-=0.5;
}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
