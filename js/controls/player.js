function touchToFly(game) {
	if (game.input.pointer1.isDown) {
		game.sloppyBee.sprites.bee.fallingStage = 0;
		game.sloppyBee.sprites.bee.escalatingStage++;
		game.sloppyBee.sprites.bee.y -= Math.log(game.sloppyBee.sprites.bee.escalatingStage);
	} else {
		game.sloppyBee.sprites.bee.escalatingStage = 0;
		game.sloppyBee.sprites.bee.fallingStage++;
		game.sloppyBee.sprites.bee.y += Math.log(game.sloppyBee.sprites.bee.fallingStage);
	}
}

function inversTouchToFly(game) {
	if (game.input.pointer1.isDown) {
		game.sloppyBee.sprites.bee.fallingStage = 0;
		game.sloppyBee.sprites.bee.escalatingStage++;
		game.sloppyBee.sprites.bee.y += Math.log(game.sloppyBee.sprites.bee.escalatingStage);
	} else {
		game.sloppyBee.sprites.bee.escalatingStage = 0;
		game.sloppyBee.sprites.bee.fallingStage++;
		game.sloppyBee.sprites.bee.y -= Math.log(game.sloppyBee.sprites.bee.fallingStage);
	}
}

function staticFly(game){
	if (game.input.pointer1.isDown) {
		game.sloppyBee.sprites.bee.fallingStage = 0;
		game.sloppyBee.sprites.bee.escalatingStage++;
		game.sloppyBee.sprites.bee.y -= 8;
	} else {
		game.sloppyBee.sprites.bee.escalatingStage = 0;
		game.sloppyBee.sprites.bee.fallingStage++;
		game.sloppyBee.sprites.bee.y += 8;
	}
}