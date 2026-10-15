'use client';

import { notFound, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { experiences } from '@/data/experiences';
import { useFavorites } from '@/app/layout';
import { Heart, MapPin, DollarSign, Star, ArrowLeft } from 'lucide-react';

interface ExperienceDetailPageProps {
  params: {
    id: string;
  };
}

export default function ExperienceDetailPage({ params }: ExperienceDetailPageProps) {
  const router = useRouter();
  const experience = experiences.find(exp => exp.id === params.id);
  const { favorites, setFavorites } = useFavorites();
  const isFavorite = experience && favorites.includes(experience.id);

  if (!experience) {
    notFound();
  }

  const toggleFavorite = () => {
    if (isFavorite) {
      setFavorites(favorites.filter(id => id !== experience.id));
    } else {
      setFavorites([...favorites, experience.id]);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold mb-8 transition"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </button>

          <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="relative w-full h-96 overflow-hidden">
              <img
                src={experience.imageUrl}
                alt={experience.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 right-6">
                <button
                  onClick={toggleFavorite}
                  className={`p-3 rounded-full transition-all ${
                    isFavorite 
                      ? 'bg-red-500 text-white' 
                      : 'bg-white text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <Heart className="w-6 h-6" fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>
              <div className="absolute top-6 left-6">
                <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {experience.category}
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                {experience.title}
              </h1>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                <div className="flex flex-col">
                  <span className="text-gray-600 text-sm font-semibold mb-2">Ubicación</span>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span className="text-lg font-bold text-gray-900">{experience.destination}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-600 text-sm font-semibold mb-2">Precio</span>
                  <div className="flex items-center space-x-1">
                    <DollarSign className="w-5 h-5 text-green-600" />
                    <span className="text-2xl font-bold text-gray-900">{experience.price}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-600 text-sm font-semibold mb-2">Calificación</span>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span className="text-lg font-bold text-gray-900">{experience.rating}</span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="text-gray-600 text-sm font-semibold mb-2">Categoría</span>
                  <span className="text-lg font-bold text-blue-600">{experience.category}</span>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Descripción de la Experiencia</h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {experience.description}
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Qué incluye?</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Guía profesional y experimentado</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Transporte incluido desde el punto de encuentro</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Equipo necesario para la actividad</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Seguro de viaje incluido</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    <span>Certificado de participación</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={toggleFavorite}
                  className={`py-4 rounded-lg font-bold text-lg transition-all ${
                    isFavorite 
                      ? 'bg-red-500 text-white hover:bg-red-600' 
                      : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                  }`}
                >
                  {isFavorite ? '❤️ Guardado en Favoritos' : '🤍 Guardar en Favoritos'}
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-shadow">
                  Reservar Ahora
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
