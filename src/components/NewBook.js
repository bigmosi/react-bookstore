import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { removeBookAction } from '../redux/books/book';

const NewBook = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();
  const removeBookStore = () => {
    dispatch(removeBookAction({ id }));
  };
  return (
    <>
      <div className="d-flex justify-content-around width bg-white">
        <div>
          <h4 className="title">{title}</h4>
          <p className="author">{author}</p>
          <div className="d-flex align-items-center justify-content-start m-0 p-0">
            <p className="border-end pe-3 py-0 m-0 text-3">Comments</p>
            <button type="button" className="btn1 border-end px-3 py-0 m-0 text-3" onClick={removeBookStore}>Remove</button>
            <p className="btn1 border-start px-3 py-0 m-0 text-3">Edit</p>
          </div>
        </div>
        <div className="status">
          <div className="circle">
            <div className="circle-bar" />
          </div>
          <div>
            <p className="percent">94%</p>
            <p className="complete">completed</p>
          </div>
        </div>
        <div className="chapter">
          <p className="chapter1">CURRENT CHAPTER</p>
          <p>chapter</p>
          <button type="button" className="btn btn-primary btn-sm">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </>
  );
};
export default NewBook;

NewBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
};
