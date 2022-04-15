// import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import SignUp from './SignIn';
import Student from './Student';
import Admin from './Admin';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/" element={<SignUp/>} />
          <Route path="/admin" element={<Admin/>} />
        </Routes>
      </Router>
      


     
    </div>
  );
}

export default App;
