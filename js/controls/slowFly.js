function slowFly(game) {
	if (game.input.activePointer.isDown) {
		game.sloppyBee.sprites.bee.fallingStage = 1;
		game.sloppyBee.sprites.bee.escalatingStage++;
		game.sloppyBee.sprites.bee.y -= Math.log(game.sloppyBee.sprites.bee.escalatingStage) * gameSpeed * (gameHeight / 500) * 0.4;
	} else {
		game.sloppyBee.sprites.bee.escalatingStage = 1;
		game.sloppyBee.sprites.bee.fallingStage++;
		game.sloppyBee.sprites.bee.y += Math.log(game.sloppyBee.sprites.bee.fallingStage) * gameSpeed * (gameHeight / 500) * 0.4;
	}
}