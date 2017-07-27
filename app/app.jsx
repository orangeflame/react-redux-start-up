import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, Link } from 'react-router'
import ToDoList from './ToDoList/index.jsx';

const App = React.createClass({
  render() {
    return this.props.routes.length === 1 ? (
        <div>
            <h1>App</h1>
            <ul>
                <li><Link to="/about">To do list</Link></li>
            </ul>

        </div>
    ) : (<div>{this.props.children}</div>);
  }
})

const routes = {
    path: '/',
    component: App,
    childRoutes: [
        { path: 'about', component: ToDoList },
    ],
};

render((
    <Router history={browserHistory} routes={routes} />
), document.querySelector('#root'));