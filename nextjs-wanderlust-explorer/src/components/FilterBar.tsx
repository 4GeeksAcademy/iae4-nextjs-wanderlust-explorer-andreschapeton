'use client';

import { Filter } from 'lucide-react';
import { ALL } from '@/hooks/useFilters';

interface FilterBarProps {
  categories: string[];
  destinations: string[];
  category: string;
  destination: string;
  onCategoryChange: (value: string) => void;
  onDestinationChange: (value: string) => void;
  onClear: () => void;
}

export default function FilterBar({
  categories,
  destinations,
  category,
  destination,
  onCategoryChange,
  onDestinationChange,
  onClear,
}: FilterBarProps) {
  const selectClass =
    'w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent';

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center space-x-2 mb-6">
        <Filter className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-bold text-gray-900">Filtros</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-3">Categoría</label>
          <select id="category" value={category} onChange={(e) => onCategoryChange(e.target.value)} className={selectClass}>
            <option value={ALL}>Todas</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="destination" className="block text-sm font-semibold text-gray-900 mb-3">Destino</label>
          <select id="destination" value={destination} onChange={(e) => onDestinationChange(e.target.value)} className={selectClass}>
            <option value={ALL}>Todos</option>
            {destinations.map(dest => (
              <option key={dest} value={dest}>{dest}</option>
            ))}
          </select>
        </div>

        <button
          onClick={onClear}
          className="w-full bg-gray-200 text-gray-900 py-2 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
}
