'use client';

import { motion } from 'framer-motion';
import CTASection from '../components/CTASection';

export default function HomePage() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <section className="min-h-screen flex items-center justify-center px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Discover the Best Online Shopping Experience
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-6">
            Get exclusive deals, free shipping, and quality products from trusted brands.
          </p>
          <a
            href="#cta"
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
          >
            Shop Now
          </a>
        </motion.div>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Why Shop With Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Free Shipping',
              desc: 'On all orders over ₹500',
            },
            {
              title: 'Easy Returns',
              desc: 'No questions asked within 7 days',
            },
            {
              title: 'Secure Payments',
              desc: 'Pay with UPI, Cards, and more',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 shadow rounded-xl text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
