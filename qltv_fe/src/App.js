import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './page/Login.';
import Book from './page/Book';
import Books from './page/Books';
import AddBook from './page/AddBook';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/books' element={<Books />} />
      <Route path='/books/add' element={<AddBook />} />
      <Route path='/books/details/:id' element={<Book />} />
      <Route path='/Login' element={<Login />} />
    </Routes>
  );
}

export default App;
