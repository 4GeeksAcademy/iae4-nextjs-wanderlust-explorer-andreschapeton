'use client';

import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useFavorites } from '@/app/layout';

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">W</span>
          </div>
          <span className="font-bold text-xl text-gray-900">Wanderlust</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Inicio
          </Link>
          <Link href="/experiences" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Explorar
          </Link>
          <Link href="/profile" className="text-gray-700 hover:text-blue-600 font-medium transition">
            Perfil
          </Link>
          <Link href="/favorites" className="relative flex items-center space-x-1 text-gray-700 hover:text-blue-600 font-medium transition">
            <Heart className="w-5 h-5" />
            {favorites.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
