
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const reactComponent = <App />;
const reactRoot = document.getElementById('reactRoot');

ReactDOM.render(reactComponent, reactRoot);

registerServiceWorker();
