import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css';
import { DrawerContextProvider } from './context/DrawerContextProvider';
import DrawerComponent from './components/DrawerComponent';
import Card from './components/Card';

const App = () => {
  const drawerContextValues = {
    direction: 'left' as any ,
    animation: 'slide' as any,
    speed: 300 as number,
  };

  return (
    <DrawerContextProvider contextValues={drawerContextValues}>
      <DrawerComponent
      >
        {/* <h1> heading</h1> */}
        <Card/>
      </DrawerComponent>
    </DrawerContextProvider>
  );
};
export default App;
