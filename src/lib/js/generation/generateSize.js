export const generateSize = () => {
	let size = Math.floor(Math.random() * (81 - 25)) + 25;
	let screenSize = window.innerHeight * window.innerWidth;
	let ratio = 1;

	if (screenSize > 55000) {
		ratio = 1.3;
	}

	let height = size * ratio;
	let width = size * ratio;

	return { height, width };
};
