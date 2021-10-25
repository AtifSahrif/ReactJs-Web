import react, { Component } from "react";


const textStyle = {
    fontSize: "30px",
    color: 'green'
}

class About extends Component {
    render() {
        return (
            <div style={textStyle}>
                About Us
            </div>
        );
    }
}

export default About;