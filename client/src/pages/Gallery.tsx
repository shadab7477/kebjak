import { useState } from "react";
import { Helmet } from "react-helmet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FocusCards } from "@/components/ui/focus-cards";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Wedding Party T-Shirts",
      category: "tshirts",
      src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 2,
      title: "Custom Mugs for Couples",
      category: "mugs",
      src: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 3,
      title: "Family Reunion Shirts",
      category: "tshirts",
      src: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 4,
      title: "Baby Reveal Party Kit",
      category: "events",
      src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 5,
      title: "Designer Face Masks",
      category: "facemasks",
      src: "https://images.unsplash.com/photo-1586942593568-29361efcd571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 6,
      title: "Corporate Branded Mugs",
      category: "mugs",
      src: "https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 7,
      title: "Custom Maxi Skirts",
      category: "apparel",
      src: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    },
    {
      id: 8,
      title: "Holiday Themed Masks",
      category: "facemasks",
      src: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/106639215_2882805578514769_8441734689388784797_n.jpg?stp=c133.0.695.695a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=_PBbpTrbuOkQ7kNvwFVU6oh&_nc_oc=AdmqdDCVle4vV87JD9qTdPaKjensze7BBTZ6XPr_Lzn2d2gYzI3dVoV54ESidw4wtBI&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=-P4hPFsE_-wy4OJexleqrw&oh=00_AfJ3ob8kmZdVUVHsRQStVi6XDCFw-KT4bEcXgS5A0PpEog&oe=6846FAA7"
    },
    {
      id: 9,
      title: "Personalized Aluminum Cans",
      category: "cans",
      src: "https://images.unsplash.com/photo-1613254025905-b226dea7c866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
    }
  ];
  
  // Filter gallery items by active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Gallery - Kenjac’ Creations</title>
        <meta 
          name="description" 
          content="Browse our portfolio of custom creations, event decorations, and handcrafted items. Get inspired for your next special occasion."
        />
      </Helmet>
      
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading mb-4">Our Custom Creations</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our custom designed products for weddings, reunions, baby reveals, and special occasions. We specialize in t-shirts, mugs, face masks, and more crafty items tailored to your needs.
            </p>
          </div>
          
          <Tabs 
            defaultValue={activeCategory} 
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="mb-8"
          >
            <TabsList className="mb-8 flex flex-wrap justify-center">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="tshirts">T-Shirts</TabsTrigger>
              <TabsTrigger value="mugs">Mugs & Cups</TabsTrigger>
              <TabsTrigger value="facemasks">Face Masks</TabsTrigger>
              <TabsTrigger value="cans">Personalized Cans</TabsTrigger>
              <TabsTrigger value="apparel">Other Apparel</TabsTrigger>
              <TabsTrigger value="events">Event Kits</TabsTrigger>
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-0">
              <div className="py-8">
                <FocusCards cards={filteredItems} />
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-12">
            <p className="text-lg mb-6">
              Inspired by what you see? Let us create something special for your next event or as a gift!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://www.facebook.com/kenjacreations" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-opacity-90 text-white font-medium px-8 py-3 rounded-full transition text-center cursor-pointer"
              >
                Request a Custom Order
              </a>
              <a 
                href="https://www.facebook.com/kenjacreations" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-3 rounded-full transition text-center cursor-pointer"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Gallery;
