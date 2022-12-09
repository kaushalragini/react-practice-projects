import React from "react";
function Pagination() {
  const prev = <button data-testid="prev-page">PREV</button>;
  const currentPage = <button data-testid="current-page">1</button>;
  const next = <button data-testid="next-page">NEXT</button>;
  const totalPagesElem = (
    <div>
      Total Pages: <b data-testid="total-pages">10</b>{" "}
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
