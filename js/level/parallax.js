function parallaxBackgrounds(game) {
	game.sloppyBee.sprites.sky.tilePosition.x -= window.gameSpeed / 25;
	game.sloppyBee.sprites.monts.tilePosition.x -= window.gameSpeed / 5;
	game.sloppyBee.sprites.sol.tilePosition.x -= window.gameSpeed;
}