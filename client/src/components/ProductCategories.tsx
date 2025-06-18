import { Link } from "wouter";

const categories = [
  {
    title: "Custom Mugs & Cups",
    image:
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?auto=format&fit=crop&w=600&h=400",
    link: "/shop?category=mugs",
    buttonText: "Explore",
  },
  {
    title: "T-Shirts & Apparel",
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&w=600&h=400",
    link: "/shop?category=tshirts",
    buttonText: "Explore",
  },
  {
    title: "Face Masks & Cans",
    image:
      "https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&w=600&h=400",
    link: "/shop",
    buttonText: "Shop Now",
  },
];

const ProductCategories = () => {
  return (
    <section id="shop" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4 dark:text-white">
            Custom Designed Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover our wide range of custom designed products for weddings, reunions,
            baby reveals, and special occasions. We specialize in t-shirts, mugs, face
            masks, and more crafty items.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{category.title}</h3>
                <Link href={category.link}>
                  <a className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm hover:bg-opacity-90 transition duration-300">
                    {category.buttonText}
                  </a>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
