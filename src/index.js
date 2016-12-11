import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App.jsx';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Login },
  childRoutes: [
    { path: 'profile', component: Profile },
    // { path: 'about', component: About },
  ]
}

// mount our App at #container
ReactDOM.render(<Router routes={routes} />, document.querySelector('#root-container'));
