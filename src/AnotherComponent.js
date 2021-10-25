import React, { Component } from "react";


const AnotherComponent = (props) => {

    console.log("Grand Child Render");
    return (
        <div>
            <p>Grand Child:functional Component</p>
        </div>
    );
};

// class AnotherComponent extends Component {
//     // constructor(props){
//     //     super(props);
//     //     this.state ={
//     //         myData:"another Component"
//     //     }
//     // }
//     render() {
//         console.log("Grand Child Render");
//         return (
//             <div>
//                 <p>Grand Child:</p>


//             </div>
//         );
//     }
// }

export default AnotherComponent;