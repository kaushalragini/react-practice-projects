function Pagination({ totalPages, page, pageHandler }) {
  const prev = <button data-testid="prev-page" onClick={() => {
    pageHandler(-1)

  }}
    disabled={page <= 1 ? "disabled" : ""} >PREV</button>;
  const currentPage = <button data-testid="current-page">{page}</button>;
  const next = <button data-testid="next-page"
    onClick={() => {
      pageHandler(1)
    }}
    disabled={page === totalPages ? "disabled" : ""}
  >NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">{totalPages}</b>{" "}
    </div>
  );
  return (
    <div data-testid="pagination-container">
      {prev}
      {currentPage}
      {next}
      {totalPagesElem}
    </div>
  );
}

export default Pagination;
