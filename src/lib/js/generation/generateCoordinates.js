export const generateCoordinatesAB = (height, width) => {
	const game = document.querySelector('#game');

	let gameHeight = window.innerHeight;
	let gameWidth = window.innerWidth;

	let direction = Math.floor(Math.random() * 4);
	let xA = 0;
	let yA = 0;
	let xB = 0;
	let yB = 0;

	switch (direction) {
		// haut vers bas
		case 0:
			xA = Math.floor(Math.random() * (gameWidth - width));
			yA = -height;
			xB = Math.floor(Math.random() * (gameWidth - width));
			yB = gameHeight + height;
			break;
		// bas vers haut
		case 1:
			xA = Math.floor(Math.random() * (gameWidth - width));
			yA = gameHeight + height;
			xB = Math.floor(Math.random() * (gameWidth - width));
			yB = -height;
			break;
		// gauche vers droite
		case 2:
			xA = -width;
			yA = Math.floor(Math.random() * (gameHeight - height));
			xB = gameWidth + width;
			yB = Math.floor(Math.random() * (gameHeight - height));
			break;
		// droite vers gauche
		case 3:
			xA = gameWidth + width;
			yA = Math.floor(Math.random() * (gameHeight - height));
			xB = -width;
			yB = Math.floor(Math.random() * (gameHeight - height));
			break;
		default:
			break;
	}

	let translationX = xB - xA;
	let translationY = yB - yA;

	return { xA, yA, translationX, translationY };
};
