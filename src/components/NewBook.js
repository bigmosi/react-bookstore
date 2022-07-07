import React from 'react';
import { PropTypes } from 'prop-types';

const NewBook = ({
  title,
  author,
  status,
  chapter,
}) => (
  <>
    <div className="d-flex justify-content-around width bg-white">
      <div>
        <h4 className="title">{title}</h4>
        <p className="author">{author}</p>
        <div className="d-flex align-items-center justify-content-start m-0 p-0">
          <p className="border-end pe-3 py-0 m-0 text-3">Comments</p>
          <p className="border-end px-3 py-0 m-0 text-3">Remove</p>
          <p className="border-start px-3 py-0 m-0 text-3">Edit</p>
        </div>
      </div>
      <div className="status">
        <p>{status}</p>
        <p>completed</p>
      </div>
      <div className="chapter">
        <p className="chapter1">CURRENT CHAPTER</p>
        <p>{chapter}</p>
        <div>
          <input className="btn btn-1 btn-primary btn-sm" type="button" value="UPDATE PROGRESS" />
        </div>
      </div>
    </div>
  </>
);

export default NewBook;

NewBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
};
