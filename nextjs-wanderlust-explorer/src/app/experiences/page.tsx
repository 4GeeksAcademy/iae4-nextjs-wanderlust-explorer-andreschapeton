'use client';

import { Suspense } from 'react';
import ExperiencesContent from './content';

export default function ExperiencesPage() {
  return (
    <Suspense fallback={<div className="text-center py-12">Cargando...</div>}>
      <ExperiencesContent />
    </Suspense>
  );
}
