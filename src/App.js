import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import NavBar from './components/NavBar';
import NoPage from './components/NoPage';

function App() {
  return (
    <div className="body">
      <HashRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="categories" element={<Categories />} />
            <Route index element={<Book />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
