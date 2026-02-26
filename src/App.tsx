import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MvpDev from './pages/mvp-dev';
import StaffAug from './pages/staff-aug';
import SupportScale from './pages/support-scale';
import WorkflowDigit from './pages/workflow-digit';
import AiAutomate from './pages/ai-automate';
import HowWeWork from './pages/how-we-work';
import BookCall from './pages/book-call';
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
        <Route path="/ai-consulting" element={<AiAutomate />} />
        <Route path="/how-we-work" element={<HowWeWork />} />
        <Route path="/book-call" element={<BookCall />} />
      </Routes>
    </Router>
  );
}

export default App;
