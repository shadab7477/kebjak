import { Link } from "wouter";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Custom Wedding T-Shirts",
      description: "Personalized shirts for the wedding party",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
      badge: { text: "Popular", color: "primary" }
    },
    {
      id: 2,
      name: "Family Reunion Mugs",
      description: "Custom designed mugs for your family gathering",
      price: "$19.99",
      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/470189390_1028911542374829_2527104585695911634_n.jpg?stp=c178.0.1084.1084a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Ek6GYhsuRkMQ7kNvwERkB9p&_nc_oc=Adl68ONxRS_ljHgWPilfZhqdejs_asXEKAXiD_Hvq6BqowiaZWYulnYXWARDXDoJuSo&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=U3bkIPjJF8xYhkIMLBVdUw&oh=00_AfIEfU6BkYbQJMSY9oWN1wTON9TjEunnnAAgMkLn5TPlJA&oe=6825369F",
      badge: { text: "New", color: "accent" }
    },
    {
      id: 3,
      name: "Baby Reveal Party Kit",
      description: "Complete set with custom shirts and decorations",
      price: "$39.99",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    },
    {
      id: 4,
      name: "Custom Maxi Skirts",
      description: "Beautifully designed skirts for any occasion",
      price: "$34.99",
      image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold font-heading">Featured Products</h2>
          <Link href="/shop">
            <a className="text-primary font-medium flex items-center">
              <span>View All</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                />
                {product.badge && (
                  <div className="absolute top-2 right-2">
                    <Badge 
                      className={`bg-${product.badge.color} text-white text-xs font-bold px-2 py-1 rounded`}
                    >
                      {product.badge.text}
                    </Badge>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary">{product.price}</span>
                  <button 
                    className="bg-secondary text-white p-2 rounded-full hover:bg-opacity-90 transition"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart size={18} />
                  </button>
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
