import react, { Component } from "react";

// const Counter = (props) => {
//     const [count, setCount] = useState(0);
//     //Executing Effect on ComponentDidMount
//     useEffect(() => {
//         console.log("executing effect on Mounting")
//     }, []);

//     //Executing Effect on ComponentDidUpdate
//     useEffect(() => {
//         console.log("executing effect on Updating")
//     }, [count]);

//     //Executing Effect on ComponentWillUnmount
//     useEffect(() => {
//         // console.log("Executing Effect on Unmounting ");
//         return (() => {
//             console.log("executign Effect on Unmount");
//         })
//     }, [])


//     return (
//         <div>
//             <h1>Count is:{count}</h1>
//             <button onClick={() => setCount(count + 1)}>Increment</button>
//             <p></p>
//             <button onClick={props.hideCounter}>Hide Counter</button>
//         </div>
//     );
// }


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            // ShowCounterr: true
        }
    }

    // HideCounter = () => {
    //     this.setState({ ShowCounterr: false });
    // }
    render() {
        return (
            <div>
                <h1>Count is:{this.state.count}</h1>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>Increment</button>
                <p></p>
                <button onClick={this.props.SetShowCounter}>Hide Counter</button>
            </div>
        )
    }
}



export default Counter;