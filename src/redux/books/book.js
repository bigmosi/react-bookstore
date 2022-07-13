import axios from 'axios';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const FETCH_BOOK = 'bookstore/books/FETCH_BOOK';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/hr3W4s4GHxpRX0UTPNXs/books';

const initialState = [];

export const addBookAction = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBookAction = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBook = (payload) => ({
  type: FETCH_BOOK,
  payload,
});

export const fetchBookApiAction = () => async (dispatch) => {
  const books = await axios.get(url);
  const bookFetched = Object.entries(books.data).map((item) => {
    const { title, author } = item[1][0];
    return { id: item[0], title, author };
  });
  dispatch(fetchBook(bookFetched));
};

export const addBookApiAction = (payload) => async (dispatch) => {
  const { id, title, author } = payload;
  const newBook = {
    item_id: id,
    title,
    author,
    category: 'Fiction',
  };
  await axios.post(url, newBook);
  dispatch(addBookAction(payload));
};

export const removeBookApiAction = (id) => async (dispatch) => {
  await axios.delete(`${url}/${id}`);
  dispatch(removeBookAction({ id }));
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default bookReducer;
