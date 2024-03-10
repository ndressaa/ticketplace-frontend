'use client';

import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [globalState, setGlobalState] = useState({
    user_id: undefined,
    auth_token: undefined,
  });

  return (
    <AppContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
