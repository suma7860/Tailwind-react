import React, { ReactNode } from 'react';
import { DrawerContext } from './DrawerContext';



interface DrawerContextProps {
  direction: 'left' | 'right' | 'top' | 'bottom' ;
  animation: 'slide' | 'none';
  speed: number;
}
interface DrawerContextProviderProps {
  children: ReactNode;
  contextValues: DrawerContextProps; // Pass the context values as a prop
}

export const DrawerContextProvider: React.FC<DrawerContextProviderProps> = ({ children, contextValues }) => {
  return (
    <DrawerContext.Provider value={contextValues}>
      {children}
    </DrawerContext.Provider>
  );
}
