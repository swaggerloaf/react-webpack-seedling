import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div className="text-primary">Hi there!</div>);

// render(
//   <div className="text-danger">Hi there!</div>,
//   document.getElementById('root')
// );
