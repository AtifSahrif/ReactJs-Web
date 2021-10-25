import React, { Component } from "react";
import { Link } from 'react-router-dom';
import RouteName from "../RouteName";
class Header extends Component {
    render() {
        return (
            <div>
                <Link to={RouteName.HomeRoute}>Home</Link>
                <span> | </span>
                <Link to={RouteName.aboutRoute}>About</Link>
                <span> |</span>
                <Link to={RouteName.CourseRoute}>Course</Link>


            </div>
        );
    }
}

export default Header;