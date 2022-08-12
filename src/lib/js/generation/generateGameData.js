import { generateCoordinatesAB } from './generateCoordinates';
import { generateSize } from './generateSize';
import { generateSpeed } from './generateSpeed';
import { generateScore } from './generateScore';

export const generateGameData = (game) => {
	let screenSize = window.innerHeight * window.innerWidth;

	game.forEach((enemy) => {
		let speed = generateSpeed(screenSize);
		let size = generateSize(screenSize);
		let coordinates = generateCoordinatesAB(size.height, size.width);
		let score = generateScore(speed, size);

		enemy.speed = speed;
		enemy.size = size;
		enemy.score = score;
		enemy.coordinates = coordinates;
	});
};
