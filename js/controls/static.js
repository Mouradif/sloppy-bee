function staticFly(game){
	if (game.input.activePointer.isDown) {
		game.sloppyBee.sprites.bee.fallingStage = 0;
		game.sloppyBee.sprites.bee.escalatingStage++;
		game.sloppyBee.sprites.bee.y -= window.gameSpeed * (gameHeight / 500) * 2.5;
	} else {
		game.sloppyBee.sprites.bee.escalatingStage = 0;
		game.sloppyBee.sprites.bee.fallingStage++;
		game.sloppyBee.sprites.bee.y += window.gameSpeed * (gameHeight / 500) * 2.5;
	}
}