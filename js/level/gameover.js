function gameOver(game) {
	// Not working :(
	game.sloppyBee.audio.death.play();
	game.gameOver = true;
	game.gameStarted = false;

	/* TODO: Add Text on Screen with Score + Button retry */
	var styleR = { font: '65px Arial', fill: '#4286f4', align: 'center' };
    var styleScore = { font: '65px Arial', fill: '#ff0044', align: 'center' };
    game.gameOverBox = game.add.sprite(gameWidth / 2 - 192 / 2, gameHeight / 2 - 96 / 2, 'gameOverPannel');
    game.leSaviezVous = game.add.sprite(gameWidth / 2 - 64, game.gameOverBox.y + 7, 'leSaviezVous');
    game.buttonR = game.add.sprite(game.gameOverBox.x + 71, game.gameOverBox.y + game.gameOverBox.height - 10, 'buttonRejouer');
    game.buttonC = game.add.sprite(game.gameOverBox.x + game.gameOverBox.width - 93, game.gameOverBox.y + game.gameOverBox.height - 10, 'buttonClassement');
	//game.finalScore = game.add.text(gameWidth/2 - 100,gameHeight/2 - 60, 'Score: ' + game.sloppyBee.score, styleScore);
	//game.buttonR = game.add.text(gameWidth/2 - 100,gameHeight/2, 'Rejouer', styleR);
	//game.buttonR.inputEnabled = true;
	//game.buttonR.events.onInputDown.add(function() {
	//	beeRestart(game);
	//}, game);
}

function beeRestart (game) {
	while(game.sloppyBee.enemies.length > 0) {
		game.sloppyBee.enemies[0].sprite.destroy();
		game.sloppyBee.enemies.shift();
	}
	while(game.sloppyBee.flowers.length > 0) {
		game.sloppyBee.flowers[0].sprite.destroy();
		game.sloppyBee.flowers.shift();
	}
	game.sloppyBee.sprites.bee.x = gameWidth / 2;
	game.sloppyBee.sprites.bee.y = gameHeight / 2;
	game.sloppyBee.score = 0;
	game.sloppyBee.gameDifficulty = 0;
	//game.buttonR.destroy();
	//game.finalScore.destroy();
	game.gameOver = false;
	game.sloppyBee.moveFunction = touchToFly;
	game.game.time.events.add(Phaser.Timer.SECOND * 1, function(){
		game.gameOver = false;
	}, game);
}