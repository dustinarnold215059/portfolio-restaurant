import { motion } from 'framer-motion';
import {
  HeartIcon,
  TrophyIcon,
  UsersIcon,
  StarIcon
} from '@heroicons/react/24/solid';

const About = () => {
  const awards = [
    {
      year: '2023',
      title: 'Best Italian Restaurant',
      organization: 'Detroit Restaurant Awards'
    },
    {
      year: '2022',
      title: 'Wine Spectator Award of Excellence',
      organization: 'Wine Spectator Magazine'
    },
    {
      year: '2021',
      title: "Diners' Choice Award",
      organization: 'OpenTable'
    },
    {
      year: '2020',
      title: 'Best Pasta in Detroit',
      organization: 'Detroit Free Press'
    }
  ];

  const values = [
    {
      icon: HeartIcon,
      title: 'Passion',
      description: 'We pour our hearts into every dish, treating each meal as a labor of love'
    },
    {
      icon: UsersIcon,
      title: 'Family',
      description: 'Family-owned and operated, we treat every guest like famiglia'
    },
    {
      icon: StarIcon,
      title: 'Quality',
      description: 'Only the finest imported Italian ingredients and fresh local produce'
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'Committed to culinary excellence and authentic Italian traditions'
    }
  ];

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section
        className="relative h-96 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1600&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl md:text-2xl">
            A legacy of authentic Italian cuisine since 1995
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Family-Owned Since 1995
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Bella Vita Ristorante was founded in 1995 by the Rossi family, who brought
                their passion for authentic Italian cuisine from their small village in Tuscany
                to the heart of Detroit. What started as a dream has blossomed into one of
                Detroit's most beloved Italian restaurants.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                For nearly three decades, we've been serving the Detroit community with the
                same dedication to quality, authenticity, and warm hospitality that defined
                our first day. Our recipes have been passed down through generations, each
                dish telling a story of our Italian heritage.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Today, we continue to honor our traditions while embracing the vibrant,
                diverse community that makes Detroit special. Every meal we serve is a
                celebration of famiglia, friendship, and the joy of sharing good food.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80"
                alt="Restaurant history"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="order-2 md:order-1 relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                alt="Chef Antonio Rossi"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Chef Antonio Rossi
              </h2>
              <p className="text-xl text-primary mb-4 font-semibold">
                Executive Chef & Owner
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Born in Bologna, Italy, Chef Antonio began his culinary journey at the age
                of 14 in his grandmother's kitchen. After training at the prestigious
                Culinary Institute of Bologna and working in renowned restaurants throughout
                Italy, including a Michelin-starred establishment in Naples, he brought his
                expertise to Detroit in 1995.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Chef Antonio's philosophy is simple: use the finest ingredients, honor
                traditional techniques, and cook with passion. His signature dishes, like
                the beloved Osso Buco and handmade Pappardelle Bolognese, have become
                Detroit classics.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                "Every plate that leaves our kitchen carries a piece of my heart and my
                heritage. When you dine at Bella Vita, you're not just having a meal –
                you're experiencing generations of Italian culinary tradition."
              </p>
              <p className="text-lg text-gray-700 italic">
                - Chef Antonio Rossi
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Philosophy
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Bella Vita, we believe that great food brings people together. Our values
              guide everything we do, from selecting ingredients to welcoming guests.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4">
                  <value.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <TrophyIcon className="h-16 w-16 text-secondary mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-gray-600">
              Honored to be recognized by our community and industry
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-3xl font-bold text-primary mb-2">
                  {award.year}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-600">{award.organization}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Restaurant
            </h2>
            <p className="text-lg text-gray-600">
              Experience the warm, elegant atmosphere of Bella Vita
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80',
              'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80',
              'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80',
              'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
              'https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?w=600&q=80',
              'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80'
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Restaurant interior ${index + 1}`}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-full w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">
              Experience Bella Vita Today
            </h2>
            <p className="text-xl mb-8">
              Join us for an unforgettable Italian dining experience
            </p>
            <a
              href="/reservations"
              className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition inline-block"
            >
              Make a Reservation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
