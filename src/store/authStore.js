import { create } from "zustand";

const useAuthStore = create((set) => ({
    user: JSON.parse(localStorage.getItem("user-insta-info")),
    login: (user) => set({ user }),
    logout: () => set({ user: null }),
    setUser: (user) => set({ user }) //created this for more look our code more readable 
}))

export default useAuthStore;