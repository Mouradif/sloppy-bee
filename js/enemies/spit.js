function spawnSpit(game, name, sprite, malus, speed) {
	var spitY = game.rnd.integerInRange(0, gameHeight - 200);
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
