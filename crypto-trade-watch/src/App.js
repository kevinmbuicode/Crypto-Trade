<<<<<<< HEAD
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
=======
import { makeStyles } from '@mui/styles';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import CoinPage from './Pages/CoinPage';
import HomePage from './Pages/HomePage';

function App() {
  const useStyles = makeStyles({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
    }
  })

  const classes = useStyles()

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/coins/:id' element={<CoinPage/>}/>
>>>>>>> 348dabd56a645a7d0b784cd61b9e4961b8b4a980
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
