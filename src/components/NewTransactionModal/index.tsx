import { useState } from "react";
import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

import { Container, TransactionTaypeContainer, RadioBox } from "./styles";
interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [type, setType] = useState("deposit");

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>
      <Container>
        <h2>Registo transação</h2>
        <input placeholder="Titulo" />
        <input type="number" placeholder="Valor" />
        <TransactionTaypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTaypeContainer>
        <input placeholder="categoria" />
        <button type="submit">Registar</button>
      </Container>
    </Modal>
  );
}
