import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SparklesIcon,
  FireIcon
} from '@heroicons/react/24/outline';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const menuData = {
    appetizers: [
      {
        name: 'Bruschetta al Pomodoro',
        description: 'Grilled bread with fresh tomatoes, basil, garlic, and extra virgin olive oil',
        price: '$12',
        dietary: ['vegetarian']
      },
      {
        name: 'Calamari Fritti',
        description: 'Crispy fried squid with spicy marinara and lemon aioli',
        price: '$16',
        special: false
      },
      {
        name: 'Prosciutto e Melone',
        description: 'Thinly sliced prosciutto di Parma with fresh cantaloupe',
        price: '$14',
        dietary: []
      },
      {
        name: 'Caprese Salad',
        description: 'Fresh mozzarella, heirloom tomatoes, basil, balsamic reduction',
        price: '$13',
        dietary: ['vegetarian']
      }
    ],
    pasta: [
      {
        name: 'Linguine alle Vongole',
        description: 'Fresh clams with white wine, garlic, cherry tomatoes, and Italian herbs',
        price: '$32',
        special: true
      },
      {
        name: 'Pappardelle Bolognese',
        description: "Chef Antonio's signature meat sauce with wide ribbon pasta",
        price: '$28',
        dietary: []
      },
      {
        name: 'Fettuccine Alfredo',
        description: 'House-made fettuccine in creamy Parmigiano-Reggiano sauce',
        price: '$26',
        dietary: ['vegetarian']
      },
      {
        name: 'Gnocchi al Pesto',
        description: 'Potato dumplings with basil pesto, pine nuts, and Parmigiano',
        price: '$25',
        dietary: ['vegetarian']
      },
      {
        name: 'Spaghetti Carbonara',
        description: 'Guanciale, egg yolk, Pecorino Romano, black pepper',
        price: '$27',
        dietary: []
      },
      {
        name: 'Ravioli di Ricotta',
        description: 'House-made ricotta ravioli with sage brown butter sauce',
        price: '$29',
        dietary: ['vegetarian']
      }
    ],
    entrees: [
      {
        name: 'Osso Buco',
        description: 'Braised veal shanks with saffron risotto and gremolata',
        price: '$38',
        special: true
      },
      {
        name: 'Branzino al Forno',
        description: 'Whole roasted Mediterranean sea bass with herbs and lemon',
        price: '$36',
        dietary: []
      },
      {
        name: 'Chicken Parmigiana',
        description: 'Breaded chicken breast, marinara, mozzarella, served with pasta',
        price: '$30',
        dietary: []
      },
      {
        name: 'Bistecca alla Fiorentina',
        description: '20oz T-bone steak, grilled, with rosemary potatoes',
        price: '$52',
        dietary: []
      },
      {
        name: 'Saltimbocca alla Romana',
        description: 'Veal scaloppine with prosciutto and sage in white wine sauce',
        price: '$34',
        dietary: []
      },
      {
        name: 'Eggplant Parmigiana',
        description: 'Layered eggplant with marinara, mozzarella, and Parmigiano',
        price: '$24',
        dietary: ['vegetarian']
      }
    ],
    desserts: [
      {
        name: 'Tiramisu',
        description: "Chef Antonio's signature espresso-soaked ladyfingers with mascarpone",
        price: '$12',
        special: true
      },
      {
        name: 'Panna Cotta',
        description: 'Vanilla cream custard with berry compote',
        price: '$10',
        dietary: ['vegetarian']
      },
      {
        name: 'Cannoli Siciliani',
        description: 'Crispy shells filled with sweet ricotta and chocolate chips',
        price: '$11',
        dietary: ['vegetarian']
      },
      {
        name: 'Gelato',
        description: 'House-made Italian ice cream - ask about flavors',
        price: '$9',
        dietary: ['vegetarian']
      }
    ],
    beverages: [
      {
        name: 'Italian Wines by the Glass',
        description: 'Chianti, Pinot Grigio, Prosecco, Barolo',
        price: '$12-18',
        dietary: []
      },
      {
        name: 'Italian Wines by the Bottle',
        description: 'Extensive selection from Tuscany, Piedmont, and Veneto',
        price: '$42-180',
        dietary: []
      },
      {
        name: 'Espresso',
        description: 'Traditional Italian espresso',
        price: '$4',
        dietary: ['vegetarian']
      },
      {
        name: 'Cappuccino',
        description: 'Espresso with steamed milk and foam',
        price: '$6',
        dietary: ['vegetarian']
      },
      {
        name: 'Italian Sodas',
        description: 'San Pellegrino, Aranciata, Limonata',
        price: '$5',
        dietary: ['vegetarian']
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'pasta', name: 'Pasta' },
    { id: 'entrees', name: 'Entrees' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'beverages', name: 'Beverages' }
  ];

  const getFilteredItems = () => {
    if (activeCategory === 'all') {
      return Object.entries(menuData).flatMap(([category, items]) =>
        items.map(item => ({ ...item, category }))
      );
    }
    return menuData[activeCategory].map(item => ({ ...item, category: activeCategory }));
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl md:text-2xl">
            Authentic Italian flavors crafted with passion
          </p>
        </motion.div>
      </section>

      {/* Daily Specials Banner */}
      <div className="bg-amber-50 border-y-4 border-amber-600 py-4 shadow-lg">
        <div className="max-w-full w-full mx-auto px-4">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <SparklesIcon className="h-6 w-6 text-amber-600 flex-shrink-0" />
            <p className="text-lg font-bold text-gray-900 text-center">
              Daily Specials: Ask your server about today's fresh catch and seasonal dishes
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-md sticky top-20 z-40">
        <div className="max-w-full w-full mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeCategory === category.id
                    ? 'bg-red-600 text-white shadow-lg scale-105 hover:bg-red-700'
                    : 'bg-gray-100 text-gray-900 border-2 border-gray-300 hover:bg-gray-200 hover:border-gray-400'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="max-w-full w-full mx-auto px-4">
          <motion.div
            layout
            className="grid gap-6"
          >
            {Object.entries(
              activeCategory === 'all'
                ? menuData
                : { [activeCategory]: menuData[activeCategory] }
            ).map(([category, items]) => (
              <div key={category}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 capitalize border-b-2 border-primary pb-2">
                  {category}
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {items.map((item, index) => (
                    <motion.div
                      key={index}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-start space-x-2">
                          <h3 className="text-xl font-bold text-gray-900">
                            {item.name}
                          </h3>
                          {item.special && (
                            <SparklesIcon className="h-5 w-5 text-secondary flex-shrink-0" />
                          )}
                        </div>
                        <span className="text-primary font-bold text-xl">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 mb-3">{item.description}</p>
                      {item.dietary && item.dietary.length > 0 && (
                        <div className="flex space-x-2">
                          {item.dietary.includes('vegetarian') && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full flex items-center">
                              <span className="h-3 w-3 mr-1" />
                              Vegetarian
                            </span>
                          )}
                          {item.dietary.includes('spicy') && (
                            <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full flex items-center">
                              <FireIcon className="h-3 w-3 mr-1" />
                              Spicy
                            </span>
                          )}
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wine List Section */}
      <section className="py-12 bg-white">
        <div className="max-w-full w-full mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Wine Selection
            </h2>
            <p className="text-lg text-gray-600">
              Curated Italian wines from renowned vineyards
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&q=80"
                alt="Red Wine"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Red Wines</h3>
              <p className="text-gray-600">Chianti, Barolo, Montepulciano, Amarone</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&q=80"
                alt="White Wine"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">White Wines</h3>
              <p className="text-gray-600">Pinot Grigio, Soave, Vermentino, Gavi</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1474722883778-792e7990302f?w=400&q=80"
                alt="Prosecco"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Sparkling</h3>
              <p className="text-gray-600">Prosecco, Franciacorta, Lambrusco</p>
            </div>
          </div>
          <p className="text-center text-gray-600 mt-8">
            Monday Wine Night: 50% off all bottles every Monday!
          </p>
        </div>
      </section>

      {/* Note Section */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-full w-full mx-auto px-4 text-center">
          <p className="text-gray-700">
            *Prices subject to change. Please inform your server of any dietary restrictions or allergies.
          </p>
          <p className="text-gray-700 mt-2">
            All pasta is made fresh daily in-house. Gluten-free options available upon request.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Menu;
