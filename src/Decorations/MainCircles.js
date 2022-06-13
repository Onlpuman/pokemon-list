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
let circlePosition_4 = {
	top: '800px',
	left: '-50px'
};
let circlePosition_5 = {
	top: '1000px',
	right: '-10px'
};
let circlePosition_6 = {
	top: '1200px',
	left: '-15px',
};
let circlePosition_7 = {
	top: '1500px',
	right: '-35px',
};
let circlePosition_8 = {
	top: '1700px',
	left: '5px',
};
let circlePosition_9 = {
	top: '1900px',
	right: '-50px',
};
let circlePosition_10 = {
	top: '2200px',
	left: '-20px',
};
let circlePosition_11 = {
	top: '2600px',
	right: '-20px',
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
			<Circle style = {circlePosition_11}/>
		</>
	);
};