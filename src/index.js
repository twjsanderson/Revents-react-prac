 
import React from 'react';
import ReactDOM from 'react-dom';
// toastr comes with its own css file
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import './index.css';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import App from './app/layout/App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './app/store/configureStore';
import ScrollToTop from './app/common/util/ScrollToTop';
import { loadEvents } from './features/event/eventActions';

const store = configureStore();
store.dispatch(loadEvents())

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <ReduxToastr
            position='bottom-right'
            transitionIn='fadeIn'
            transitionOut='fadeOut'
          />
          <App />
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

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