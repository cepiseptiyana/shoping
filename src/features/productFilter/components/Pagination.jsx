const Pagination = (props) => {
  const { goToPage, currentPage, endPage, startPage, totalPages } = props;

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <button
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        prev
      </button>

      {/* tombol angka page */}
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        const page = startPage + index;

        return (
          <button
            key={index + 1}
            onClick={() => goToPage(page)}
            style={{
              fontWeight: currentPage === page ? "bold" : "normal",
            }}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
