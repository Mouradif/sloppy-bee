function gameOver(game) {
	// Not working :(
	game.sloppyBee.audio.death.play();
	game.gameOver = true;
	game.gameStarted = false;

	/* TODO: Add Text on Screen with Score + Button retry */
	var styleR = { font: '65px Arial', fill: '#4286f4', align: 'center' };
	var styleScore = { font: '65px Arial', fill: '#ff0044', align: 'center' };
	game.buttonR= game.add.sprite(gameWidth / 2 - 192, gameHeight / 2 - 96, 'fullGameOverPannel');
	//game.finalScore = game.add.text(gameWidth/2 - 100,gameHeight/2 - 60, 'Score: ' + game.sloppyBee.score, styleScore);
	//game.buttonR = game.add.text(gameWidth/2 - 100,gameHeight/2, 'Rejouer', styleR);
	game.buttonR.inputEnabled = true;
	game.buttonR.events.onInputDown.add(function() {
		beeRestart(game);
	}, game);
}

function beeRestart(game) {
	while(game.sloppyBee.enemies.length > 0) {
		game.sloppyBee.enemies[0].sprite.destroy();
		game.sloppyBee.enemies.shift();
	}
	while(game.sloppyBee.flowers.length > 0) {
		game.sloppyBee.flowers[0].sprite.destroy();
		game.sloppyBee.flowers.shift();
	}
	game.game.time.events.add(Phaser.Timer.SECOND * 0.2, function(){
		game.sloppyBee.sprites.bee.x = gameWidth / 2;
		game.sloppyBee.sprites.bee.y = gameHeight / 2;
		game.sloppyBee.score = 0;
		game.sloppyBee.gameDifficulty = 0;
		game.gameOver = false;
		game.sloppyBee.moveFunction = touchToFly;
	    game.buttonR.destroy();
		game.gameStarted = false;
		game.gameOver = false;
	}, game);
}