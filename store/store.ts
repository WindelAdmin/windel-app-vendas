import { create } from 'zustand';

export interface SallerState {
 showModalCharger: boolean;
 setShowModalCharger: (value: boolean) => void;
 showModalPaymentMethod: boolean;
 setShowModalPaymentMethod: (value: boolean) => void;
 showModalLogout: boolean;
 setShowModalLogout: (value: boolean) => void;
}

export const useStore = create<SallerState>((set) => ({
  showModalCharger: false,
  showModalPaymentMethod: false,
  showModalLogout: false,
  setShowModalCharger: (value) => set({showModalCharger: value}),
  setShowModalPaymentMethod: (value) => set({showModalPaymentMethod: value}),
  setShowModalLogout: (value) => set({showModalLogout: value})
}));
