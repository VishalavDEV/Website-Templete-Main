import React from 'react';
import { Card } from '../../../components/ui/Card';
import { Avatar } from '../../../components/ui/Avatar';

export default function AvatarsShowcase() {
  return (
    <div className="space-y-6">
      <Card title="Avatar Sizes" subtitle="xs, sm, md, lg, xl.">
        <div className="flex flex-wrap gap-4 items-center">
          <Avatar name="Diana Prince" size="xs" isOnline />
          <Avatar name="Bruce Wayne" size="sm" isOnline={false} />
          <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" name="Diana Prince" size="md" isOnline />
          <Avatar name="Ethan Hunt" size="lg" />
          <Avatar name="Fiona Gallagher" size="xl" isOnline />
        </div>
      </Card>
    </div>
  );
}
