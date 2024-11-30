'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import type { getDictionary } from '@/features/internationalization/get-dictionaries';

export function CounterComponent({
  dictionary,
}: {
  dictionary: Awaited<ReturnType<typeof getDictionary>>['counter'];
}) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center gap-2">
      This component is rendered on the client:
      <Button
        className="max-w-32"
        variant="outline"
        onClick={() => setCount(n => n - 1)}
      >
        {dictionary.decrement}
      </Button>
      <p className="text-2xl">{count}</p>
      <Button className="max-w-32" onClick={() => setCount(n => n + 1)}>
        {dictionary.increment}
      </Button>
    </div>
  );
}
