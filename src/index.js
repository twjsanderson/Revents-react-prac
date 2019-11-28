import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';


// The following code gives us hot reload that does not re-render the entire application
// we access and modiify webpack below at module
const rootEl = document.getElementById('root');

let render = () => {
    ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>, 
    rootEl)
}

if (module.hot) {
    module.hot.accept(App, () => {
        setTimeout(render);
    });
};

render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


// JSX is an abstraction away from this:
// React.createElement('div', {className: 'app'}),
//  React.createElement('h1', null, 'Hello!')
//  to this ->
// <div className='app'>
//   <h1>Hello</h1>
//  </div>