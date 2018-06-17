function spawnSpit(game, name, sprite, malus, speed, top) {
	var max = (top) ? 100 : gameHeight / 3;
	var spitY = game.rnd.integerInRange(gameHeight - 97, max);
	var spit = game.add.tileSprite(gameWidth + 48, spitY, 48, 48, sprite);
	spit.animations.add('glow');
	spit.animations.play('glow', 24, true);
	spit.scale.setTo(1.5);
	game.sloppyBee.enemies.push({
		name: name,
		sprite: spit,
		malus: malus,
		speed: speed
	});
}
