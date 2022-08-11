import { generateCoordinatesAB } from './generateCoordinates';
import { generateSize } from './generateSize';

export const generateGameData = (game) => {
	game.forEach((enemy) => {
		let size = generateSize();
		let coordinates = generateCoordinatesAB(size.height, size.width);

		enemy.size = size;
		enemy.coordinates = coordinates;
	});
};
