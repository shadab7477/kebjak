import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Custom Wedding T-Shirts",
    description: "Personalized shirts for the wedding party",
    price: "$24.99",
    image:
      "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&w=400&h=300",
    badge: { text: "Popular", color: "bg-purple-600" },
  },
  {
    id: 2,
    name: "Family Reunion Mugs",
    description: "Custom designed mugs for your family gathering",
    price: "$19.99",
    image:
      "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/470189390_1028911542374829_2527104585695911634_n.jpg?auto=format&fit=crop&w=400&h=300",
    badge: { text: "New", color: "bg-pink-600" },
  },
  {
    id: 3,
    name: "Baby Reveal Party Kit",
    description: "Complete set with custom shirts and decorations",
    price: "$39.99",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=400&h=300",
  },
  {
    id: 4,
    name: "Custom Maxi Skirts",
    description: "Beautifully designed skirts for any occasion",
    price: "$34.99",
    image:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=400&h=300",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-slate-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-heading dark:text-white">
            Featured Products
          </h2>
          <Link href="/shop">
            <a className="text-primary font-medium flex items-center dark:text-primary hover:underline">
              <span>View All</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow group overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {product.badge && (
                  <div className="absolute top-2 right-2">
                    <Badge className={`${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded`}>
                      {product.badge.text}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-4 flex flex-col h-48">
                <h3 className="font-bold text-lg mb-1 dark:text-white">{product.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow mb-2">
                  {product.description}
                </p>
                <div className="mt-auto flex justify-center">
                  <a
                    href="https://www.facebook.com/kenjacreations"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary dark:text-primary px-3 py-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-gray-700 transition duration-300"
                  >
                    Contact on Facebook
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
