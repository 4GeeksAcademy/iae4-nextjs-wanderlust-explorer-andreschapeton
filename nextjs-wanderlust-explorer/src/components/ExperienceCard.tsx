'use client';

import Link from 'next/link';
import { Heart, Star, MapPin, DollarSign } from 'lucide-react';
import { Experience } from '@/data/experiences';
import { useFavorites } from '@/app/layout';
import Image from 'next/image';

interface ExperienceCardProps {
  experience: Experience;
}

export default function ExperienceCard({ experience }: ExperienceCardProps) {
  const { favorites, setFavorites } = useFavorites();
  const isFavorite = favorites.includes(experience.id);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== experience.id));
    } else {
      setFavorites([...favorites, experience.id]);
    }
  };

  return (
    <Link href={`/experiences/${experience.id}`}>
      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden cursor-pointer h-full flex flex-col">
        <div className="relative w-full h-48 overflow-hidden bg-gray-200">
          <img
            src={experience.imageUrl}
            alt={experience.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <button
              onClick={toggleFavorite}
              className={`p-2 rounded-full transition-all ${
                isFavorite 
                  ? 'bg-red-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
              }`}
              aria-label="Add to favorites"
            >
              <Heart className="w-5 h-5" fill={isFavorite ? 'currentColor' : 'none'} />
            </button>
          </div>
          <div className="absolute top-3 left-3">
            <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              {experience.category}
            </span>
          </div>
        </div>

        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
            {experience.title}
          </h3>

          <p className="text-gray-600 text-sm mb-3 line-clamp-2 flex-1">
            {experience.description}
          </p>

          <div className="space-y-2 mb-3">
            <div className="flex items-center text-gray-700 text-sm">
              <MapPin className="w-4 h-4 mr-2 text-blue-600" />
              <span>{experience.destination}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-semibold text-gray-900">{experience.rating}</span>
              </div>
              <div className="flex items-center text-blue-600 font-bold">
                <DollarSign className="w-4 h-4" />
                <span>{experience.price}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-4">
          <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-shadow duration-300">
            Ver Detalles
          </button>
        </div>
      </article>
    </Link>
  );
}
