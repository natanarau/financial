import React from 'react';
import * as S from './styles';
import Modal from '@mui/material/Modal';
import { useModalState } from 'hooks/useModalState';
import CloseIcon from '@mui/icons-material/Close';
import { Container } from '@mui/material';

type ModalProps = {
  children: React.ReactNode;
};

export default function ModalFinance({ children }: ModalProps) {
  const { 
    modalOpen, 
    setModalOpen, 
    setExpense, 
    setRevenue, 
    setCardExpense 
  } = useModalState();

  const handleClose = () => (
    setModalOpen(false),
    setExpense(false),
    setRevenue(false),
    setCardExpense(false)
  );

  return (
    <>
      <Modal
        open={modalOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <S.WhapperModal>
          <CloseIcon onClick={handleClose} />
          <Container sx={{marginTop: '20px', marginBottom: '20px'}}>
            {children}
          </Container>
        </S.WhapperModal>
      </Modal>
    </>
  );
}
