// Initalization script

function preload() {
	this.load.image('sky','image/sky.jpg');
	this.load.image('bee', 'image/bee.png');
	this.load.image('sol', 'image/sol.png');
	this.load.image('monts', 'image/monts.png');
	this.load.spritesheet('bluespit', 'image/spit1.png', 48, 48, 8);
	this.load.spritesheet('brownspit', 'image/spit2.png', 48, 48, 8);
	this.load.spritesheet('pollen1', 'image/fleur1.png', 48, 48, 2);
	this.load.spritesheet('pollen1','image/pollen.png',48,48,2 );
	this.load.audio('beep','son/Beep.wav');
	this.load.audio('mbeep','son/mbeep.wav');
	this.load.audio('death','son/die.wav');
    
}


function create () {
	this.sloppyBee = {
		sprites: {
			sky: game.add.tileSprite(0, 0, gameWidth, gameHeight, 'sky'),
			sol : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'sol'),
			monts : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'monts'),
			bee: game.add.sprite(gameWidth / 2, gameHeight / 2, 'bee')
		},
		audio: {
			pollenized: game.add.audio('mbeep'),
			pesticidized: game.add.audio('beep'),
			death: game.add.audio('death')
		},
		enemies: [],
		flowers: []
	};

	this.sloppyBee.sprites.bee.originalTint = this.sloppyBee.sprites.bee.tint;
	this.sloppyBee.sprites.bee.tintingFramesRemaining = 0;
	this.sloppyBee.sprites.bee.fallingStage = 1;
	this.sloppyBee.sprites.bee.escalatingStage = 1;
	this.sloppyBee.moveFunction = touchToFly;
	this.sloppyBee.score = 0;
	this.sloppyBee.scoreText = game.add.text(16, 16, 'Score: ' + this.sloppyBee.score, {
		fontSize: '32px',
		fill: '#000'
	});
	this.sloppyBee.beep = game.add.audio('beep');
	this.sloppyBee.mbeep = 
	this.sloppyBee.gameDifficulty = 0;
	this.gameStarted = false;
}

function update() {
	if (this.input.activePointer.isDown)
		this.gameStarted = true;
	if (this.gameStarted === false)
		return;
	// Game Over condition
	if (
		this.sloppyBee.sprites.bee.y >= (gameHeight - this.sloppyBee.sprites.bee.height / 1.5) ||
		this.sloppyBee.sprites.bee.y < (0 - this.sloppyBee.sprites.bee.height / 2)
	) {
		gameOver(this);
	}
	this.sloppyBee.gameDifficulty++;
	this.sloppyBee.moveFunction(this);
	for (var i = 0; i < this.sloppyBee.enemies.length; i++) {
		spit = this.sloppyBee.enemies[i];
		spit.sprite.x -= spit.speed;
		if (isColliding(spit.sprite, this.sloppyBee.sprites.bee, 20)) {
			this.sloppyBee.moveFunction = spit.malus;
			spit.sprite.destroy();
			this.sloppyBee.audio.pesticidized.play();
			this.sloppyBee.enemies.splice(i, 1);
			this.sloppyBee.sprites.bee.tintingFramesRemaining = 50;
			this.sloppyBee.score -= spit.speed;
			this.sloppyBee.score = Math.max(0, this.sloppyBee.score);
		}
		if (spit.sprite.x < -48) {
			spit.sprite.destroy();
			this.sloppyBee.enemies.splice(i, 1);
		}
	}
	for (var j = 0; j < this.sloppyBee.flowers.length; j++) {
		pollen = this.sloppyBee.flowers[j];
		pollen.sprite.x -= gameSpeed;
		if (isColliding(pollen.sprite, this.sloppyBee.sprites.bee, 20)){
			this.sloppyBee.score += pollen.bonus;
			if (!this.sloppyBee.audio.pollenized.isPlaying || this.sloppyBee.audio.pollenized.currentTime > 80)
				this.sloppyBee.audio.pollenized.play();
			pollen.sprite.destroy();
		}
			
		if (pollen.sprite.x < -48) {
			pollen.sprite.destroy();
			this.sloppyBee.flowers.splice(j, 1);
		}
	}
	var randomInt = game.rnd.integer();
	var chance = randomInt % 32;
	if (chance == 0)
		spawnPollen(this, 'pollen', randomInt % 3);
	var malchance = Math.floor(this.sloppyBee.gameDifficulty / 250) - this.sloppyBee.enemies.length;
	if (malchance > 1) {
		var enemies = ['bluespit', 'brownspit'];
		var maluses = [inversTouchToFly, staticFly];
		spawnSpit(this, 'spit', enemies[randomInt % enemies.length], maluses[randomInt % maluses.length], (randomInt % 4 + 2) * gameSpeed);
	}
	this.sloppyBee.scoreText.text = 'Score: ' + this.sloppyBee.score;
	parallaxBackgrounds(this);
	tintTheBee(this);

}

var mainState = {
	preload: preload,
	create: create,
	update: update
};

var game = new Phaser.Game(gameWidth, gameHeight);
game.state.add('main', mainState);
game.state.start('main');
