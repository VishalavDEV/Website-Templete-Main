import React from 'react';
import { VerticalForm, HorizontalForm, InlineForm } from '../../../components/forms';
import { Card } from '../../../components/ui/Card';

export default function BasicFormsShowcase() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <VerticalForm />
      <HorizontalForm />
      <div className="md:col-span-2">
        <Card title="Inline Layout" subtitle="Horizontal single line inputs.">
          <InlineForm />
        </Card>
      </div>
    </div>
  );
}
