import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Wanderlust Labs</h3>
            <p className="text-gray-400 text-sm">
              Descubre experiencias únicas alrededor del mundo con Wanderlust Explorer.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/experiences?category=Adventure" className="hover:text-white">Aventura</Link></li>
              <li><Link href="/experiences?category=Culture" className="hover:text-white">Cultura</Link></li>
              <li><Link href="/experiences?category=Food" className="hover:text-white">Gastronomía</Link></li>
              <li><Link href="/experiences?category=Wellness" className="hover:text-white">Bienestar</Link></li>
              <li><Link href="/experiences?category=Nature" className="hover:text-white">Naturaleza</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Acerca de</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
              <li><a href="#" className="hover:text-white">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Privacidad</a></li>
              <li><a href="#" className="hover:text-white">Términos</a></li>
              <li><a href="#" className="hover:text-white">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Wanderlust Labs. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
