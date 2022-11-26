const headerStyle = {
	fontSize: '36px',
	textTransform: 'capitalize',
	textAlign: 'center',
	margin: '40px 0 80px',
};

export const Header = (props) => {
	const children = props.children;
	return (
		<h1 style={headerStyle}>{children}</h1>
	);
};