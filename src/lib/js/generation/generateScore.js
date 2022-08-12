export const generateScore = (speed, size) => {
	let avgScore = (speed * size.height) / 10;
	let score = 2;

	if (avgScore < 10) {
		score = 50;
	} else if (avgScore < 15) {
		score = 20;
	} else if (avgScore < 20) {
		score = 15;
	} else if (avgScore < 25) {
		score = 10;
	} else if (avgScore < 30) {
		score = 5;
	}

	console.log(size.height, speed, score);
	return score;
};
