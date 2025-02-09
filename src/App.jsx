import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage.jsx'
import Quiz from './pages/QuizPage.jsx';
import Result from './pages/ResultPage.jsx';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/result' element={<Result/>} />
        <Route path='*' element={<h1>Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
