import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import SekuraWebsitePreview from './SekuraWebsitePreview.jsx';
import SekuraWebsitePreviewOld from './SekuraWebsitePreviewOld.jsx';

// Check if we should show the old version based on environment variable
const isOldVersion = import.meta.env.VITE_SHOW_OLD_VERSION === 'true';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {isOldVersion ? <SekuraWebsitePreviewOld /> : <SekuraWebsitePreview />}
  </React.StrictMode>,
);
