function spawnPollen(game, name, bonus) {
	var pollenY = game.rnd.integerInRange(0, gameHeight - 200);
	var pollen = game.add.tileSprite(gameWidth + 48, pollenY, 48, 48, 'pollen1');
	pollen.animations.add('blink');
	pollen.animations.play('blink', 5, true);
	game.sloppyBee.flowers.push({
		name: name,
		sprite: pollen,
		bonus: bonus
	});
}
