import React, { createContext } from 'react';

export const NavigationContext = createContext();

export default function NavigationContextProvider(props) {
  return (
    <NavigationContext.Provider value={{}}>
      {props.children}
    </NavigationContext.Provider>
  );
}
