import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>        
            {/* <Route path="/" element={<App />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
