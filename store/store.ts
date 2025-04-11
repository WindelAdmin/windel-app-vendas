import { create } from 'zustand';

export interface SallerState {
 showModalCharger: boolean
 setShowModalChanger: (value: boolean) => void
}

export const useStore = create<SallerState>((set) => ({
  showModalCharger: false,
  setShowModalChanger: (value) => set({showModalCharger: value})
}));
