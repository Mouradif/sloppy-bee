function spawnPollen(game, name, bonus) {
	var pollenIndex = getElementIndexByName(game.sloppyBee.flowers, name);
	var pollen;
	if (pollenIndex == -1){
		var pollenY = game.rnd.integerInRange(0, gameHeight - 200);
		pollen = game.add.tileSprite(gameWidth + 48, pollenY, 48, 48, 'pollen1');
		pollen.animations.add('blink');
		pollen.animations.play('blink', 24, true);
		pollen.scale.setTo(1.5);
		game.sloppyBee.flowers.push({
			name: name,
			sprite: pollen
		});
	} else {
		pollen = game.sloppyBee.flowers[pollenIndex];
		pollen.sprite.x -=2.5;
		if (isColliding(pollen.sprite, game.sloppyBee.sprites.bee, 20)){
            game.sloppyBee.score += bonus;
            pollen.sprite.destroy();
        }
			
		if (pollen.sprite.x < -48) {
			pollen.sprite.destroy();
			game.sloppyBee.flowers.splice(pollenIndex, 1);
		}
	}
}
