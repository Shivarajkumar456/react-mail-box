import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<SignUp />} exact/>
        <Route path='/home' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
