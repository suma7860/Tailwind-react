import React from 'react';

import { DrawerContextProvider } from '../context/DrawerContextProvider';
import useDrawer from '../context/useDrawer';

const DrawerComponent = (props: any) => {
  const { show, hide, isDrawerOpen } = useDrawer();
  

  return (
    <div className=' flex  flex-col w-50 h-50 m-20 '>
      {isDrawerOpen ? (
        <div className="drawer">{props.children}</div>
      ) : null}
      <div className='flex flex-row justify-center m-5'>
      <div className='flex  w-40 h-10 m-2 '>
      <button onClick={show}

        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
      >
        Show Drawer</button>
        </div>

        <div className='flex  w-40 h-10 m-2 '>
      <button onClick={hide}

        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >Hide Drawer</button>
      </div>
      </div>
    </div>
  );
};

export default DrawerComponent;
