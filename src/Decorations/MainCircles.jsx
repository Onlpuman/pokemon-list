import { Circle } from './Circle';

const mainCirclePosition = {
	top: '15px',
};
const circlePosition_1 = {
	top: '140px',
	right: '-40px',
};
const circlePosition_2 = {
	top: '320px',
	left: '30px',
};
const circlePosition_3 = {
	top: '550px',
	right: '-20px',
};
const circlePosition_4 = {
	top: '800px',
	left: '-50px',
};
const circlePosition_5 = {
	top: '1000px',
	right: '-10px',
};
const circlePosition_6 = {
	top: '1200px',
	left: '-15px',
};
const circlePosition_7 = {
	top: '1500px',
	right: '-35px',
};
const circlePosition_8 = {
	top: '1700px',
	left: '5px',
};
const circlePosition_9 = {
	top: '1900px',
	right: '-50px',
};
const circlePosition_10 = {
	top: '2250px',
	left: '-20px',
};

export const MainCircles = () => {
	return (
		<>
			<Circle style = {mainCirclePosition}/>
			<Circle style = {circlePosition_1}/>
			<Circle style = {circlePosition_2}/>
			<Circle style = {circlePosition_3}/>
			<Circle style = {circlePosition_4}/>
			<Circle style = {circlePosition_5}/>
			<Circle style = {circlePosition_6}/>
			<Circle style = {circlePosition_7}/>
			<Circle style = {circlePosition_8}/>
			<Circle style = {circlePosition_9}/>
			<Circle style = {circlePosition_10}/>
		</>
	);
};