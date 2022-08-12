export const generateSpeed = (screenSize) => {
	let speed = Math.floor(Math.random() * (9 - 3)) + 3;
	let ratio = 1;

	if (screenSize >= 500000 && screenSize < 1000000) {
		ratio = 1.6;
	}
	if (screenSize >= 1000000) {
		ratio = 2.4;
	}

	speed = speed * ratio;

	return speed;
};
