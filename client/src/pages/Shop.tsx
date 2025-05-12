import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Helmet } from "react-helmet";
import { Filter, MessageCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";


interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  badge?: { text: string; color: string };
}

const Shop = () => {
  const [, setLocation] = useLocation();
  const location = window.location;
  const searchParams = new URLSearchParams(location.search);
  const initialCategory = searchParams.get("category") || "all";
  
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  
  // Sample product data - in a real application, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: "Custom Printed Mug",
      description: "Personalized mug with your favorite photo or message",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/469920482_1028911135708203_2084040681062195698_n.jpg?stp=c0.164.1517.1517a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=50ad20&_nc_ohc=8TLOM8uLGXoQ7kNvwEXxwtT&_nc_oc=Adnzrl87MQ4vdjiMzT0iYxzTtv3lxGqu5XcPkbzjPWzhVzE1cEQTFH4DkfM2Qzymw4g&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=U3bkIPjJF8xYhkIMLBVdUw&oh=00_AfJi-wNS0Qj0_I9LIAH9-RigJSaEdUM0O-2gImQj0tFeDw&oe=682538C2",
      category: "mugs",
      badge: { text: "New", color: "primary" }
    },
    {
      id: 2,
      name: "Magic Color Changing Mug",
      description: "Reveals hidden design when filled with hot liquid",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/470189390_1028911542374829_2527104585695911634_n.jpg?stp=c178.0.1084.1084a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Ek6GYhsuRkMQ7kNvwERkB9p&_nc_oc=Adl68ONxRS_ljHgWPilfZhqdejs_asXEKAXiD_Hvq6BqowiaZWYulnYXWARDXDoJuSo&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=U3bkIPjJF8xYhkIMLBVdUw&oh=00_AfIEfU6BkYbQJMSY9oWN1wTON9TjEunnnAAgMkLn5TPlJA&oe=6825369F",
      category: "mugs",
      badge: { text: "Popular", color: "accent" }
    },
    {
      id: 3,
      name: "Reusable Face Mask",
      description: "Comfortable cotton face mask with custom design",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/144223925_3462680773860577_4090054957461454679_n.jpg?stp=c93.0.775.775a_dst-jpg_s206x206_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=A3tvL6PAuycQ7kNvwEyAPZe&_nc_oc=AdkN-xD0NT5a32xS7wamU5tIJ-VadDMVDHWTHYiOfiCRWVaeFSKxJglBBq8PZAt5AaM&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=mssw4cMyblojXPLRZV6gCg&oh=00_AfLd8yQ-NDpPfXtz3c5a0KcYeJYDN6Een2xXgjLQczlHzQ&oe=6846FC2D",
      category: "facemasks"
    },
    {
      id: 4,
      name: "Premium Face Mask",
      description: "Breathable fabric with adjustable ear loops",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/105331545_2833659996762661_7991772475451638531_n.jpg?stp=c110.0.741.741a_dst-jpg_s206x206_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=YA1CO8EHgcwQ7kNvwE1Pqhc&_nc_oc=AdmHBjIY17E5A5XqKR9t6sgbUmN_mw_uFCyTQVpEAoi4-WMuBAS_9ASXHHy6EnW59EQ&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=ZS99-kzvi0V-sbKQd91ZxQ&oh=00_AfJKVSAyI7WdM5y91ksk3irn5LPLA4A0X57u4Q28XJWqDQ&oe=6846FCA4",
      category: "facemasks"
    },
    {
      id: 5,
      name: "Floral Pattern Face Mask",
      description: "Elegant floral design with triple-layer protection",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/106639215_2882805578514769_8441734689388784797_n.jpg?stp=c133.0.695.695a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=_PBbpTrbuOkQ7kNvwFVU6oh&_nc_oc=AdmqdDCVle4vV87JD9qTdPaKjensze7BBTZ6XPr_Lzn2d2gYzI3dVoV54ESidw4wtBI&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=-P4hPFsE_-wy4OJexleqrw&oh=00_AfJ3ob8kmZdVUVHsRQStVi6XDCFw-KT4bEcXgS5A0PpEog&oe=6846FAA7",
      category: "facemasks"
    },
    {
      id: 6,
      name: "Kids Face Mask",
      description: "Colorful and comfortable masks for children",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/102433131_2811169495678378_733411660487990328_n.jpg?stp=c160.0.640.640a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=z16h6wr9SqYQ7kNvwGf0eRr&_nc_oc=AdkrZP9azpNyoILAAZWD5QJf31Mgoh3119DumfH31rYnlsc-xUigZgZmWsqg_ktFvLE&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=PmLcpdVL3-sixoT58p_SfA&oh=00_AfIu2Mqf9jKNGV4j0aDqRsnIDnohyp2wRy8gK3J4x4Gd6Q&oe=6846D1C9",
      category: "facemasks"
    },
    {
      id: 7,
      name: "Custom Printed T-Shirt",
      description: "High-quality cotton t-shirt with your design",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/53010795_1933496030112400_3195997641557147648_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=p83hApt4XzgQ7kNvwHiUgQe&_nc_oc=Adn4cpjWWuWpIoWq6Mi0XcgKBRP7gwNC7T78n1Y-yT-sZfEtoPYd2h39prnmSd91COI&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=TI_flyzUy8OCYtqaHJ0T_g&oh=00_AfJ9RD8EUpkLlK3ZqgBApL_Lhr8ijNOVuM1jARZual0HUA&oe=6846FB97",
      category: "tshirts"
    },
    {
      id: 8,
      name: "Vintage Style T-Shirt",
      description: "Soft vintage-look t-shirt with custom graphics",

      image: "https://images.unsplash.com/photo-1578346021958-c58829af708b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGN1c3RvbSUyMHRzaGlydHxlbnwwfHwwfHx8MA%3D%3D",
      category: "tshirts"
    },
    {
      id: 9,
      name: "Personalized Can",
      description: "Custom aluminum can with your photo or message",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/470171542_1028914719041178_6205596588193014343_n.jpg?stp=c178.0.1084.1084a_dst-jpg_s206x206_tt6&_nc_cat=102&ccb=1-7&_nc_sid=50ad20&_nc_ohc=2vTRG3iWRecQ7kNvwF8P35D&_nc_oc=AdkRghtgCULeQKHOoocVg__z_usg97sM7s3PYnV8WmxqBKOfaWW1GQtl-SLruPagicg&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=U3bkIPjJF8xYhkIMLBVdUw&oh=00_AfJjMfXuY6p-u6CeZ6k85XIiIvMvO0b5C68ZHV10jS5zkA&oe=68253D06",
      category: "cans"
    },
    {
      id: 10,
      name: "Travel Mug with Handle",
      description: "Insulated travel mug with comfortable handle",

      image: "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/470208397_1028911142374869_6042835509351483967_n.jpg?stp=c0.164.1517.1517a_dst-jpg_s206x206_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=3eu9s_WLzHcQ7kNvwFO_7cu&_nc_oc=Adnlzo0D0Npwfugwv_sNRQWZPQMdnNOGxQOHCG_zgm7HhQm6qlloyNwJcCjaORJQVpo&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=U3bkIPjJF8xYhkIMLBVdUw&oh=00_AfJrNtbUHT9DqM1nwBDbvwz9kn13lRgnD4JbLow_Ys45xg&oe=6825290E",
      category: "mugs"
    },
    {
      id: 11,
      name: "Colored Aluminum Can",
      description: "Vibrant colored aluminum can for beverages",

      image: "https://images.unsplash.com/photo-1613254025905-b226dea7c866?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2FufGVufDB8fDB8fHww",
      category: "cans"
    }
  ];
  
  // Filter products by active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  // Update URL when category changes
  useEffect(() => {
    if (activeCategory === 'all') {
      setLocation('/shop');
    } else {
      setLocation(`/shop?category=${activeCategory}`);
    }
  }, [activeCategory, setLocation]);

  return (
    <>
      <Helmet>
        <title>Shop - Kenjac’ Creations</title>
        <meta 
          name="description" 
          content="Browse our collection of personalized mugs, face masks, t-shirts, and bottles. Find the perfect custom item for yourself or as a gift."
        />
      </Helmet>

      
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading mb-4">Shop Our Creations</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our wide range of personalized products including mugs, face masks, t-shirts, and bottles - perfect for gifts or personal use.
            </p>
          </div>
          
          <div className="mb-8">
            <Tabs 
              defaultValue={activeCategory} 
              value={activeCategory}
              onValueChange={setActiveCategory}
            >
              <div className="flex items-center mb-6">
                <Filter className="mr-2 text-gray-500" size={20} />
                <h2 className="text-lg font-medium">Filter by Category:</h2>
              </div>
              <TabsList className="mb-8 flex flex-wrap">
                <TabsTrigger value="all">All Products</TabsTrigger>
                <TabsTrigger value="mugs">Mugs</TabsTrigger>
                <TabsTrigger value="facemasks">Face Masks</TabsTrigger>
                <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
                <TabsTrigger value="cans">Cans</TabsTrigger>
              </TabsList>
              
              <TabsContent value={activeCategory} className="mt-0">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-gray-500">Try selecting a different category</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <div className="relative overflow-hidden">
                          <img 
                            src={`${product.image}`}
                            alt={product.name} 
                            className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                            onError={(e) => {
                              // Try with .jpg extension if the image fails to load
                              const target = e.target as HTMLImageElement;
                              if (!target.src.endsWith('.jpg')) {
                                target.src = `${product.image}.jpg`;
                              }
                            }}
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
                            <a href="https://www.facebook.com/kenjacreations" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">Contact on Facebook</a>
                            <Button 
                              size="icon"
                              variant="secondary"
                              onClick={() => window.open('https://m.me/kenjacreations', '_blank')}
                              aria-label={`Message about ${product.name}`}
                            >
                              <MessageCircle size={18} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </>
  );
};

export default Shop;
