import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="bg-blue-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mr-3">
            <span className="text-blue-900 font-bold text-xl">MS</span>
          </div>
          <h1 className="text-2xl font-bold">Maleskin Software</h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="hover:text-cyan-300 transition">Inicio</a>
          <a href="#productos" className="hover:text-cyan-300 transition">Productos</a>
          <a href="#beneficios" className="hover:text-cyan-300 transition">Beneficios</a>
          <a href="#testimonios" className="hover:text-cyan-300 transition">Testimonios</a>
          <a href="#contacto" className="hover:text-cyan-300 transition">Contacto</a>
        </nav>
        <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-6 rounded-full transition transform hover:scale-105">
          Comprar ahora
        </button>
      </div>
    </header>
  );
};

export default LayoutHeader;