import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { Courses } from './Pages/Courses';
import { NotFoundPage } from './componenths/NotFoundPage/NotFoundPage';
import { Careers } from './Pages/Careers';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
