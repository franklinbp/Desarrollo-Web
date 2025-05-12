import React from 'react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: 'Precios competitivos',
      description: 'Los mejores precios del mercado con descuentos especiales para compras al por mayor.'
    },
    {
      title: 'Soporte técnico',
      description: 'Asistencia personalizada para la instalación y activación de tus productos.'
    },
    {
      title: 'Activación garantizada',
      description: 'Todas nuestras licencias son 100% originales y con garantía de activación.'
    },
    {
      title: 'Entrega inmediata',
      description: 'Recibe tus licencias al instante en tu correo electrónico después del pago.'
    }
  ];

  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">¿Por qué elegirnos?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200 hover:border-cyan-400 transition">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold mb-2 text-blue-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;