import React from 'react';
import ReactDOM from 'react-dom';
import '@/css/var.less';
import './index.less';
import './normalize.css';
import './icons'
import Home from './views/Home/Home';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
