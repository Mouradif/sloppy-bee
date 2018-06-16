// Initalization script

function preload() {
	this.load.image('sky','image/sky.jpg');
	this.load.image('bee', 'image/bee.png');
	this.load.image('sol', 'image/sol.png');
	this.load.image('monts', 'image/monts.png');
}


function create () {
	this.sloppyBee = {
		sprites: {
			sky: game.add.tileSprite(0, 0, gameWidth, gameHeight, 'sky'),
			sol : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'sol'),
			monts : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'monts'),
			bee: this.add.sprite(gameWidth / 2, gameHeight / 2, 'bee')
		},
		enemies: [],
		flowers: []
	};

	this.sloppyBee.sprites.bee.fallingStage = 0;
	this.sloppyBee.sprites.bee.escalatingStage = 0;

}

function render() {
	// game.debug.pointer(game.input.pointer1);
}

function update() {
	this.sloppyBee.sprites.sky.tilePosition.x -= 0.1;
	this.sloppyBee.sprites.sol.tilePosition.x-=2.5;
	this.sloppyBee.sprites.monts.tilePosition.x-=0.5;
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
