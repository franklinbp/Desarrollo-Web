import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Licencias Originales al Mejor Precio</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl">
          Software, streaming y juegos para Ecuador y Perú con garantía y soporte personalizado
        </p>
        <button className="bg-white text-blue-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full text-lg transition transform hover:scale-105 shadow-lg">
          Explorar productos
        </button>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Windows', 'Office', 'Spotify', 'PlayStation'].map((item) => (
            <div key={item} className="bg-white bg-opacity-10 p-4 rounded-lg backdrop-blur-sm">
              <p className="font-medium">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;