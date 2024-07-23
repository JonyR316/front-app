import styled from "styled-components";

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const PageButton = styled.button`
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px 15px;
  margin: 0 5px;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `
    background-color: #000;
    color: #fff;
  `}
  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePageClick = (page) => {
    onPageChange(page);
    window.location.href = `?page=${page}`;
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <PageButton
        key={i}
        active={i === currentPage}
        onClick={() => handlePageClick(i)}
      >
        {i}
      </PageButton>
    );
  }

  return <PaginationWrapper>{pages}</PaginationWrapper>;
}
