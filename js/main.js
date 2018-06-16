// Initalization script

function preload() {
	this.load.image('sky','image/sky.jpg');
	this.load.image('bee', 'image/bee.png');
	this.load.image('sol', 'image/sol.png');
	this.load.image('monts', 'image/monts.png');
	this.load.spritesheet('spit1','image/spit1.png',48,48,8 );
    this.load.spritesheet('pollen1','image/pollen.png',48,48,2 );
    this.load.audio('beep','sound/Beep.wav');
    this.load.audio('mbeep','sound/mbeep.wav');
    
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
	this.sloppyBee.moveFunction = touchToFly;
    this.sloppyBee.score = 0;
    this.sloppyBee.scoreText = game.add.text(16, 16, 'score: ' + this.sloppyBee.score, { fontSize: '32px', fill: '#000' });
    this.sloppyBee.beep = game.add.audio('beep');
    this.sloppyBee.mbeep = game.add.audio('mbeep');
//     this.sloppyBee.beep.play();
}
var scoreText;
function render() {
	// game.debug.pointer(game.input.pointer1);
}

function update() {
	parallaxBackgrounds(this);
	this.sloppyBee.moveFunction(this);
	spawnSpit(this, 'spit1', touchToFly, 5);
	spawnSpit(this, 'spit2', staticFly, 4);
	spawnSpit(this, 'spit3', inversTouchToFly, 8);
    spawnPollen(this, 'spit1', 1);
    
	if (
		this.sloppyBee.sprites.bee.y >= (gameHeight - this.sloppyBee.sprites.bee.height / 1.5) ||
		this.sloppyBee.sprites.bee.y < (0 - this.sloppyBee.sprites.bee.height / 2)
	)
		gameOver(this.game);
    this.sloppyBee.scoreText.text = 'Score: ' + this.sloppyBee.score;
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
