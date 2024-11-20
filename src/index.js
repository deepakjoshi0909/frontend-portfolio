// src/index.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css'; // Import AOS CSS
import AOS from 'aos'; // Import AOS
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

AOS.init(); // Initialize AOS

ReactDOM.render(<App />, document.getElementById('root'));
