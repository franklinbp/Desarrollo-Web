import React from 'react';

const ProductsSection = () => {
  const categories = [
    {
      title: 'Software',
      items: ['Windows 10/11', 'Office 365', 'Adobe Creative Cloud'],
      icon: '💻'
    },
    {
      title: 'Antivirus',
      items: ['Norton', 'McAfee', 'Kaspersky'],
      icon: '🛡️'
    },
    {
      title: 'Streaming',
      items: ['Netflix', 'Disney+', 'Spotify Premium'],
      icon: '🎬'
    },
    {
      title: 'Juegos',
      items: ['Xbox Game Pass', 'PlayStation Plus', 'Steam Wallet'],
      icon: '🎮'
    }
  ];

  return (
    <section id="productos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Nuestros Productos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition">
              <div className="text-4xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-800">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;