import React, { useState } from 'react';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { Modal } from '../../../components/ui/Modal';
import { useToast } from '../../../app/providers/ToastProvider';

export default function ModalsShowcase() {
  const { toast } = useToast();
  const [modal, setModal] = useState(false);
  const [delModal, setDelModal] = useState(false);
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="space-y-6">
      <Card title="Dialog Overlay Triggers" subtitle="Interactive overlays.">
        <div className="flex flex-wrap gap-2.5">
          <Button variant="outline" onClick={() => setModal(true)}>Standard Modal</Button>
          <Button variant="destructive" onClick={() => setDelModal(true)}>Delete Confirmation</Button>
          <Button variant="secondary" onClick={() => setDrawer(true)}>Right-Slide Drawer</Button>
        </div>
      </Card>

      <Modal isOpen={modal} onClose={() => setModal(false)} title="Standard Modal Form">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Staged viewport popup ideal for settings configuration panels.
        </p>
      </Modal>

      <Modal 
        isOpen={delModal} 
        onClose={() => setDelModal(false)} 
        title="Warning: Revoke Access Keys" 
        type="delete"
        footer={
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => setDelModal(false)}>Cancel</Button>
            <Button variant="destructive" size="sm" onClick={() => { toast.error('Revoked Access Keys.'); setDelModal(false); }}>Confirm Revoke</Button>
          </div>
        }
      >
        <p className="text-xs text-muted-foreground leading-relaxed">
          Are you sure you want to permanently revoke Wayne Staging credentials key chains?
        </p>
      </Modal>

      <Modal isOpen={drawer} onClose={() => setDrawer(false)} title="Security Audit Drawer" type="drawer">
        <p className="text-xs text-muted-foreground leading-relaxed">
          Right side details checklist. Useful for auditing log streams.
        </p>
      </Modal>
    </div>
  );
}
