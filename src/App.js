// import './App.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import SignUp from './SignIn';
import Student from './Student';


function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/student" element={<Student />} />
          <Route path="/" element={<SignUp/>} />

        </Routes>
      </Router>
      


     
    </div>
  );
}

export default App;
