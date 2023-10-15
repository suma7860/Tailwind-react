import React, { createContext } from 'react';

interface DrawerContextProps {
  direction: 'left' | 'right' | 'top' | 'bottom';
  animation: 'ease-out' | 'none'| string
  speed: number | string;
}

const defaultContextValues: DrawerContextProps = {
  direction: 'left',
  animation: 'ease-out',
  speed: '0.5s',
};

export const DrawerContext = createContext<DrawerContextProps>(defaultContextValues);
