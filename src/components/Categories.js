import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatusAction } from '../redux/categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categoriesReducer);
  const dispatch = useDispatch();

  const updateCategories = (e) => {
    e.preventDefault();
    dispatch(checkStatusAction());
  };
  return (
    <>
      <div>
        <button type="button" className="btn btn-primary" onClick={updateCategories}>
          Check Status
        </button>
        <h4 className="pt-5 text-5">{status}</h4>
      </div>
    </>
  );
};

export default Categories;
