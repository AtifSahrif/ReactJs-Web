import React, { useState } from 'react';
import NewStudent from './NewStudent';

const Student = (props) => {
    const [data, setData] = useState("parent data");

    const changeMyData = () => {
        console.log("parentChange my Data");
        // this.setState({ data: "New Data" }); //using this method we will achive mutibility
        setData("New Data")
    }
    console.log("parent Render");
    return (

        <div>
            <p>this is a parent Component</p>
            <NewStudent data={data} />
            <button onClick={changeMyData}>Click Parent</button>
        </div>
    );
}




// class Student extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             data: "Parent Data"
//         }

//     }

//     changeMyData = () => {
//         console.log("parentChange my Data");
//         this.setState({ data: "New Data" });
//     }

//     render() {
//         console.log("parent Render");
//         return (
//             <div>
//                 <p>this is a parent Component</p>
//                 <NewStudent data={this.state.data} />
//                 <button onClick={this.changeMyData}>Click Parent</button>
//             </div>
//         );
//     }
// }

export default Student;