import React from 'react';
import { Button, ButtonGroup, SplitButton } from '../../../components/ui/Button';
import { Card } from '../../../components/ui/Card';
import { Settings, Save, Trash2 } from 'lucide-react';
import { useToast } from '../../../app/providers/ToastProvider';

export default function ButtonsShowcase() {
  const { toast } = useToast();
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card title="Button Variants" subtitle="Standard styling states.">
          <div className="flex flex-wrap gap-2.5 items-center">
            <Button variant="primary">Primary Action</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline Border</Button>
            <Button variant="ghost">Ghost Link</Button>
            <Button variant="destructive" leftIcon={<Trash2 className="h-4 w-4" />}>Delete</Button>
            <Button variant="link">Underlined Link</Button>
          </div>
        </Card>

        <Card title="Button Sizes & Icons" subtitle="Sizes sm, md, lg.">
          <div className="flex flex-wrap gap-2.5 items-center">
            <Button size="sm" variant="primary">Small Button</Button>
            <Button size="md" variant="primary">Default size</Button>
            <Button size="lg" variant="primary">Large Canvas</Button>
            <Button variant="outline" size="sm" leftIcon={<Settings className="h-4 w-4" />}>Settings</Button>
            <Button variant="outline" size="icon"><Save className="h-4 w-4" /></Button>
          </div>
        </Card>

        <Card title="Loading & Disabled States">
          <div className="flex flex-wrap gap-2.5 items-center">
            <Button isLoading variant="primary">Saving Database</Button>
            <Button disabled variant="primary">Disabled primary</Button>
            <Button disabled variant="outline">Disabled outline</Button>
          </div>
        </Card>

        <Card title="Button Groups & Splits">
          <div className="flex flex-wrap gap-4 items-center">
            <ButtonGroup>
              <Button variant="outline" size="sm">Left Column</Button>
              <Button variant="outline" size="sm">Middle</Button>
              <Button variant="outline" size="sm">Right Column</Button>
            </ButtonGroup>
            <SplitButton label="Export Formats" onClick={() => toast.info('Selected Default PDF export.')}>
              <button onClick={() => toast.success('CSV Generated')} className="w-full text-left px-3 py-1.5 hover:bg-accent text-xs">Spreadsheet CSV</button>
              <button onClick={() => toast.success('PDF Generated')} className="w-full text-left px-3 py-1.5 hover:bg-accent text-xs font-semibold">Printable PDF</button>
            </SplitButton>
          </div>
        </Card>
      </div>
    </div>
  );
}
