const Pagination = (props) => {
  const { totalPages, handlePageChange, currentPage, startPage, endPage } =
    props;

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>

      {/* tombol angka page */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const number = startPage + index;
        return (
          <button
            key={number}
            style={{
              marginRight: "5px",
              fontWeight: currentPage === number ? "bold" : "normal",
            }}
            onClick={() => {
              handlePageChange(number);
            }}
          >
            {number}
          </button>
        );
      })}

      {/* <button onClick={() => handlePageChange(totalPages)}>{totalPages}</button> */}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage == totalPages}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
