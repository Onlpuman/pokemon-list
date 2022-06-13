import Spinner from 'react-bootstrap/Spinner';

let spinnerStyle = {
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