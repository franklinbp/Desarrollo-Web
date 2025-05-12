import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Carlos M.',
      role: 'Empresario',
      text: 'Excelente servicio, las licencias funcionaron perfectamente y el soporte fue rápido y eficiente.',
      avatar: 'CM'
    },
    {
      name: 'Ana S.',
      role: 'Diseñadora',
      text: 'Por fin encontré un proveedor confiable para mis licencias de Adobe, 100% recomendado.',
      avatar: 'AS'
    },
    {
      name: 'Luis P.',
      role: 'Gamer',
      text: 'Compré mi suscripción de Xbox Game Pass y llegó al instante, sin problemas para activarla.',
      avatar: 'LP'
    }
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Lo que dicen nuestros clientes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;