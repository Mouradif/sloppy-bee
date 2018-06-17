function spawnPollen(game, name, bonus) {
	var pollenY = game.rnd.integerInRange(gameHeight - 97, gameHeight / 2.5);
	var pollen = game.add.tileSprite(gameWidth + 48, pollenY, 48, 48, 'pollen1');
	pollen.animations.add('blink');
	pollen.animations.play('blink', 5, true);
	game.sloppyBee.flowers.push({
		name: name,
		sprite: pollen,
		bonus: bonus
	});
}
