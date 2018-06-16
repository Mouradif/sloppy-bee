function spawnSpit(game, name, malus, speed) {
	var spitIndex = getElementIndexByName(game.sloppyBee.enemies, name);
	var spit;
	if (spitIndex == -1){
		var spitY = game.rnd.integerInRange(0, gameHeight - 200);
		spit = game.add.tileSprite(gameWidth + 48, spitY, 48, 48, 'spit1');
		spit.animations.add('glow');
		spit.animations.play('glow', 24, true);
		game.sloppyBee.enemies.push({
			name: name,
			sprite: spit
		});
	} else {
		spit = game.sloppyBee.enemies[spitIndex];
		spit.sprite.x -= speed;
		if (isColliding(spit.sprite, game.sloppyBee.sprites.bee, 20))
			game.sloppyBee.moveFunction = malus;
		if (spit.sprite.x < -48) {
			spit.sprite.destroy();
			game.sloppyBee.enemies.splice(spitIndex, 1);
		}
	}
}