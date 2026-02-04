import { create } from "zustand";
import { ModalState } from "./types";

export const useModalStore = create<ModalState>((set) => ({
  modal: null,

  openModal: (modal) => set({ modal }),

  closeModal: () => set({ modal: null }),
}));
