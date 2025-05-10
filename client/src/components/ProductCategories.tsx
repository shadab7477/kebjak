import { Link } from "wouter";

const ProductCategories = () => {
  const categories = [
    {
      title: "Custom Mugs & Cups",
      image: "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "/shop?category=mugs",
      buttonText: "Explore"
    },
    {
      title: "T-Shirts & Apparel",
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "/shop?category=tshirts",
      buttonText: "Explore"
    },
    {
      title: "Face Masks & Cans",
      image: "https://images.unsplash.com/photo-1586942593568-29361efcd571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
      link: "/shop",
      buttonText: "Shop Now"
    }
  ];

  return (
    <section id="shop" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-heading mb-4">Custom Designed Products</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our wide range of custom designed products for weddings, reunions, baby reveals, and special occasions. We specialize in t-shirts, mugs, face masks, and more crafty items.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="group relative rounded-lg overflow-hidden shadow-lg">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <Link href={category.link}>
                  <a className="text-white bg-primary px-4 py-2 rounded-full inline-block mt-2 text-sm">
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
