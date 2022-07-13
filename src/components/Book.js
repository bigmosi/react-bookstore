import { useSelector } from 'react-redux';
import NewBook from './NewBook';

import Form from './Form';

const Book = () => {
  const bookList = useSelector((state) => state.bookReducer);

  return (
    <>
      {bookList.length ? (
        bookList.map((book) => <NewBook book={book} key={book.id} />)
      ) : (
        <h3 className="container mx-auto mb-3 px-3 py-3 bg-white text-5">
          No books to show!
        </h3>
      )}
      <Form />
    </>
  );
};

export default Book;