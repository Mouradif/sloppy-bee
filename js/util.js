function getElementIndexByName(array, name) {
	for (var i = 0; i < array.length; i++) {
		if (array[i].name == name) {
			return i;
		}
	}
	return -1;
}