export default function CTASection() {
  return (
    <section id="cta" className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Ready to Explore Our Products?
      </h2>
      <p className="text-lg mb-6">
        Sign up today and enjoy exclusive offers only available to our subscribers!
      </p>
      <a
        href="/products"
        className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition"
      >
        Browse Products
      </a>
    </section>
  );
}
