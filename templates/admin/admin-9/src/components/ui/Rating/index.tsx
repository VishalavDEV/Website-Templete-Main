import React, { useState } from 'react';
import { Star } from 'lucide-react';

export function Rating({
  value,
  max = 5,
  onChange,
  readonly,
}: {
  value: number;
  max?: number;
  onChange?: (val: number) => void;
  readonly?: boolean;
}) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  return (
    <div className="flex items-center gap-0.5 text-warning">
      {Array.from({ length: max }).map((_, i) => {
        const index = i + 1;
        const fill = hoverValue !== null ? index <= hoverValue : index <= value;

        return (
          <Star
            key={i}
            className={`h-4 w-4 shrink-0 ${readonly ? '' : 'cursor-pointer'} ${
              fill ? 'fill-current' : 'text-muted/60'
            }`}
            onClick={() => !readonly && onChange?.(index)}
            onMouseEnter={() => !readonly && setHoverValue(index)}
            onMouseLeave={() => !readonly && setHoverValue(null)}
          />
        );
      })}
    </div>
  );
}
