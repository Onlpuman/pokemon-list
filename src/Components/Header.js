const HeaderStyle = {
	fontSize: '36px',
	textTransform: 'capitalize',
	textAlign: 'center',
	margin: '40px 0 80px',
};

export const Header = (props) => {
	const children = props.children;
	return (
		<h1 style={HeaderStyle}>{children}</h1>
	);
};