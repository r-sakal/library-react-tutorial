
import './App.js';
import Footer from './components/Footer.jsx';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home.jsx';
import Books from './pages/Books.jsx';
import { books } from "./data.js"
import BookInfo from './pages/BookInfo.jsx';

function App() {
  return (
    <Router>
    <div className="App">
      <Nav />
      <Routes>
      <Route path="/" exact element={Home} />
      <Route path="/books" element={() => <Books books={books} />} />
      <Route path="/books/1" element={() => <BookInfo books={books} />} />
      <Footer />  
      </Routes>
    </div>
    </Router>
  );
}

export default App;
