import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';

import { Header } from '../Components/Header';
import { BootSpinner } from '../Decorations/BootSpinner';
import { SpanSkills } from '../Components/SpanSkills';
import { DetailsCircles } from '../Decorations/DetailsCircles';
import { loadPokemon, remove } from '../reducers/pokemonSlice';
import { loadingStatus } from '../constants';

const containerStyle = {
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

const divItemsStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: '18px',
	backgroundColor: '#fffacd',
	borderRadius: '50%',
	padding: '20px 14px',
	marginBottom: '20px',
};

const listItemStyle = {
	display: 'flex',
	justifyContent: 'space-evenly',
	minWidth: '220px',
};

export function Details() {
	const { current, loading } = useSelector(state => state.pokemon);
	const dispatch = useDispatch();
	const { name } = useParams();

	useEffect(() => {
		dispatch(loadPokemon(name));
		return () => {
			dispatch(remove());
		};
	}, []);

	if (loading === loadingStatus.error) {
		return (
			<div style={containerStyle}>
				<Header>{`Could\'t load ${name} pokemon details`}</Header>
				<Link to={'/'}>
					<Button
						size={'lg'}
					>
						{'Return'}
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div style={containerStyle}>
			<Header>{name}</Header>
			<DetailsCircles />
			{loading === loadingStatus.success
				? (
					<>
						<div style={divItemsStyle}>
							<div style={listItemStyle}>
								<SpanSkills>{'Weight:'}</SpanSkills>
								<SpanSkills>{current.weight}</SpanSkills>
							</div>
							<div style={listItemStyle}>
								<SpanSkills>{'Experience:'}</SpanSkills>
								<SpanSkills>{current.base_experience}</SpanSkills>
							</div>
							<div style={listItemStyle}>
								<SpanSkills>{'Height:'}</SpanSkills>
								<SpanSkills>{current.height}</SpanSkills>
							</div>
						</div>
						<div style={{width: '96px', height: '96px', marginBottom: '20px'}}>
							<img src={current.sprites.back_default} alt={'pokemon picture'}/>
						</div>
						<Link to={-1}>
							<Button
								size={'lg'}
							>
								{'Return'}
							</Button>
						</Link>
					</>
				)
				: <BootSpinner />
			}
		</div>
	);
}
