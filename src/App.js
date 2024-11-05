import logo from './logo.svg';
import './App.css';
import ClassBasedComponent from './Components/ClassBasedComponent';
import Demo1 from './Components/Demo1';
import EventFunction from './Components/EventFunction';
import StateComponent from './Components/StateComponent';
import StateInClassComponent from './Components/StateInClassComponent';
import ValueUpdateStateComponent from './Components/ValueUpdateStateComponent';
import FindReplaceStateComponent from './Components/FindReplaceStateComponent';
import PropsComponentGroup from './Components/PropsComponentGroup';

function App() {
  return (
    <div className="App">
      {/* <ClassBasedComponent/> */}
      {/* <Demo1/> */}
      {/* <EventFunction/> */}
      {/* <StateComponent/> */}
      {/* <StateInClassComponent/> */}
      {/* <ValueUpdateStateComponent/> */}
      {/* <FindReplaceStateComponent/> */}
      <PropsComponentGroup/>
    </div>
  );
}

export default App;
