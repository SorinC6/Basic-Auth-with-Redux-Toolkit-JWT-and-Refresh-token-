import './App.css';
import { Routes, Route } from 'react-router-dom'
import Public from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Public />} />
      </Routes>
    </div>
  );
}

export default App;
