import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MvpDev from './pages/mvp-dev';
import StaffAug from './pages/staff-aug';
import SupportScale from './pages/support-scale';
import WorkflowDigit from './pages/workflow-digit';
import Index from './pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/mvp-development" element={<MvpDev />} />
        <Route path="/staff-augmentation" element={<StaffAug />} />
        <Route path="/support-and-scale" element={<SupportScale />} />
        <Route path="/workflow-digitization" element={<WorkflowDigit />} />
      </Routes>
    </Router>
  );
}

export default App;
