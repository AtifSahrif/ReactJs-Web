import react, { Component } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import About from './Components/About';
import CourseListPage from './Components/CourseListPage';
import Header from '../src/Components/Header';
import RouteName from './RouteName';
import App from "./App";
class AppRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route component={Header} />
                <Route exact path={RouteName.defaultRoute} component={App} />
                <Route exact path={RouteName.HomeRoute} component={HomePage} />
                <Route exact path={RouteName.aboutRoute} component={About} />
                <Route exact path={RouteName.CourseRoute} component={CourseListPage} />
            </BrowserRouter>
        );
    }
};

export default AppRouter;