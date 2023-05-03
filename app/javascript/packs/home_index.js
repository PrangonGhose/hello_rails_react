import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../pages/Index';

const root = ReactDOM.createRoot(document.getElementById('home-root'))
root.render(<Index helloMessage={"Hello react!!!!"} />)