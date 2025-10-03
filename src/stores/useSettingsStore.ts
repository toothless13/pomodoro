import { create } from "zustand";

type SettingsStore = {
  autoplayEnabled: boolean;
  toggleAutoplay: () => void;
};

export const useSettingsStore = create<SettingsStore>((set) => ({
  autoplayEnabled: true,
  toggleAutoplay: () => {
    set((state) => ({ autoplayEnabled: !state.autoplayEnabled }));
  },
}));
