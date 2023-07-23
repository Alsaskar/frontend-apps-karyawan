import ReactDOM from 'react-dom/client';
import Router from './Router.jsx';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);
