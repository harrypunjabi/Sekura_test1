import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SekuraWebsitePreview from './SekuraWebsitePreview.jsx';
import SekuraWebsitePreviewOld from './SekuraWebsitePreviewOld.jsx';

// Check if we're running on port 5174 to show the old version
const isOldVersion = window.location.port === '5174';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isOldVersion ? <SekuraWebsitePreviewOld /> : <SekuraWebsitePreview />}
  </React.StrictMode>,
);
