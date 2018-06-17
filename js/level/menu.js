var mainMenu = {
	preload: function(game) {

        this.load.image('vent','image/vent.png');
        this.load.image('fleur','image/fleur.png');
        this.load.image('bee','image/licon.png');
        this.load.image('sky','image/sky.png');
        this.load.audio('menu','son/menuLoop.wav');
        this.load.image('jouer','image/joue.png');
    },
	create: function(game) {
        audioMenu = game.add.audio('menu');
        audioMenu.play('',0,0.3,true);
       this.imagMenu = {
		sprites: {
            sky: this.add.tileSprite(0, 100, gameWidth, gameHeight, 'sky'),
            bee: this.add.sprite(gameWidth/2-gameWidth*0.3, gameHeight/2, 'bee'),
            fleur: this.add.tileSprite(0, 200, gameWidth, gameHeight, 'fleur'),
//            bebe : this.add.sprite(0, 0, 'bebe'),
			vent: this.add.tileSprite(0, 0, gameWidth, gameHeight, 'vent'),
//			licon : game.add.tileSprite(0, 0, gameWidth, gameHeight, 'licon')
		}
           
        
//        
        
       }
    
    var text = "Jouer";
    var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
    var t = game.add.text(gameWidth/2-60, 0, text, style);
        t.inputEnabled = true;
        t.events.onInputDown.add(laucher, this);
        
    },
	update: function(game) {
        
        this.imagMenu.sprites.sky.tilePosition.x -= gameSpeed*0.1 ;
        this.imagMenu.sprites.fleur.tilePosition.x -= gameSpeed*1.1 ;
        this.imagMenu.sprites.vent.tilePosition.x -= gameSpeed*10 ;
        this.imagMenu.sprites.bee.x += gameSpeed * 0.2;
        if(this.imagMenu.sprites.bee.x > gameWidth+this.imagMenu.sprites.bee.width ){
            this.imagMenu.sprites.bee.x = 0 - this.imagMenu.sprites.bee.width;
        }
       
    }

    
};

function laucher() {
    this.state.start('main');
}