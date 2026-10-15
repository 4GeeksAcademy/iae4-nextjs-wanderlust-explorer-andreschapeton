import Link from 'next/link';
import { ArrowRight, Compass, Heart, Users } from 'lucide-react';

export default function Home() {
  return (
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 sm:py-32">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6">
                Explora el Mundo con <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Wanderlust</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Descubre experiencias únicas y auténticas en más de 100 destinos alrededor del mundo. Desde aventuras extremas hasta retiros de bienestar, encuentra tu próxima experiencia memorable.
              </p>
              <Link
                href="/experiences"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <span>Explorar Experiencias</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Compass className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">100+ Experiencias</h3>
                <p className="text-gray-600">Elige entre cientos de experiencias cuidadosamente seleccionadas en destinos fascinantes.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Guarda Favoritos</h3>
                <p className="text-gray-600">Marca tus experiencias favoritas y crea tu lista personal de deseos para viajes futuros.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Comunidad Global</h3>
                <p className="text-gray-600">Únete a miles de viajeros que ya están descubriendo el mundo con Wanderlust.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">¿Por Qué Elegir Wanderlust?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Experiencias Auténticas</h3>
                  <p className="text-gray-600 mt-2">Cada experiencia es cuidadosamente seleccionada por nuestro equipo de expertos viajeros.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Filtros Inteligentes</h3>
                  <p className="text-gray-600 mt-2">Busca por categoría, destino y precio para encontrar exactamente lo que buscas.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-pink-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Reseñas Verificadas</h3>
                  <p className="text-gray-600 mt-2">Lee reseñas reales de viajeros que han vivido estas experiencias.</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">Soporte 24/7</h3>
                  <p className="text-gray-600 mt-2">Nuestro equipo está disponible para ayudarte con cualquier pregunta o duda.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
