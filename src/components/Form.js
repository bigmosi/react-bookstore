import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 } from 'uuid';
import { addBookAction } from '../redux/books/book';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const newBook = {
    id: v4(),
    title,
    author,
  };

  const addBookStore = (e) => {
    e.preventDefault();
    dispatch(addBookAction(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <form className="d-flex justify-content-center">
        <div>
          <p className="new-book">ADD NEW BOOK</p>
          <div className="row g-3">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Book title"
                aria-label="Book title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Author"
                aria-label="Author"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div className="col-auto">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={addBookStore}
              >
                Add Book
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
