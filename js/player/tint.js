function tintTheBee(game) {
	if (game.sloppyBee.sprites.bee.tintingFramesRemaining > 0) {
		game.sloppyBee.sprites.bee.tint = Math.random() * 0xffffff;
		game.sloppyBee.sprites.bee.tintingFramesRemaining--;
	} else {
		game.sloppyBee.sprites.bee.tint = game.sloppyBee.sprites.bee.originalTint;
	}
}