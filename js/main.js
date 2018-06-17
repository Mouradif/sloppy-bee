// Initalization script

function preload() {
	this.load.image('sky','image/sky.png');
	this.load.image('fullGameOverPannel', 'image/full_gameover.png');
	this.load.image('gameOverPannel', 'image/gameover_panel.png');
	this.load.image('leSaviezVous', 'image/lesaviezvous.png');
	this.load.image('buttonRejouer', 'image/rejouer.png');
	this.load.image('buttonClassement', 'image/classement.png');
	//this.load.image('tipsText', 'image/panel_text.png');
	this.load.spritesheet('bee', 'image/bee.png', 48, 34, 3);
	this.load.image('sol', 'image/solfleuri.png');
	this.load.image('monts', 'image/mount.png');
	this.load.spritesheet('bluespit', 'image/spit1.png', 48, 48, 8);
	this.load.spritesheet('brownspit', 'image/spit2.png', 48, 48, 8);
	this.load.spritesheet('pollen1', 'image/fleur1.png', 48, 48, 2);
	this.load.spritesheet('pollen1','image/pollen.png',48,48,2 );
	this.load.audio('beep','son/beep.mp3');
	this.load.audio('mbeep','son/mbeep.mp3');
	this.load.audio('death','son/die.wav');
	this.load.audio('game','son/gameLoop.wav');	
	this.load.audio('mobAdd','son/mobAdd.mp3');
}


function create () {

	this.sloppyBee = {
		sprites: {
			sky: game.add.tileSprite(0, 0, gameWidth, gameHeight, 'sky'),
			monts : game.add.tileSprite(0, gameHeight - 160, gameWidth, 160, 'monts'),
			sol : game.add.tileSprite(0, gameHeight - 107, gameWidth, 107, 'sol'),
			bee: game.add.sprite(gameWidth / 2, gameHeight / 2, 'bee')
		},
		audio: {
			pollenized: game.add.audio('mbeep'),
			pesticidized: game.add.audio('beep'),
			death: game.add.audio('death'),
			game : game.add.audio('game'),
			mobAdd: game.add.audio('mobAdd')
		},
		enemies: [],
		flowers: []
	};

	this.sloppyBee.sprites.bee.animations.add('fly');
	this.sloppyBee.sprites.bee.animations.play('fly', 10, true);
	if (!this.sloppyBee.audio.game.isPlaying)
		this.sloppyBee.audio.game.play('',0,0.3,true);
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
	this.sloppyBee.gameDifficulty = 0;
	this.gameStarted = false;
	this.gameOver = false;
	this.unicornLevel = 0;
	this.unicornFramesRemaining = 0;
}

function update() {
	if (this.input.activePointer.isDown && this.gameOver == false)
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
	gameSpeed = 2 + this.sloppyBee.gameDifficulty * 0.0001;
	this.sloppyBee.moveFunction(this);
	for (var i = 0; i < this.sloppyBee.enemies.length; i++) {
		spit = this.sloppyBee.enemies[i];
		spit.sprite.x -= spit.speed;
		if (isColliding(spit.sprite, this.sloppyBee.sprites.bee, 5)) {
			this.sloppyBee.moveFunction = spit.malus;
			spit.sprite.destroy();
			this.sloppyBee.audio.pesticidized.play('',0,0.3,false);
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
		if (isColliding(pollen.sprite, this.sloppyBee.sprites.bee, 15)){
			this.sloppyBee.score += pollen.bonus;
			if (!this.sloppyBee.audio.pollenized.isPlaying || this.sloppyBee.audio.pollenized.currentTime > 80)
				this.sloppyBee.audio.pollenized.play('',0,0.3,false);
			pollen.sprite.destroy();
		}
			
		if (pollen.sprite.x < -48) {
			pollen.sprite.destroy();
			this.sloppyBee.flowers.splice(j, 1);
		}
	}
	var randomInt = game.rnd.integer();
	var chance = randomInt % 100;
	if (chance == 0)
		spawnPollen(this, 'pollen', randomInt % 3);
	var shouldSpawnSpit = Math.floor(this.sloppyBee.gameDifficulty / 250) - this.sloppyBee.enemies.length;
	if (shouldSpawnSpit > 1) {
		var malchance = randomInt % 15;
		if (malchance == 0) {
			var enemies = ['bluespit', 'brownspit'];
			var maluses = [inversTouchToFly, staticFly];
			spawnSpit(this, 'spit', enemies[randomInt % enemies.length], maluses[randomInt % maluses.length], (randomInt % 4 + 2) * gameSpeed);
			this.sloppyBee.audio.mobAdd.play('', 0, 0.3, false);
		}
	}
	this.sloppyBee.score = Math.round(this.sloppyBee.score);
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
game.state.add('menu',mainMenu);
game.state.add('over',mainOver);
game.state.start('menu');
