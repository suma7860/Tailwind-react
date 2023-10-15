import React, { useContext, useState } from 'react'
import { DrawerContext } from './DrawerContext';

interface DrawerState {
  isDrawerOpen: boolean;
}

const useDrawer = () => {
  const context = useContext(DrawerContext); // Use DrawerContext
  const [drawerState, setDrawerState] = useState<DrawerState>({
    isDrawerOpen: false,
  });

  if (!context) {
    throw new Error('useDrawer must be used within a DrawerContextProvider');
  }

  const show = () => {
    setDrawerState({ isDrawerOpen: true });
  };

  const hide = () => {
    setDrawerState({ isDrawerOpen: false });
  };

  return { show, hide, isDrawerOpen: drawerState.isDrawerOpen,

};
};

export default useDrawer;
