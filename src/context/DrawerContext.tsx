import React, { createContext } from 'react';

interface DrawerContextProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  animation: 'slide' | 'none';
  speed: number;
}

const defaultContextValues: DrawerContextProps = {
  direction: 'left',
  animation: 'slide',
  speed: 300,
};

export const DrawerContext = createContext<DrawerContextProps>(defaultContextValues);
