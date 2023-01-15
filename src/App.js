import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./landingpage/Home";
import About from "./landingpage/About";
import Contact from "./landingpage/Contact";
import Dashboard from "./pages/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import AddUser from "./components/AddUser";
import Users from "./pages/Users";
import UsersEdit from './pages/UsersEdit';
import Book from "./pages/Book";
import BookEdit from "./pages/BookEdit";
import AddBook from "./pages/AddBook";
import Transaksi from "./pages/Transaksi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/users" element={<Users />} /> 
        <Route path="/useredit" element={<UsersEdit />} />
        <Route path="/adduser" element={<AddUser />} /> 
        <Route path="/book" element={<Book />} />
        <Route path="/bookedit" element={<BookEdit />} /> 
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/transaksi" element={<Transaksi />} /> 

      </Routes>
    </BrowserRouter>
  );
}

export default App;
