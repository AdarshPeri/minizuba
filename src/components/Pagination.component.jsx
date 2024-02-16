/* eslint-disable react/prop-types */
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.4rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 600;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 0.6rem;
`;

const PaginationButton = styled.button`
  background-color: #eef2ff;
  color: inherit;
  border: none;
  border-radius: 5px;
  font-weight: 500;
  font-size: 1.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1.2rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 1.8rem;
    width: 1.8rem;
  }

  &:hover:not(:disabled) {
    background-color: #4f46e5;
    color: #f9fafb;
  }
`;

export const PAGE_SIZE = 10;

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageDetails = searchParams.get('page');
  const currentPage = !pageDetails ? 1 : +pageDetails;
  

  const pageCount = Math.ceil(count / PAGE_SIZE);
  const isLastPage = currentPage === pageCount;
  const isFirstPage = currentPage === 1;

  const nextPage = () => {
    const next = isLastPage ? currentPage : currentPage + 1;
    searchParams.set('page', next);
    setSearchParams(searchParams);
  };

  const previousPage = () => {
    const prev = isFirstPage ? currentPage : currentPage - 1;
    searchParams.set('page', prev);
    setSearchParams(searchParams);
  };

  if(pageCount <= 1) return null;

  return ( 
    <StyledPagination>
      <P>
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span> to{' '}
        <span>{isLastPage ? count : (currentPage * PAGE_SIZE)}</span> of{' '}
        <span>{count}</span> results.
      </P>
      <Buttons>
        <PaginationButton onClick={previousPage} disabled={isFirstPage}>
          <HiChevronLeft /> <span>Previous</span>
        </PaginationButton>
        <PaginationButton onClick={nextPage} disabled={isLastPage}>
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </Buttons>
    </StyledPagination>
  );
};

export default Pagination;
