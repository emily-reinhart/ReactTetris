export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;

export const createStage = () =>
	// creates 2-d array/grid of tetris stage
	Array.from(Array(STAGE_HEIGHT), () => new Array(STAGE_WIDTH).fill([ 0, 'clear' ]));

export const checkCollision = (player, stage, { x: moveX, y: moveY }) => {
	for (let y = 0; y < player.tetromino.length; y += 1) {
		for (let x = 0; x < player.tetromino[y].length; x += 1) {
			// check that we are on an actual cell
			if (player.tetromino[y][x] !== 0) {
				if (
					// check that move inside game area height (y)
					// don't go thru bottom of area
					!stage[y + player.pos.y + moveY] ||
					// check that move inside game area width (x)
					!stage[y + player.pos.y + moveY][x + player.pos.x + moveX] ||
					// check that cell isn't clear
					stage[y + player.pos.y + moveY][x + player.pos.x + moveX][1] !== 'clear'
				) {
					return true;
				}
			}
		}
	}
};
