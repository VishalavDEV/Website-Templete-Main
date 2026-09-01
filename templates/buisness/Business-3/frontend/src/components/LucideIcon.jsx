import React from 'react';
import * as Icons from 'lucide-react';

const LucideIcon = ({ name, className = '', size = 24 }) => {
  const IconComponent = Icons[name];
  if (!IconComponent) {
    return <Icons.HelpCircle className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};

export default LucideIcon;
