import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Registo transação</h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <input placeholder="categoria" />
        <button type="submit">Registar</button>
      </Container>
    </Modal>
  );
}
