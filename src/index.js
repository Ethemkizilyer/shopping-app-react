import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { ThemeProvider } from "./Context/ThemeProvider";
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
    <ThemeProvider>
      
    <App />
    
    </ThemeProvider>
</BrowserRouter>
);


