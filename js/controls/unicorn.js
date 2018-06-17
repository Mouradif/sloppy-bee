function unicornMove(game) {
    game.sloppyBee.unicornFramesRemaining--;
    game.sloppyBee.sprites.bee.y = game.sinus[game.sloppyBee.unicornFramesRemaining];
    if (game.sloppyBee.unicornFramesRemaining == 0) {
        window.gameSpeed = game.previousGameSpeed;
        game.sloppyBee.audio.unicorn.stop();
        game.sloppyBee.audio.game.resume();
        game.sloppyBee.sprites.bee.loadTexture('bee');
	    game.sloppyBee.sprites.bee.animations.add('fly');
	    game.sloppyBee.sprites.bee.animations.play('fly', 10, true);
    }
}