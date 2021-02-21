import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/classCounter';
import HookCounter from './components/HookCounter';
import HookCounter1 from './components/hookCounter1/HooksUseEffect';
import HookCounter2 from './components/HookCounter2';
import HookCounter3 from './components/HookCounter3';
import HookCounter4 from './components/HookCounter4';
import HooksCounter from './components/hookCounter1/HooksUseEffect';
import DataFetchingApi from './components/DataFetching';
import DemoComponent from './components/Demo';
import Counter2 from './components/lifecycleCounter';
import LifeCycle from './components/lifecycleCounter/LifeCycleCounter1';
import ArrConcat from './components/spreadOperater'
import ArrConcat2 from './components/spreadOperater/Demo';


import MouseEvent from './components/ClassMouse';
import HookMouse from './components/hookCounter1/HookMouse';
import MouseCounter from './components/hookCounter1/MouseCounter';
import TestingData from './components/testing';
import DataFetchingComp from './components/DataFetching'
import CompoC from './components/context/componentC';

// useReducer
import ReducerCounter from './components/userReducer/counterOne';
import ReducerCounter2 from './components/userReducer/countertwo';


export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value={"Vikash"}>
        <ChannelContext.Provider value={"Code Evolution"}>
          <CompoC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}

      <HookCounter/>
    </div>
  );
}

export default App;
