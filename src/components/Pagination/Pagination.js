import ReactPaginate from 'react-paginate';
import { ReactComponent as ArrowLeft } from './Arrow_Left.svg';
import { ReactComponent as ArrowRight } from './Arrow_Right.svg';
import './Pagination.css';

function Pagination({ page, setPage, perPage, totalItems }) {
  const endIndex = page * perPage;
  const startIndex = endIndex - perPage + 1;
  const pageCount = Math.ceil(totalItems / perPage);

  return (
    <div className="paginationContainer">
      <span>
        {startIndex}-{endIndex} of {totalItems} items
      </span>
      <ReactPaginate
        previousLabel={<ArrowLeft />}
        nextLabel={<ArrowRight />}
        breakLabel={'...'}
        breakClassName="paginationPage"
        previousClassName="paginationPage"
        nextClassName="paginationPage"
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={({ selected }) => {
          setPage(selected + 1);
        }}
        pageClassName="paginationPage"
        containerClassName="paginationPagesContainer"
        activeClassName="paginationActive"
      />
    </div>
  );
}

export default Pagination;
