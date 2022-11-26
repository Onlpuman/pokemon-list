import Spinner from 'react-bootstrap/Spinner';

const spinnerStyle = {
	marginTop: '5%',
};

export const BootSpinner = () => {
	return (
		<Spinner
			style={spinnerStyle}
			animation="border"
			variant="warning"
		/>
	);
};