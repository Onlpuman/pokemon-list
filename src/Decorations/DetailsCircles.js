import { Circle } from './Circle';

let mainCirclePosition = {
	top: '15px',
};

let circlePosition_1 = {
	top: '140px',
	right: '-40px',
};

let circlePosition_2 = {
	top: '320px',
	left: '30px',
};

let circlePosition_3 = {
	top: '550px',
	right: '-20px'
};

export const DetailsCircles = () => {

	return (
		<>
			<Circle style = {mainCirclePosition}/>
			<Circle style = {circlePosition_1}/>
			<Circle style = {circlePosition_2}/>
			<Circle style = {circlePosition_3}/>
		</>
	);
};