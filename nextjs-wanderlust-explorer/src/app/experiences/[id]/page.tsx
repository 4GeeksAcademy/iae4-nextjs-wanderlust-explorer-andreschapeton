import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { experiences } from '@/data/experiences';
import ExperienceDetail from './ExperienceDetail';

export function generateStaticParams() {
  return experiences.map(exp => ({ id: exp.id }));
}

export default async function ExperienceDetailPage({ params }: PageProps<'/experiences/[id]'>) {
  // En Next.js 16 `params` es una Promise
  const { id } = await params;
  const experience = experiences.find(exp => exp.id === id);

  if (!experience) {
    notFound();
  }

  return (
    <Suspense fallback={<div className="flex-1" aria-busy="true">Cargando experiencia...</div>}>
      <ExperienceDetail experience={experience} />
    </Suspense>
  );
}
