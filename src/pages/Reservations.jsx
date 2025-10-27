import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    partySize: '2',
    specialRequests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    console.log('Reservation submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        partySize: '2',
        specialRequests: '',
      });
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-4">
            Reservations
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl">
            Reserve your table for an authentic Italian experience
          </p>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="w-full max-w-full m-0 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Reservation Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Book Your Table
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircleIcon className="h-20 w-20 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Reservation Submitted!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for choosing Bella Vita. We'll confirm your reservation shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="(313) 555-1234"
                      />
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-semibold text-gray-700 mb-2">
                          Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-semibold text-gray-700 mb-2">
                          Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        >
                          <option value="">Select Time</option>
                          <option value="11:00">11:00 AM</option>
                          <option value="11:30">11:30 AM</option>
                          <option value="12:00">12:00 PM</option>
                          <option value="12:30">12:30 PM</option>
                          <option value="13:00">1:00 PM</option>
                          <option value="13:30">1:30 PM</option>
                          <option value="14:00">2:00 PM</option>
                          <option value="17:00">5:00 PM</option>
                          <option value="17:30">5:30 PM</option>
                          <option value="18:00">6:00 PM</option>
                          <option value="18:30">6:30 PM</option>
                          <option value="19:00">7:00 PM</option>
                          <option value="19:30">7:30 PM</option>
                          <option value="20:00">8:00 PM</option>
                          <option value="20:30">8:30 PM</option>
                          <option value="21:00">9:00 PM</option>
                        </select>
                      </div>
                    </div>

                    {/* Party Size */}
                    <div>
                      <label htmlFor="partySize" className="block text-sm font-semibold text-gray-700 mb-2">
                        Party Size *
                      </label>
                      <select
                        id="partySize"
                        name="partySize"
                        value={formData.partySize}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7">7 Guests</option>
                        <option value="8">8 Guests</option>
                        <option value="9+">9+ Guests</option>
                      </select>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Dietary restrictions, allergies, special occasions, etc."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full btn-primary text-lg"
                    >
                      Reserve Table
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      For parties of 9 or more, please call us directly at{' '}
                      <a href="tel:3135558482" className="text-primary hover:underline">
                        (313) 555-VITA
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Hours */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="flex items-center mb-6">
                  <ClockIcon className="h-10 w-10 text-primary mr-4" />
                  <h3 className="text-2xl font-serif font-bold text-gray-900">
                    Hours of Operation
                  </h3>
                </div>
                <div className="space-y-3 text-lg">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Monday - Thursday</span>
                    <span className="text-gray-700">11:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Friday - Saturday</span>
                    <span className="text-gray-700">11:00 AM - 11:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Sunday</span>
                    <span className="text-gray-700">12:00 PM - 9:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Address</p>
                      <p className="text-gray-700">
                        456 Woodward Ave<br />
                        Detroit, MI 48226
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <PhoneIcon className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900">Phone</p>
                      <a href="tel:3135558482" className="text-primary hover:underline">
                        (313) 555-VITA (8482)
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <EnvelopeIcon className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900">Email</p>
                      <a href="mailto:reservations@bellavita.com" className="text-primary hover:underline break-words text-sm sm:text-base">
                        reservations@bellavita.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Private Events */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-600 rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-serif font-bold mb-4 text-gray-900">
                  Private Events & Catering
                </h3>
                <p className="text-lg mb-6 text-gray-800">
                  Planning a special event? Our private dining room can accommodate up to 40 guests,
                  perfect for birthdays, anniversaries, corporate events, and celebrations.
                </p>
                <p className="text-lg mb-6 text-gray-800">
                  We also offer full-service catering for events of any size at your location.
                </p>
                <a
                  href="mailto:reservations@bellavita.com?subject=Private Event Inquiry"
                  className="inline-block bg-red-600 text-white hover:bg-red-700 font-semibold py-3 px-6 rounded-lg transition shadow-md"
                >
                  Inquire About Private Events
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="Detroit Location"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <p className="text-sm text-gray-600">
                    Located in the heart of Downtown Detroit on Woodward Avenue
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-12 bg-white">
        <div className="w-full max-w-full m-0 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6 text-center">
              Reservation Policies
            </h3>
            <div className="bg-gray-50 rounded-lg p-8 space-y-4 text-gray-700">
              <p>
                <strong>Confirmation:</strong> All reservations are subject to availability and will be confirmed
                via email or phone within 24 hours.
              </p>
              <p>
                <strong>Cancellations:</strong> If you need to cancel or modify your reservation, please contact
                us at least 2 hours in advance.
              </p>
              <p>
                <strong>Late Arrivals:</strong> Please arrive within 15 minutes of your reservation time.
                Tables will be held for 15 minutes past the reservation time.
              </p>
              <p>
                <strong>Large Parties:</strong> For parties of 9 or more guests, please call us directly to
                ensure we can accommodate your group properly.
              </p>
              <p>
                <strong>Special Occasions:</strong> Let us know if you're celebrating a special occasion
                and we'll do our best to make it memorable!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
