import React from 'react';
import { SearchForm } from '../../../components/forms';
import { Card } from '../../../components/ui/Card';

export default function SearchFormsShowcase() {
  return (
    <div className="max-w-md mx-auto">
      <Card title="Search Archive Input" subtitle="Mock search field query indices.">
        <SearchForm />
      </Card>
    </div>
  );
}
