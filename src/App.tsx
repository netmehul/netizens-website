import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MvpDev from './pages/mvp-dev';
import StaffAug from './pages/staff-aug';
import SupportScale from './pages/support-scale';
import Index from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mvp-development" element={<MvpDev />} />
        <Route path="/staff-augmentation" element={<StaffAug />} />
        <Route path="/support-and-scale" element={<SupportScale />} />
      </Routes>
    </Router>
  );
}

export default App;
