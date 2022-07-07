import React from 'react';

const Form = () => (
  <>
    <form className="d-flex justify-content-center">
      <div>
        <p className="new-book">ADD NEW BOOK</p>
        <div className="row g-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Book title" aria-label="Book title" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Author" aria-label="Author" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary">Add Book</button>
          </div>
        </div>
      </div>
    </form>
  </>
);

export default Form;
