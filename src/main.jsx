import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './SekuraWebsitePreview.jsx';
import Enterprise from './pages/Enterprise.jsx';
import Team from './pages/Team.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/enterprise" element={<Enterprise />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
