import './App.css';
import './components/style.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Signup from './components/register';
import Todo from './components/todo';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/register" element={<Signup />}/>
        <Route path="/todo" element={<Todo />}/>
        {/* <Router path="/header" element={<Header />}/>
        <Router path="/sidebar" element={<Sidebar />}/> */}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
