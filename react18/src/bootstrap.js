import React from 'react';
import ReactDOM from 'react-dom/client'; // Use 'react-dom/client' for React 18+
import App from './components/App';
import { GlobalContextProvider } from 'hostApp/GlobalContext';


// Create a root and render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<GlobalContextProvider><App /></GlobalContextProvider>);
