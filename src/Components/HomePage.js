import react, { Component } from "react";
import "./cssStyle.css";
class HomePage extends Component {
    render() {
        return (
            <div>
                <p className={`hometext`}>Home Page</p>
            </div>
        );
    }
}
export default HomePage;