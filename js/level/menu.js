var mainMenu = {
	preload: function(game) {

		this.load.image('vent','image/vent.png');
        this.load.image('jouer','image/jouer.png');
		this.load.image('fleur','image/solfleuri.png');
		this.load.image('unicorn','image/unicorn.png');
		this.load.spritesheet('bee','image/bee.png', 48, 34, 3);
		this.load.image('sky','image/sky.png');
		this.load.audio('menu','son/menuLoop.wav');
		this.load.image('jouer','image/joue.png');
	},
	create: function(game) {
		this.audioMenu = game.add.audio('menu');
		this.audioMenu.play('',0,0.3,true);
		this.imagMenu = {
			sprites: {
				sky: this.add.tileSprite(0, 0, gameWidth, gameHeight, 'sky'),
				unicorn: this.add.sprite(gameWidth/2-gameWidth*0.3, gameHeight / 2, 'unicorn'),
				bee: this.add.sprite(gameWidth/2-gameWidth*0.3, gameHeight / 2, 'bee'),
				fleur: this.add.tileSprite(0, gameHeight - 107, gameWidth, 107, 'fleur'),
                
				//            bebe : this.add.sprite(0, 0, 'bebe'),
                
				vent: this.add.tileSprite(0, 0, gameWidth, gameHeight, 'vent'),
                jouer: this.add.sprite(gameWidth/2-gameWidth*0.3, gameHeight / 2 -100, 'jouer')
			}
		};
		var t = this.imagMenu.sprites.Jouer.inputEnabled = true;
		t.events.onInputDown.add(laucher, this);
	},
	update: function(game) {
		this.imagMenu.sprites.sky.tilePosition.x -= window.gameSpeed*0.1 ;
		this.imagMenu.sprites.fleur.tilePosition.x -= window.gameSpeed*1.1 ;
		this.imagMenu.sprites.vent.tilePosition.x -= window.gameSpeed*10 ;
		this.imagMenu.sprites.bee.x += window.gameSpeed * 2;
		var rnd = game.rnd.integerInRange(-5, 5);
		this.imagMenu.sprites.bee.y = rnd;
		if(this.imagMenu.sprites.bee.x > gameWidth+this.imagMenu.sprites.bee.width ){
			this.imagMenu.sprites.bee.x = 0 - this.imagMenu.sprites.bee.width;
		}
		this.imagMenu.sprites.unicorn.x += window.gameSpeed * 0.2;
		if(this.imagMenu.sprites.unicorn.x > gameWidth+this.imagMenu.sprites.unicorn.width ){
			this.imagMenu.sprites.unicorn.x = 0 - this.imagMenu.sprites.unicorn.width;
		}
	},
	shutdown: function() {
		this.audioMenu.stop();
	}
};

function laucher() {
	this.state.start('main');
}