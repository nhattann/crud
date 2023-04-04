import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import Home from './components/home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
          <h2 className="main-header">React Crud Operations</h2>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/create' element={<Create/>} />
            <Route exact path='/read' element={<Read/>} />
            <Route path='/update' element={<Update/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;