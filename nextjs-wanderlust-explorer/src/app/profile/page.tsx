'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useFavorites } from '@/app/layout';
import { User, Mail, MapPin, Heart, Calendar } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { favorites } = useFavorites();

  return (
    <>
      <Header />
      <main className="flex-1 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">Mi Perfil</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">Andrés Chapeton</h2>
                    <p className="text-gray-600">Viajero Aventurero</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Email</p>
                      <p className="text-gray-900 font-semibold">andres@wanderlust.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <MapPin className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Ubicación</p>
                      <p className="text-gray-900 font-semibold">Medellín, Colombia</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <Calendar className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-gray-600">Miembro desde</p>
                      <p className="text-gray-900 font-semibold">Enero 2024</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Acerca de mí</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Soy un apasionado viajero que disfruta descubriendo nuevas culturas, probando comidas locales auténticas y realizando actividades de aventura. Me encanta compartir mis experiencias con otros viajeros y conocer nuevas perspectivas del mundo.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Estadísticas de Viaje</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-6 rounded-lg text-center">
                    <p className="text-3xl font-bold text-blue-600">42</p>
                    <p className="text-gray-600 text-sm mt-2">Países Visitados</p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg text-center">
                    <p className="text-3xl font-bold text-purple-600">127</p>
                    <p className="text-gray-600 text-sm mt-2">Experiencias Realizadas</p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-lg text-center">
                    <p className="text-3xl font-bold text-pink-600">1,247</p>
                    <p className="text-gray-600 text-sm mt-2">Kilómetros Recorridos</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg text-center">
                    <p className="text-3xl font-bold text-green-600">89</p>
                    <p className="text-gray-600 text-sm mt-2">Amigos en Wanderlust</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-500" fill="currentColor" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{favorites.length}</h3>
                  <p className="text-gray-600 mb-6">
                    Experiencia{favorites.length !== 1 ? 's' : ''} Guardada{favorites.length !== 1 ? 's' : ''}
                  </p>
                  <Link
                    href="/favorites"
                    className="block w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-shadow mb-4"
                  >
                    Ver Favoritos
                  </Link>
                </div>

                <hr className="my-6" />

                <div>
                  <h4 className="font-bold text-gray-900 mb-4">Configuración</h4>
                  <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Editar Perfil</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Cambiar Contraseña</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Notificaciones</a></li>
                    <li><a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Privacidad</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
