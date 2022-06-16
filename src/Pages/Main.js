import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Paginator } from '../Components/Paginator';
import { Header } from '../Components/Header';
import { Name } from '../Components/Name';
import { BootSpinner } from '../Decorations/BootSpinner';
import { MainCircles } from '../Decorations/MainCircles';
import { loadingStatus } from '../constants';
import { loadList, setPage, selectList } from '../reducers/list';

let mainContainer = {
	position: 'relative',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
};

let itemsContainerStyle = {
	display: 'flex',
	flexDirection: 'column',
	gap: '18px',
	backgroundColor: '#fffacd',
	borderRadius: '50%',
	padding: '20px 14px',
	marginBottom: '40px',
};

const listItemStyle = {
	display: 'flex',
	justifyContent: 'space-between',
	minWidth: '360px',
};

let countContainerStyle = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontSize: '18px',
	flexBasis: '25%',
};

let nameContainerStyle = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export function Main() {
	const { loading, list, offset, currentPage } = useSelector(selectList);
	const { page } = useParams();
	const dispatch = useDispatch();
	const mountRef = useRef(false);
	
	useEffect(() => {
		if (mountRef.current && currentPage > 0) {
			dispatch(loadList(currentPage));
		}

		mountRef.current = true;
	}, [currentPage]);
	
	useEffect(() => {
		if (Number(page) !== Number(currentPage)) {
			dispatch(setPage(Number(page)));
		}
	}, [page]);

	if (loading === loadingStatus.error) {
		return (
			<main style={mainContainer}>
				<Header>{'Could not load list...'}</Header>
			</main>
		);
	}

	return (
		<main style={mainContainer}> 
			<Header>{'Pokemons'}</Header>
			<MainCircles />
			<Paginator/>
			{loading === loadingStatus.success
				? (
					<div style={itemsContainerStyle}>
						{list.map((pokemon, i) =>{
							return (
								<div
									key={pokemon.name}
									style={listItemStyle}
								>
									<div style={countContainerStyle}>
										{offset + i + 1}
									</div>
									<Name
										nameContainerStyle={nameContainerStyle}
										pokemon={pokemon}
									/>
									<Link to={`/pokemon/${pokemon.name}`}>
										<Button
											size={'lg'}
										>
											{'Details'}
										</Button>
									</Link>
								</div>
							)
						})}
					</div>
				)
				: (
					<main style={mainContainer}>
						<BootSpinner />
					</main>
				)
			}
		</main>
	);
};
