let circleStyle = {
	position: 'absolute',
	width: '100px',
	height: '100px',
	borderRadius: '50%',
	backgroundColor: '#fadadd',
	zIndex: '-1',
};

export const Circle = (props) => {
	const {style} = props;
	
	let finishCircleStyles = Object.assign({}, circleStyle, style);

	return (
		<div
			style={finishCircleStyles} 
		/>
	);
};
