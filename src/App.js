import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Layout from './components/Layout'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
// import UsersList from './features/users/UsersList'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={Layout}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          {/* protected routes */}
          <Route element={<RequireAuth />} >
            <Route path="/welcome" element={<Welcome />} />
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
