import "./Pagination.scss";

const Pagination = (props) => {
  let paginationContent = [];
  let pagesCount = Math.ceil(props.countOfAllUsers / props.countOfUsersOnPage);
  for (let i = 1; i <= 5; i++) {
    paginationContent.push(i);
  }
  return (
    <div className="users__pagination">
      {paginationContent.map((pageNum) => {
        return (
          <div
            onClick={(e) => {
              props.onPageChanged(pageNum);
            }}
            className={props.currentPage == pageNum ? "active" : ""}
          >
            {pageNum}
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
