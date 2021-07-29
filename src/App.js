import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/classCounter";
import HookCounter from "./components/HookCounter";
import HookCounter1 from "./components/hookCounter1/HooksUseEffect";
import HookCounter2 from "./components/HookCounter2";
import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./components/HookCounter4";
import HooksCounter from "./components/hookCounter1/HooksUseEffect";
import DataFetchingApi from "./components/DataFetching";
import DemoComponent from "./components/Demo";
import Counter2 from "./components/lifecycleCounter";
import LifeCycle from "./components/lifecycleCounter/LifeCycleCounter1";
import ArrConcat from "./components/spreadOperater";
import ArrConcat2 from "./components/spreadOperater/Demo";
import Fragment from './components/fragment'; 
import MouseEvent from "./components/ClassMouse";
import HookMouse from "./components/hookCounter1/HookMouse";
import MouseCounter from "./components/hookCounter1/MouseCounter";
import TestingData from "./components/Testing";
import DataFetchingComp from "./components/DataFetching";
import CompoC from "./components/Context/componentC";
import DropDown from "./components/dropDown";

// Search 
import CountrySearch from './components/searchBar/App';
import Filtersearch from './components/filterSearch'
// useReducer
import ReducerCounter from "./components/userReducer/counterOne";
import ReducerCounter2 from "./components/userReducer/countertwo";
import PureCom from "./components/pureComponent/parentComp";
import HOCComp from './components/Hoc/clickCounter';
import HOCHoverCounter from './components/Hoc/hoverCounter';

//
import UseRef from "../src/components/userRef";
import RefDemo from '../src/components/refs/refsDemo';

// Material Ui
import MaterialUiComp from "../src/MaterialUi/menu";
import Grid from './MaterialUi/grid';
import LoginForm from './MaterialUi/login';

// Social Logins
import FbLogin from  './components/socialLogins/facebook';
import GoogleLogin from  './components/socialLogins/google';

// Hooks example
import HookState from '../src/components/hooks/useStateHook';


import Icons from "../src/libraries/icon";
import Toast from "../src/libraries/tostify";
import Modal from "../src/libraries/modal";
import ToolTip from "../src/libraries/toolTip";
import Countup from "./libraries/countup";
import IdleComp from "../src/libraries/idleTimer";
import ColorPicker from "../src/libraries/colorPicker";
import CreditCrad from "../src/libraries/creditCards";
import DatePicker from "../src/libraries/datePicker";
import Excel from "./libraries/excel";
import Demo22 from '../src/components/Demo2'
import HookForm from "./components/hookForm";

// Fnctional Redux & Hooks
import AppReduxHooks from "./components/redux-Hooks/App";
import { Provider } from "react-redux";
import store from './components/redux-Hooks2/store';
import {useSelector, useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux';
import {actionCreators} from './components/redux-Hooks2/index'

// Functional Redux & Reducer setup
import ReduxFunctional from "./reduxFunctional/App";
// import { store } from "./components/redux-Hooks/redux";
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// PureCompo

// function App() {
//   return (
//     <Provider store={store}>
//       <div className='App'>
//         {/* <UserContext.Provider value={"Vikash"}>
//         <ChannelContext.Provider value={"Code Evolution"}>
//           <CompoC />
//         </ChannelContext.Provider>
//       </UserContext.Provider> */}

//         {/* <PureCom /> */}
//         {/* <DatePicker /> */}
//         {/* <UseRef /> */}
//         {/* <MaterialUiComp /> */}
//         {/* <Excel /> */}
//         {/* <ReduxFunctional /> */}
//         {/* <HookForm /> */}
//         {/* <AppReduxHooks /> */}
//         {/* <CountrySearch /> */}
//         <Filtersearch />
//       </div>
//     </Provider>
//   );
// }
function App() {
  // const account = useSelector((state)=> state.account);
  // const dispatch = useDispatch();
  // const AC = bindActionCreators(actionCreators, dispatch);
  // console.log(AC);

  // console.log("state:",account)
  return (
    <Provider store={store}>
      <div className='App'>
        {/* <UserContext.Provider value={"Vikash"}>
        <ChannelContext.Provider value={"Code Evolution"}>
          <CompoC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

        {/* <PureCom /> */}
        <HOCComp name="Bikash"/>
        {/* <HOCHoverCounter /> */}
        {/* <Demo22 /> */}
        <RefDemo />
        <HookState />
        {/* <Grid /> */}
        {/* <LoginForm /> */}
        {/* <FbLogin /> */}
        {/* <GoogleLogin/> */}
        {/* <DatePicker /> */}
        {/* <UseRef /> */}
        {/* <Fragment /> */}
        {/* <MaterialUiComp /> */}
        {/* <Excel /> */}
        {/* <ReduxFunctional /> */}
        {/* <HookForm /> */}
        {/* <AppReduxHooks /> */}
        {/* <CountrySearch /> */}
        {/* <Filtersearch /> */}
      </div>
    </Provider>
  );
}

export default App;
