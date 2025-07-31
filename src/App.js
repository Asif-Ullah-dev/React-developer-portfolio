import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import CodePage from './pages/CodePage'; //  page next
import AttendenceMang from './pages/AttendenceMang';
import SolarProduction from './pages/SolarProduction';
import ContactManagement  from './pages/contactManagement';
function App() {
  return (
  <BrowserRouter>
    <Routes>
       <Route path="/" element={<Portfolio />} />
       <Route path="/code" element={<CodePage />} />
       <Route path="/project/AttendenceMang" element={<AttendenceMang />}/>
       <Route path="/project/SolarProduction" element={<SolarProduction />} />   
       <Route path="/project/ContactManagement" element={<ContactManagement />} />  
    </Routes>
  </BrowserRouter>
    
  );
}

export default App;
