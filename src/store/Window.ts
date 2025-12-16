import { create } from 'zustand';

type ToggleData = {
  isOpen: boolean;
  activeForms: 'login' | 'registr';
  openWindow: (form: 'login' | 'registr') => void;
  closeWindow: () => void;
};

export const useToggleWindow = create<ToggleData>((setForm) => ({
  isOpen: false,
  activeForms: 'login',
  openWindow: (form) => setForm({ isOpen: true, activeForms: form }),
  closeWindow: () => setForm({ isOpen: false }),
}));
