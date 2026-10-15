'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExperienceCard from '@/components/ExperienceCard';
import { experiences, Experience } from '@/data/experiences';
import { Search, Filter } from 'lucide-react';
import Link from 'next/link';

export default function ExperiencesContent() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get('search') || '');
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'All');
  const [selectedDestination, setSelectedDestination] = useState(searchParams.get('destination') || 'All');

  const categories = ['All', 'Adventure', 'Culture', 'Food', 'Wellness', 'Nature'];
  const destinations = ['All', ...Array.from(new Set(experiences.map(exp => exp.destination))).sort()];

  const filteredExperiences = useMemo(() => {
    return experiences.filter(exp => {
      const matchesSearch = new RegExp(searchTerm, 'i').test(exp.title) || 
                           new RegExp(searchTerm, 'i').test(exp.description);
      const matchesCategory = selectedCategory === 'All' || exp.category === selectedCategory;
      const matchesDestination = selectedDestination === 'All' || exp.destination === selectedDestination;
      return matchesSearch && matchesCategory && matchesDestination;
    });
  }, [searchTerm, selectedCategory, selectedDestination]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleDestinationChange = (destination: string) => {
    setSelectedDestination(destination);
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Explorar Experiencias</h1>
            <p className="text-gray-600 text-lg">Descubre {filteredExperiences.length} experiencias increíbles</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-bold text-gray-900">Filtros</h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">Categoría</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => handleCategoryChange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-3">Destino</label>
                    <select
                      value={selectedDestination}
                      onChange={(e) => handleDestinationChange(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {destinations.map(dest => (
                        <option key={dest} value={dest}>{dest}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedDestination('All');
                    }}
                    className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
                  >
                    Limpiar Filtros
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar experiencias..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {filteredExperiences.length === 0 ? (
                <div className="bg-white rounded-lg shadow-md p-12 text-center">
                  <p className="text-gray-600 text-lg mb-4">No se encontraron experiencias que coincidan con tus filtros.</p>
                  <button
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('All');
                      setSelectedDestination('All');
                    }}
                    className="text-blue-600 font-semibold hover:text-blue-700"
                  >
                    Ver todas las experiencias
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredExperiences.map(experience => (
                    <ExperienceCard key={experience.id} experience={experience} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
