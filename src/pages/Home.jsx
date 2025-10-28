import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  MapPinIcon,
  StarIcon,
  SparklesIcon
} from '@heroicons/react/24/solid';

const Home = () => {
  const featuredDishes = [
    {
      name: 'Osso Buco',
      description: 'Braised veal shanks in rich tomato sauce with gremolata',
      price: '$38',
      image: 'https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&q=80'
    },
    {
      name: 'Linguine alle Vongole',
      description: 'Fresh clams with white wine, garlic, and Italian herbs',
      price: '$32',
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80'
    },
    {
      name: 'Margherita Pizza',
      description: 'San Marzano tomatoes, fresh mozzarella, basil',
      price: '$22',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80'
    },
    {
      name: 'Tiramisu',
      description: "Chef Antonio's signature espresso-soaked Italian dessert",
      price: '$12',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The most authentic Italian food outside of Italy! The pasta is made fresh daily and you can taste the difference.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      text: "Chef Antonio's osso buco is simply divine. The atmosphere and service make every visit special.",
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      text: 'Been coming here for 10 years. Consistently excellent food and warm hospitality. A Detroit gem!',
      rating: 5
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Bella Vita Ristorante
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Authentic Italian Cuisine in the Heart of Detroit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/menu" className="btn-primary text-lg">
              View Menu
            </Link>
            <Link to="/reservations" className="btn-secondary text-lg">
              Make Reservation
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-white">
        <div className="max-w-full w-full m-0 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Welcome to Bella Vita
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Since 1995, Bella Vita Ristorante has been serving authentic Italian cuisine
                in the heart of Detroit. Our family-owned restaurant brings the flavors and
                traditions of Italy to your table.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Under the guidance of Chef Antonio Rossi, who trained in Bologna and Naples,
                we create dishes using time-honored recipes and the finest imported ingredients.
                Every plate tells a story of passion, tradition, and love for Italian gastronomy.
              </p>
              <Link to="/about" className="btn-outline">
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80"
                alt="Restaurant interior"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="py-4 bg-gray-50">
        <div className="max-w-full w-full m-0 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Dishes
            </h2>
            <p className="text-lg text-gray-600">
              Savor our most beloved Italian specialties
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {featuredDishes.map((dish, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{dish.name}</h3>
                    <span className="text-primary font-bold text-lg">{dish.price}</span>
                  </div>
                  <p className="text-gray-600">{dish.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link to="/menu" className="btn-primary text-lg">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-4 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-full w-full m-0 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <SparklesIcon className="h-16 w-16 mb-4 text-white" style={{ margin: '0 auto' }} />
            <h2 className="text-4xl font-bold mb-4 text-white">
              Monday Wine Night Special
            </h2>
            <p className="text-xl mb-6 text-white">
              50% off all bottles of Italian wine every Monday evening
            </p>
            <Link to="/reservations" className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition inline-block">
              Reserve Your Table
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hours & Location */}
      <section className="py-4 bg-white">
        <div className="max-w-full w-full m-0 px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <ClockIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hours</h3>
              <ul className="space-y-2 text-lg text-gray-700">
                <li className="flex justify-between">
                  <span>Monday - Thursday</span>
                  <span className="font-semibold">11:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Friday - Saturday</span>
                  <span className="font-semibold">11:00 AM - 11:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-semibold">12:00 PM - 9:00 PM</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <MapPinIcon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Location</h3>
              <p className="text-lg text-gray-700 mb-4">
                456 Woodward Ave<br />
                Detroit, MI 48226
              </p>
              <p className="text-lg text-gray-700 mb-4">
                <a href="tel:3135558482" className="text-primary hover:underline">
                  (313) 555-VITA (8482)
                </a>
              </p>
              <Link to="/reservations" className="btn-primary inline-block">
                Get Directions
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-full w-full m-0 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-secondary" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-gray-900 font-semibold">- {testimonial.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
