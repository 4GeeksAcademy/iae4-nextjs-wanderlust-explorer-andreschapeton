'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperienceCard from '@/components/ExperienceCard';
import { experiences } from '@/data/experiences';
import { useFavorites } from '@/app/layout';
import { Heart } from 'lucide-react';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const favoriteExperiences = experiences.filter(exp => favorites.includes(exp.id));

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center space-x-3">
              <Heart className="w-10 h-10 text-red-500" fill="currentColor" />
              <span>Mis Favoritos</span>
            </h1>
            <p className="text-gray-600 text-lg">
              {favorites.length === 0 
                ? 'Aún no has guardado experiencias' 
                : `Tienes ${favorites.length} experiencia${favorites.length !== 1 ? 's' : ''} guardada${favorites.length !== 1 ? 's' : ''}`
              }
            </p>
          </div>

          {favorites.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center max-w-2xl mx-auto">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Aún no tienes favoritos</h2>
              <p className="text-gray-600 mb-8">
                Explora nuestras experiencias y guarda tus favoritas para acceder a ellas fácilmente más tarde.
              </p>
              <Link
                href="/experiences"
                className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-shadow"
              >
                Explorar Experiencias
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {favoriteExperiences.map(experience => (
                <ExperienceCard key={experience.id} experience={experience} />
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
