import './App.css';
import react from 'react';
import HomePage from './Components/HomePage';
import About from './Components/About';
import CourseListPage from './Components/CourseListPage';
function App() {
  return (
    <div className="App">
      <p>Initial App Structure</p>
      <HomePage />
      <About />

      <CourseListPage />
    </div>
  );
}













// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showCounter: false
//     }
//   }

//   SetShowCounter = () => {
//     this.setState({ showCounter: true });
//   }

//   render() {
//     return (
//       <div className="App">
//         <p>Counter</p>
//         <button onClick={this.SetShowCounter}>Show Counter</button>
//         {this.state.showCounter && <Counter SetShowCounter={this.SetShowCounter} />} {/* */}
//       </div>
//     );
//   }
// }

// function App() {
//   const [showCounter, setShowCounter] = useState(false);
//   const hideCounter = () => {
//     setShowCounter(false);
//   }

//   return (
//     <div className="App">
//       <p>Counter</p>
//       <button onClick={() => setShowCounter(true)}>Show Counter</button>
//       {showCounter && <Counter hideCounter={hideCounter} />}   {/*if statement */} {/* {showCounter ? <Counter/>:"helo"} if else*/}

//     </div>
//   );
// }

export default App;
