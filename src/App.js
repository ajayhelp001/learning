import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
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
import ControlComponent from './Components/ControlComponent/ControlComponent';
import UnControlComponent from './Components/ControlComponent/UnControlComponent';
import UseReducer from './Components/Hooks/UseReducer';
import HocAssembleGroup from './Components/HOC-Component/HocAssembleGroup';
import PreviousState from './Components/Hooks/PreviousState';
import PreviousPropsParent from './Components/Hooks/PreviousPropsParent';
import StateWithObject from './Components/Hooks/StateWithObject';
import CodeSpliting from './Components/SplitingLezyLodingSuspense/CodeSpliting';
import LezyLodedSuspense from './Components/SplitingLezyLodingSuspense/LezyLodedSuspense';
import Apicaoolling from './Components/ApiCalling/Apicaoolling';
import ApiForm from './Components/ApiCalling/ApiForm';
import FormPostApi from './Components/FormApis/FormPostApi';
import DeletePostApi from './Components/FormApis/DeletePostApi';
import FormPostApi2 from './Components/FormApis/FormPostApi2';
import PreFilledFormData from './Components/FormApis/PreFilledFormData';
import PutAPIMethod from './Components/FormApis/PutAPIMethod';
import MyCounterApp from './Components/CustomHooks/MyCounterApp';
import AxiosGetRequest from './Axios/AxiosGetRequest';
import AxiosPostRequest from './Axios/AxiosPostRequest';
import AxiosPutRequest from './Axios/AxiosPutRequest';
import AxiosDeleteRequest from './Axios/AxiosDeleteRequest';
import Home from './MyRouter/Home';
import About from './MyRouter/About';
import NavbarComponent from './MyRouter/NavbarComponent';
import PageNotFound from './MyRouter/PageNotFound';
import DynemicRouter from './MyRouter/DynemicRouter';
import ShowDynemicLinkData from './MyRouter/ShowDynemicLinkData';


function App() {
  return (
    <>
      <div className="App container">
    <BrowserRouter>
    <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        {/* "/*" jab Route nhi mile to 404 page ko render karta h ye  */}
        <Route path="/*" element={<PageNotFound/>} />
        {/* jab log out ya log in ke bad kisi page pr nevigate karwana ho to es tarah karte h */}
        {/* <Route path="/*" element={<Navigate to="/"/>} /> */}
        <Route path="/dynemic-route" element={<DynemicRouter/>} />
        <Route path="/dynemic-route/:name" element={<ShowDynemicLinkData/>} />
      </Routes>
    </BrowserRouter>

        
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
        {/* <UseReducer/> */}
        {/* <PreviousState/> */}
        {/* <PreviousPropsParent/> */}
        {/* <StateWithObject/> */}

        {/* =========== Context Api========= */}
        {/* <ContextWithApiHooks/> */}

        {/* ====== Array Maps ==== */}
        {/* <ArrayListing/> */}
        {/* <BootstrapArrayListing/> */}
        {/* <NestedArrayWithBootstrap/> */}

        {/* ====== ReuseComponent==== */}
        {/* <ReuseComponent/> */}
        {/* <LiftingStateUp/> */}

        {/* ====== Control Component==== */}
        {/* <ControlComponent/> */}
        {/* <UnControlComponent/> */}

        {/* ====== API Intigretion==== */}
        {/* <UserDataShow/> */}
        {/* <UserPost/> */}

        {/* ====== HOC Component ==== */}
        {/* <HocAssembleGroup/> */}

        {/* ====== Spliting LezyLoding Suspense Component ==== */}
        {/* <CodeSpliting/> */}
        {/* <LezyLodedSuspense/> */}
        {/* <Apicaoolling/> */}
        {/* <ApiForm/> */}
        {/* <FormPostApi/> */}
        {/* <FormPostApi2/> */}
        {/* <DeletePostApi/> */}
        {/* <PreFilledFormData/> */}
        {/* <PutAPIMethod/> */}
        {/* <MyCounterApp/> */}




  {/* ====== Axios Component ==== */}
        {/* <AxiosGetRequest/> */}
        {/* <AxiosPostRequest/> */}
        {/* <AxiosPutRequest/> */}
        {/* <AxiosDeleteRequest/> */}
        {/* <MyRouters/> */}
      
      

      </div>
    </>
    
  );
}

export default App;
