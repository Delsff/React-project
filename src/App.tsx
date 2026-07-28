import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages/HomePage';
import { Courses } from './Pages/Courses';
import { NotFoundPage } from './componenths/NotFoundPage/NotFoundPage';
import { Careers } from './Pages/Careers';
import { Blog } from './Pages/Blog';
import { About } from './Pages/About';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/courses' element={<Courses />} />
          <Route path='/careers' element={<Careers />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
