import ReactPaginate from "react-paginate";

const Pagination = ({ onPageChange, totalPage }) => {
  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="next >"
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={totalPage}
      previousLabel="< previous"
      renderOnZeroPageCount={null}
      marginPagesDisplayed={1}
      breakClassName={"px-4 mx-2 py-1 rounded-md text-white overflow-hidden"}
      containerClassName={
        "flex items-center justify-center border-gray-500  mx-1 py-2 rounded-md text-white  overflow-hidden"
      }
      previousClassName={
        "px-2 mx-2 py-2 rounded-md font-bold text-white overflow-hidden"
      }
      previousLinkClassName={
        "border-gray-400 text-black  mx-1 text-white  overflow-hidden"
      }
      nextClassName="px-2 mx-2 py-2  rounded-md font-bold  text-white  overflow-hidden"
      nextLinkClassName={
        " border-gray-400 text-black  mx-1  text-white overflow-hidden"
      }
      pageLinkClassName={
        " border-gray-500 mx-2  rounded text-white px-1 overflow-hidden"
      }
      activeLinkClassName="bg-lime-600 text-1 rounded-md text-white px-2 overflow-hidden"
    />
  );
};

export default Pagination;
