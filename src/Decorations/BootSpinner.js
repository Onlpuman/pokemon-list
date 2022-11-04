import Spinner from 'react-bootstrap/Spinner';

const spinnerStyle = {
	marginTop: '5%',
};

export const BootSpinner = props => {
	
	return (
		<Spinner
			style={spinnerStyle}
			animation="border"
			variant="warning"
		/>
	);
};