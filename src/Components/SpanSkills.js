let skillStyle = {
	fontSize: '18px',
	color: '#404040',
};

export const SpanSkills = props => {
	const children = props.children;

	return (
		<span
			style={skillStyle}
		>
			{children}
		</span>
	);
};