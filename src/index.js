import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import Game from "./Components/Game"
// ==========================
// Components
// ==========================



// ========================================

ReactDOM.render(<Game />, document.getElementById('root'));
registerServiceWorker();
