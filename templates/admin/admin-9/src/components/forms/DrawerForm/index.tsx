import React, { useState } from 'react';
import { Button } from '../../ui/Button';
import { Modal } from '../../ui/Modal';
import { BasicForm } from '../BasicForm';

export function DrawerForm() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="select-none">
      <Button variant="secondary" size="sm" onClick={() => setOpen(true)}>Open Slide Drawer Form</Button>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)} title="Drawer Profile Form" type="drawer">
        <div className="p-2">
          <BasicForm />
        </div>
      </Modal>
    </div>
  );
}
