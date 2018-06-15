import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './Containers/App';
import About from './Containers/About';
import Contact from './Containers/Contact';

ReactDOM.render(
<Router>
        <App />
        {/* <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        </Switch>    */}
</Router>,

document.getElementById('root'));
