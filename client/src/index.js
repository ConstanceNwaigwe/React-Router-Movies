import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// You'll need to wrap <App /> for routing to work
ReactDOM.render(<Router path="/MovieList"><Router path="/Movie/{}"><App /></Router></Router>, document.getElementById('root'));
