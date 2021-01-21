import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Components/classCounter';
import HookCounter from './Components/HookCounter';
import HookCounter1 from './Components/HookCounter1/HooksUseEffect';
import HookCounter2 from './Components/HookCounter2';
import HookCounter3 from './Components/HookCounter3';
import HookCounter4 from './Components/HookCounter4';
import HooksCounter from './Components/HookCounter1/HooksUseEffect';
import DataFetchingApi from './Components/DataFetching';
import DemoComponent from '../src/Components/Demo';
import Counter2 from './Components/lifecycleCounter';
import LifeCycle from '../src/Components/LifecycleCounter/LifeCycleCounter1';
import ArrConcat from '../src/Components/SpreadOperater'
import ArrConcat2 from '../src/Components/SpreadOperater/Demo';


import MouseEvent from '../src/Components/ClassMouse';
import HookMouse from '../src/Components/HookCounter1/HookMouse';
import MouseCounter from './Components/HookCounter1/MouseCounter';
import TestingData from '../src/Components/Testing';
import DataFetchingComp from './Components/DataFetching'
import CompoC from './Components/Context/componentC';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Vikash"}>
        <ChannelContext.Provider value={"Code Evolution"}>
          <CompoC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
