function inversTouchToFly(game) {
	if (game.input.activePointer.isDown) {
		game.sloppyBee.sprites.bee.fallingStage = 0;
		game.sloppyBee.sprites.bee.escalatingStage++;
		game.sloppyBee.sprites.bee.y += Math.log(game.sloppyBee.sprites.bee.escalatingStage) * window.gameSpeed;
	} else {
		game.sloppyBee.sprites.bee.escalatingStage = 0;
		game.sloppyBee.sprites.bee.fallingStage++;
		game.sloppyBee.sprites.bee.y -= Math.log(game.sloppyBee.sprites.bee.fallingStage) * window.gameSpeed;
	}
}