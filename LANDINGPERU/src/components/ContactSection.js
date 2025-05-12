import React from 'react';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Nombre</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-1">Correo electrónico</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Mensaje</label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 rounded bg-white bg-opacity-20 border border-white border-opacity-30 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                    placeholder="¿Cómo podemos ayudarte?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-white text-blue-800 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition"
                >
                  Enviar mensaje
                </button>
              </form>
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">O contáctanos directamente</h3>
                <a
                  href="https://wa.me/593123456789"
                  className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full mb-4 transition"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
                <p className="mb-2">Email: info@maleskinsoftware.com</p>
                <p>Teléfono: +593 123 456 789</p>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Países que atendemos</h3>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-yellow-400 rounded-full mr-2"></span>
                    <span>Ecuador</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-6 h-6 bg-red-500 rounded-full mr-2"></span>
                    <span>Perú</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;