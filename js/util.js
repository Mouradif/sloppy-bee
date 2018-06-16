function getElementIndexByName(array, name) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].name == name) {
			return i;
		}
	}
	return -1;
}

function isColliding(sprite1, sprite2, tolerance) {
	if (!tolerance)
		tolerance = 0;
	var diffX = Math.abs(sprite1.x - sprite2.x) + tolerance;
	var diffY = Math.abs(sprite1.y - sprite2.y) + tolerance;
	if (
		diffX < (sprite1.width / 2 + sprite2.width / 2) &&
		diffY < (sprite1.height / 2 + sprite2.height / 2)
	)
		return true;
	return false;
}