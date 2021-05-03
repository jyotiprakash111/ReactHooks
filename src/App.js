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

import MouseEvent from "./components/ClassMouse";
import HookMouse from "./components/hookCounter1/HookMouse";
import MouseCounter from "./components/hookCounter1/MouseCounter";
import TestingData from "./components/testing";
import DataFetchingComp from "./components/DataFetching";
import CompoC from "./components/context/componentC";

// useReducer
import ReducerCounter from "./components/userReducer/counterOne";
import ReducerCounter2 from "./components/userReducer/countertwo";
import PureCom from "./components/pureComponent/parentComp";

//
import UseRef from "../src/components/userRef";

// Material Ui
import MaterialUiComp from "../src/MaterialUi/menu";

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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
// PureCompo

function App() {
  return (
    <div className='App'>
      {/* <UserContext.Provider value={"Vikash"}>
        <ChannelContext.Provider value={"Code Evolution"}>
          <CompoC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      {/* <PureCom /> */}
      {/* <DatePicker /> */}
      {/* <UseRef /> */}
      {/* <MaterialUiComp /> */}
      <Excel />
    </div>
  );
}

export default App;
