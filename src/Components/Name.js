let nameStyle = {
	fontSize: '18px',
	color: '#404040',
};

export const Name = props => {
	const {pokemon, nameContainerStyle} = props;

	let finishNameStyles = Object.assign({}, nameStyle, nameContainerStyle);
	let name = pokemon.name;
	
	const cutName = name => {
		if (name.length > 11){
			name = `${name.slice(0,11)}..`;
		}
		return name.slice(0,1).toUpperCase() + name.slice(1);
	};

	return (
		<span
			title={name}
			style={finishNameStyles}
		>
			{cutName(name)}
		</span>
	);
};