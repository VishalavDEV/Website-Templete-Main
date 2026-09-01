import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { BasicForm } from '../BasicForm';

export function ModalForm() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="select-none">
      <Button variant="primary" size="sm" onClick={() => setOpen(true)}>Open Modal Form</Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} title="Form Overlay" type="standard">
        <div className="p-1">
          <BasicForm />
        </div>
      </Modal>
    </div>
  );
}
