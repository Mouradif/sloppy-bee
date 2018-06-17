function gameOver(game) {
	// Not working :(
	game.sloppyBee.audio.death.play();
	game.gameOver = true;
	game.gameStarted = false;

	/* TODO: Add Text on Screen with Score + Button retry */
    var styleR = { font: '65px Arial', fill: '#4286f4', align: 'center' };
    var styleScore = { font: '65px Arial', fill: '#ff0044', align: 'center' };
    var finalScore = game.add.text(gameWidth/2-gameWidth*0.25,gameHeight/2 , 'Score: ' + game.sloppyBee.score, styleScore);
    var buttonR = game.add.text(gameWidth/2+10,gameHeight/2 , 'Rejouer', styleR);
    buttonR.inputEnabled = true;
    buttonR.events.onInputDown.add(beeRestart, this);
}

function beeRestart () {
    game.state.start(game.state.current);
}