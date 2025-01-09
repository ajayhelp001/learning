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
import GetInputValue from './Components/GetInputValue';
import HideShowToggle from './Components/HideShowToggle';
import FormHeandaling from './Components/FormHeandaling';
import ConditionalRendring from './Components/ConditionalRendring';
import PassPropsFunctionFroup from './Components/PassPropsFunctionFroup';
import FormValidation from './Components/FormValidation';
import Constructor from './Components/Constructor';
import RenderMethodGroup from './GroupFile/RenderMethodGroup';
import ComponentDidMount from './Components/ComponentDidMount';
import ComponentDidUpdate from './Components/ComponentDidUpdate';
import ShouldComponentUpdate from './Components/ShouldComponentUpdate';
import GetSnapshotBeforeUpdate from './Components/GetSnapshotBeforeUpdateMethod';
import GetSnapshotBeforeUpdateMethod from './Components/GetSnapshotBeforeUpdateMethod';
import ComponentWillUpdate from './Components/ComponentWillUpdate';
import UseState from './Components/Hooks/UseState';
import UseEffectHook from './Components/Hooks/UseEffectHook';
import UseEffectWithPropsParent from './Components/Hooks/UseEffectWithPropsParent';
import UseEffectWithCondition from './Components/Hooks/UseEffectWithCondition';
import UseEffectWithConditionParent from './Components/Hooks/UseEffectWithConditionParent';
import UseEffectExample from './Components/Hooks/UseEffectExample';
import UseMemoHooks from './Components/Hooks/UseMemoHooks';
import UseCallBack from './Components/Hooks/UseCallBack';
import ContextWithApiHooks from './Components/ContextApiMethod/ContextWithApiHooks';
import SecondComponent from './Components/ContextApiMethod/SecondComponent';
import UseRefHook from './Components/Hooks/UseRefHook';
import UserDataShow from './Prectice/UserDataShow';
import UserPost from './Prectice/UserPost';
import ForwardRefHook from './Components/Hooks/ForwardRefHook';
import ArrayListing from './Components/ArrayMap/ArrayListing';
import BootstrapArrayListing from './Components/ArrayMap/BootstrapArrayListing';
import NestedArrayWithBootstrap from './Components/ArrayMap/NestedArrayWithBootstrap';
import ReuseComponent from './Components/ReuseComponenet/ReuseComponent';
import LiftingStateUp from './Components/ReuseComponenet/LiftingStateUp';

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
      {/* <PropsComponentGroup/> */}
      {/* <GetInputValue/> */}
      {/* <HideShowToggle/> */}
      {/* <FormHeandaling/> */}
      {/* <ConditionalRendring/> */}
      {/* <PassPropsFunctionFroup/> */}
      {/* <FormValidation/> */}
      {/* <Constructor/> */}
      {/* <RenderMethodGroup/> */}
      {/* {<ComponentDidMount/>} */}
      {/* {<ComponentDidUpdate/>} */}
      {/* <ShouldComponentUpdate/> */}
      {/* <GetSnapshotBeforeUpdateMethod/> */}
      {/* <ComponentWillUpdate/> */}
      
      {/* =========== Hooks========= */}

      {/* <UseState/> */}
      {/* <UseEffectHook/> */}
      {/* <UseEffectWithPropsParent/> */}
      {/* <UseEffectWithCondition/> */}
      {/* <UseEffectWithConditionParent/> */}
      {/* <UseEffectExample/> */}
      {/* <UseMemoHooks/> */}
      {/* <UseCallBack/> */}
      {/* <UseRefHook/> */}
      {/* <ForwardRefHook/> */}

      {/* =========== Context Api========= */}
      {/* <ContextWithApiHooks/> */}

      {/* ====== Array Maps ==== */}
      {/* <ArrayListing/> */}
      {/* <BootstrapArrayListing/> */}
      {/* <NestedArrayWithBootstrap/> */}

      {/* ====== ReuseComponent==== */}
      {/* <ReuseComponent/> */}
      <LiftingStateUp/>


      {/* ====== API Intigretion==== */}
      {/* <UserDataShow/> */}
      {/* <UserPost/> */}
    </div>
  );
}

export default App;
