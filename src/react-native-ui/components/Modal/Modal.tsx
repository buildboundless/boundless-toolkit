import { Modal as _Modal } from "react-native";

export interface ModalProps {
  children?: React.ReactNode;
  visible?: boolean;
  onRequestClose?: () => void;
}

export default function Modal({
  children,
  visible,
  onRequestClose,
  ...props
}: ModalProps) {
  return (
    <_Modal visible={visible} onRequestClose={onRequestClose} {...props}>
      {children}
    </_Modal>
  );
}
