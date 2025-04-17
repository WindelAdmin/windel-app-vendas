import { create } from 'zustand';

export interface SallerState {
 showModalCharger: boolean;
 setShowModalCharger: (value: boolean) => void;
 showModalPaymentMethod: boolean;
 setShowModalPaymentMethod: (value: boolean) => void;
 showModalLogout: boolean;
 setShowModalLogout: (value: boolean) => void;
 showModalAdjustValue: boolean;
 setShowModalAsjustValue: (value: boolean) => void;
 label:string;
 setLabel: (value: string) => void;
}

export const useStore = create<SallerState>((set) => ({
  showModalCharger: false,
  showModalPaymentMethod: false,
  showModalLogout: false,
  showModalAdjustValue: false,
  label: "",
  setShowModalCharger: (value) => set({showModalCharger: value}),
  setShowModalPaymentMethod: (value) => set({showModalPaymentMethod: value}),
  setShowModalLogout: (value) => set({showModalLogout: value}),
  setShowModalAsjustValue: (value) => set({showModalAdjustValue: value}),
  setLabel: (value) => set({label: value})
}));
