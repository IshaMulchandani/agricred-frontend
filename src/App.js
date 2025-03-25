import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration';
import Farmdetials from './Components/Farmdetails/Farmdetails';
import Generalinformation from './Components/General Information/Generalinformation';
import Proof from './Components/Proof/Proof';
import Education from './Components/Education/Education';
import Contact from './Components/Contact/Contact';
import Property from './Components/Property/Property';
import Finalstep from './Components/Final Step/Finalstep';
import Investmentopportunities from './Components/Investment Opportunities/Investmentopportunities';
import Credit from './Components/Credit/Credit';
import Mill from './Components/Mill Information/Mill';
import Myprofile from './Components/My Profile/Myprofile';
import Report from './Components/Report/Report';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/farm-details' element={<Farmdetials/>}/>
        <Route path='/general-information' element={<Generalinformation/>}/>
        <Route path='/proof' element={<Proof/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/property' element={<Property/>} />
        <Route path='/final-step' element={<Finalstep/>} />
        <Route path='/investment-opportunities' element={<Investmentopportunities/>}/>
        <Route path='/credit' element={<Credit/>} />
        <Route path='/mill' element={<Mill/>} />
        <Route path='/my-profile' element={<Myprofile/>} />
        <Route path='/report' element={<Report/>} />
      </Routes>
    </Router>
  );
}

export default App;
