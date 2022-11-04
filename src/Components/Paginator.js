import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectList } from '../reducers/list';
import Pagination from 'react-bootstrap/Pagination';
import { defaultLimit, maxPagesShown } from '../constants';

const paginationStyle = {
	marginBottom: '40px',
};

export const Paginator = () => {
	const { count } = useSelector(selectList);
	const navigate = useNavigate();
	const { page } = useParams();
	const currentPage = Number(page);
	
	const pagesTotal = useMemo(() => {
		return Math.ceil(count / defaultLimit);
	}, [count]);

	if (pagesTotal === 0) {
		return null;
	}

	return (
		<Pagination
			style={paginationStyle}
			size={'lm'}
		>
			<Pagination.Prev
				onClick={() => {navigate(`/${currentPage - 1}`, { replace: true })}}
				disabled={currentPage === 1}
			/>
			{pagesTotal > maxPagesShown
				&& currentPage > 3 && (
					<Pagination.Ellipsis disabled/>
				)}

			{[...Array(pagesTotal > maxPagesShown ? maxPagesShown : pagesTotal)].map((_item, index) => {
				let pageNumber = index + 1;

				if (pagesTotal > maxPagesShown) {
					if (currentPage > 3 && currentPage <= (pagesTotal - 3)) {
						pageNumber += currentPage - 3;
					} else if (currentPage > (pagesTotal - 3)) {
						pageNumber += (pagesTotal - maxPagesShown);
					}
				}

				return (
					<Pagination.Item
						key={pageNumber}
						onClick={() => {navigate(`/${pageNumber}`, { replace: true })}}
						active={pageNumber === currentPage}
					>
						{pageNumber}
					</Pagination.Item>
				)
			})}
			{pagesTotal > maxPagesShown
				&& currentPage <= (pagesTotal - 3) && (
					<Pagination.Ellipsis disabled/>
				)}
			<Pagination.Next
				onClick={() => {navigate(`/${currentPage + 1}`, { replace: true })}}
				disabled={currentPage === pagesTotal}
			/>
		</Pagination>
	);
};