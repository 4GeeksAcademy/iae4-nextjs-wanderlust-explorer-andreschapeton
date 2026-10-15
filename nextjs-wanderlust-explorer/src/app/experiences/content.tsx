'use client';

import ExperienceCard from '@/components/ExperienceCard';
import SearchBar from '@/components/SearchBar';
import FilterBar from '@/components/FilterBar';
import { useFilters, CATEGORIES, DESTINATIONS } from '@/hooks/useFilters';

export default function ExperiencesContent() {
  const {
    searchTerm,
    setSearchTerm,
    category,
    setCategory,
    destination,
    setDestination,
    clearFilters,
    filteredExperiences,
    returnHref,
  } = useFilters();

  return (
    <main className="flex-1 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Explorar Experiencias</h1>
          <p className="text-gray-600 text-lg">Descubre {filteredExperiences.length} experiencias increíbles</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          <div className="lg:col-span-1">
            <FilterBar
              categories={CATEGORIES}
              destinations={DESTINATIONS}
              category={category}
              destination={destination}
              onCategoryChange={setCategory}
              onDestinationChange={setDestination}
              onClear={clearFilters}
            />
          </div>

          <div className="lg:col-span-3">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />

            {filteredExperiences.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <p className="text-gray-600 text-lg mb-4">No se encontraron resultados</p>
                <button onClick={clearFilters} className="text-blue-600 font-semibold hover:text-blue-700">
                  Ver todas las experiencias
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredExperiences.map(experience => (
                  <ExperienceCard key={experience.id} experience={experience} returnHref={returnHref} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
