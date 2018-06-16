function parallaxBackgrounds(game) {
	game.sloppyBee.sprites.sky.tilePosition.x -= gameSpeed / 25;
	game.sloppyBee.sprites.sol.tilePosition.x -= gameSpeed;
	game.sloppyBee.sprites.monts.tilePosition.x -= gameSpeed / 5;
}