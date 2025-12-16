import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { Courses } from './Pages/Courses';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
