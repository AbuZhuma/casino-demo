export type ModalType =
  | "game"
  | null;

export type ModalState = {
  modal: ModalType;

  openModal: (modal: ModalType) => void;
  closeModal: () => void;
};
