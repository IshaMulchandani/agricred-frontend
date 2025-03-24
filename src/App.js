import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import Farmdetials from './Components/Farmdetails/Farmdetails';
import Generalinformation from './Components/General Information/Generalinformation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/farm-details' element={<Farmdetials/>}/>
        <Route path='/general-information' element={<Generalinformation/>}/>
      </Routes>
    </Router>
  );
}

export default App;
