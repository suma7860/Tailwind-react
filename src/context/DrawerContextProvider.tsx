import React, { ReactNode } from 'react';
import { DrawerContext } from './DrawerContext';

interface DrawerContextProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  animation: 'ease-out' | 'none';
  speed: number|string;
}

interface DrawerContextProviderProps {
  children: ReactNode;
  contextValues: DrawerContextProps | any;
}

export const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({ children, contextValues }) => {
  return (
    <DrawerContext.Provider value={contextValues}>
      {children}
    </DrawerContext.Provider>
  );
}
