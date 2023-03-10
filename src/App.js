import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import SignUp from './Components/SignUp/SignUp';
import Home from './Components/Home/Home';
import Send from './Components/Email/Send';
import Inbox from './Components/Email/Inbox';
import ReadMsg from './Components/Email/ReadMsg';
import SentBox from './Components/Email/SentBox';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<SignUp />} exact/>
        <Route path='/home' element={<Home />} />
        <Route path='/compose' element={<Send />} />
        <Route path='/inbox' element={<Inbox />} />
        <Route path='/sent' element={<SentBox />} />
        <Route path='/message/:id' element={<ReadMsg />} />
      </Routes>
    </div>
  );
}

export default App;
