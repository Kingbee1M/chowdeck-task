import { create } from 'zustand';

interface UserInfo {
  id: string;
  email: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  location?: string;
}

interface UserStore {
  user: UserInfo | null;
  setUser: (user: UserInfo) => void;
  setFirstName: (firstName: string) => void;
  setLastName: (lastName: string) => void;
  setEmail: (email: string) => void;
  setLocation: (location: string) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: "1",
    email: "habeeb@example.com",
    firstName: "Habeeb",
    lastName: "Idris",
    location: "Alimosho"
  },
  setUser: (user) => set({ user }),
  setFirstName: (firstName) =>
    set((state) => ({
      user: state.user ? { ...state.user, firstName } : null,
    })),
  setLastName: (lastName) =>
    set((state) => ({
      user: state.user ? { ...state.user, lastName } : null,
    })),
  setEmail: (email) =>
    set((state) => ({
      user: state.user ? { ...state.user, email } : null,
    })),
  setLocation: (location) =>
    set((state) => ({
      user: state.user ? { ...state.user, location } : null,
    })),
  clearUser: () => set({ user: null }),
}));