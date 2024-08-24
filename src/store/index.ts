'use client';

import { Screen, UserType } from '@/interfaces';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type State = {
  isLoggedIn: boolean;
  userType?: UserType;
  userName?: string;
  userId?: number;
  authToken?: string;
  currentPage?: Screen;
};

const initialState: State = {
  isLoggedIn: false,
  userType: undefined,
  userName: undefined,
  userId: undefined,
  authToken: undefined,
  currentPage: undefined,
};

const useStore = create<any>()(
  persist(
    (set) => ({
      ...initialState,
      setIsLoggedIn: (value: boolean) => set({ isLoggedIn: value }),
      setUserType: (type: UserType) => set({ userType: type }),
      setUserName: (name: string) => set({ userName: name }),
      setUserId: (id: number) => set({ userId: id }),
      setAuthToken: (token: string) => set({ authToken: token }),
      setCurrentPage: (page: Screen) => set({ currentPage: page }),
    }),
    {
      name: 'store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useStore;
