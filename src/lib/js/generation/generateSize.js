export const generateSize = (screenSize) => {
	let size = Math.floor(Math.random() * (51 - 25)) + 25;
	let ratio = 1;

	if (screenSize >= 500000 && screenSize < 1000000) {
		ratio = 1.4;
	}
	if (screenSize >= 1000000) {
		ratio = 1.9;
	}

	let height = size * ratio;
	let width = size * ratio;

	return { height, width };
};
