import React, { useState } from 'react';
import AnotherComponent from './AnotherComponent';

const NewStudent = (props) => {
        const [myData, setmyData] = useState("This is My Data");

        const changeMyData = () => {
                console.log("Child ChangrMyData");
                // this.setState({data:"New Data"});
                setmyData("NewData")
        }
        console.log("Child Render");
        return (

                <div>
                        <p>My Prop is: {props.data}</p>
                        <p>My State is: {myData}</p>
                        <AnotherComponent myValue={myData} />
                        <button onClick={changeMyData}>Click Me</button>
                </div>
        );
}






// class NewStudent extends Component {
//         constructor(props) {
//                 super(props);
//                 this.state = {
//                         myData: "This is My Data"
//                 }

//         }
//         // chnageMyData =()=>{
//         //     console.log("ChildChange my Data")
//         //     this.setState({myData:"New Data"})
//         // }
//         render() {
//                 console.log("Child Render");
//                 return (
//                         <div>
//                                 <p>My Prop is: {this.props.data}</p>
//                                 <p>My State is: {this.state.myData}</p>
//                                 <AnotherComponent myValue={this.state.myData} />
//                                 {/* <button onClick={this.chnageMyData}>Click Me</button> */}
//                         </div>
//                 );
//         }
// }

export default NewStudent;