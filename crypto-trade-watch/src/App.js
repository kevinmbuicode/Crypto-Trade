import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinsPage from './Pages/CoinsPage';
import HomePage from './Pages/HomePage';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/coins/:id' element={<CoinsPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
