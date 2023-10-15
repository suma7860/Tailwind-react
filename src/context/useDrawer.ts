import React, { useContext, useState, useCallback } from 'react';
import { DrawerContext } from './DrawerContext';

interface DrawerState {
  isDrawerOpen: boolean;
}

const useDrawer = () => {
  const context = useContext(DrawerContext);

  if (!context) {
    throw new Error('useDrawer must be used within a DrawerContextProvider');
  }

  const [drawerState, setDrawerState] = useState<DrawerState>({
    isDrawerOpen: false,
  });

  const show = useCallback(() => {
    setDrawerState({ isDrawerOpen: true });
  }, []);

  const hide = useCallback(() => {
    setDrawerState({ isDrawerOpen: false });
  }, []);

  const animationStyle = {
    // transition: `transform ${context.speed}ms ${context.animation}`,
    transition: `transform 300ms ease-out`,
  };

  const drawerStyle = {
    transform: drawerState.isDrawerOpen
      ? `translateX(0)`
      : context.direction === 'left'
      ? `translateX(-100%)`
      : context.direction === 'right'
      ? `translateX(100%)`
      : context.direction === 'top'
      ? `translateY(-100%)`
      : `translateY(100%)`,
  };

  return { show, hide, isDrawerOpen: drawerState.isDrawerOpen, animationStyle, drawerStyle };
};

export default useDrawer;
