import { Helmet } from "react-helmet";
import { lazy, Suspense, useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";

// Lazy load non-critical components
const ProductCategories = lazy(() => import("@/components/ProductCategories"));
const FeaturedProducts = lazy(() => import("@/components/FeaturedProducts"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FacebookFeed = lazy(() => import("@/components/FacebookFeed"));
import { FocusCards } from "@/components/ui/focus-cards";

// Simple loading component
const SectionLoading = () => (
  <div className="py-16">
    <div className="container mx-auto px-4">
      <div className="flex justify-center">
        <div className="animate-pulse w-full max-w-3xl">
          <div className="h-8 bg-gray-200 rounded-md mb-6 w-1/3 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-4 w-2/3 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded-md mb-8 w-1/2 mx-auto"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 rounded-lg h-48"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  // State to track if components beyond the fold should be loaded
  const [loadSecondaryContent, setLoadSecondaryContent] = useState(false);
  
  useEffect(() => {
    // Set a timeout to load secondary content after initial render
    const timer = setTimeout(() => {
      setLoadSecondaryContent(true);
    }, 100); // Short delay to prioritize critical content first
    
    // Preload other pages after home page is loaded
    const preloadTimer = setTimeout(() => {
      // Preload About page
      import("@/pages/About");
      // Preload other frequently accessed pages
      import("@/pages/Gallery");
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(preloadTimer);
    };
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Kenjac' Creations - Handcrafted Custom Gifts & Event Decorations</title>
        <meta 
          name="description" 
          content="Premium handcrafted customized gifts, unique event decorations, and personalized creations for weddings, birthdays, and all special occasions. Shop our collection today!"
        />
        <meta name="keywords" content="custom gifts, personalized gifts, event decorations, handcrafted gifts, custom t-shirts, custom mugs, wedding decorations, birthday decorations" />
        <link rel="canonical" href="https://kenjaccreations.com" />
        <meta property="og:title" content="Kenjac' Creations - Handcrafted Custom Gifts & Event Decorations" />
        <meta property="og:description" content="Premium handcrafted customized gifts, unique event decorations, and personalized creations for weddings, birthdays, and all special occasions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://kenjaccreations.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kenjac' Creations - Handcrafted Custom Gifts & Event Decorations" />
        <meta name="twitter:description" content="Premium handcrafted customized gifts, unique event decorations, and personalized creations for weddings, birthdays, and all special occasions." />
      </Helmet>
      
      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <Features />
        <section id="about" className="py-16 bg-slate-50" itemScope itemType="https://schema.org/AboutPage">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="Kenjac' Creations workspace - handcrafted custom gifts and decorations" 
                  className="rounded-lg shadow-lg w-full h-auto"
                  itemProp="image"
                  loading="lazy"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold font-heading mb-6" itemProp="headline">
                  About <span className="text-primary">Kenjac' Creations</span>
                </h2>
                <div itemProp="description">
                  <p className="text-lg mb-6 leading-relaxed">
                    Kenjac' Creations was born from a passion for bringing joy through handcrafted art. 
                    We specialize in creating personalized gifts and event decorations that help make 
                    your special moments truly memorable.
                  </p>
                  <p className="text-lg mb-8 leading-relaxed">
                    With attention to detail and a commitment to quality, every creation is crafted 
                    with love and care. We believe in turning your vision into reality and adding a 
                    touch of magic to your celebrations.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/about" className="text-primary font-medium flex items-center" aria-label="Read more about Kenjac' Creations story">
                    <span>Read Our Story</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Critical content is loaded immediately */}
        
        {/* Secondary content is loaded after initial render */}
        {loadSecondaryContent ? (
          <>
            <Suspense fallback={<SectionLoading />}>
              <ProductCategories />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <FeaturedProducts />
            </Suspense>
            
            <section id="gallery" className="py-16 bg-white" itemScope itemType="https://schema.org/ImageGallery">
              <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold font-heading mb-4" itemProp="name">Our Gallery</h2>
                  <p className="text-lg text-gray-600 max-w-2xl mx-auto" itemProp="description">
                    Browse through our collection of previously completed projects and get inspired for your next celebration.
                  </p>
                </div>
                
                <div className="py-8" itemProp="about" itemScope itemType="https://schema.org/ItemList">
                  <meta itemProp="numberOfItems" content="6" />
                  <FocusCards cards={[
                    { src: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/53010795_1933496030112400_3195997641557147648_n.jpg?stp=dst-jpg_s206x206_tt6&_nc_cat=109&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=p83hApt4XzgQ7kNvwHiUgQe&_nc_oc=Adn4cpjWWuWpIoWq6Mi0XcgKBRP7gwNC7T78n1Y-yT-sZfEtoPYd2h39prnmSd91COI&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=TI_flyzUy8OCYtqaHJ0T_g&oh=00_AfJ9RD8EUpkLlK3ZqgBApL_Lhr8ijNOVuM1jARZual0HUA&oe=6846FB97", title: "Custom Printed T-Shirts" },
                    { src: "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/470189390_1028911542374829_2527104585695911634_n.jpg?stp=c178.0.1084.1084a_dst-jpg_s206x206_tt6&_nc_cat=101&ccb=1-7&_nc_sid=50ad20&_nc_ohc=Ek6GYhsuRkMQ7kNvwERkB9p&_nc_oc=Adl68ONxRS_ljHgWPilfZhqdejs_asXEKAXiD_Hvq6BqowiaZWYulnYXWARDXDoJuSo&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=U3bkIPjJF8xYhkIMLBVdUw&oh=00_AfIEfU6BkYbQJMSY9oWN1wTON9TjEunnnAAgMkLn5TPlJA&oe=6825369F", title: "Custom Mugs for Couples" },
                    { src: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600", title: "Family Reunion Shirts" },
                    { src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600", title: "Baby Reveal Party Kit" },
                    { src: "https://images.unsplash.com/photo-1586942593568-29361efcd571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600", title: "Designer Face Masks" },
                    { src: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/106639215_2882805578514769_8441734689388784797_n.jpg?stp=c133.0.695.695a_dst-jpg_s206x206_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=_PBbpTrbuOkQ7kNvwFVU6oh&_nc_oc=AdmqdDCVle4vV87JD9qTdPaKjensze7BBTZ6XPr_Lzn2d2gYzI3dVoV54ESidw4wtBI&_nc_zt=23&_nc_ht=scontent.fblr18-1.fna&_nc_gid=-P4hPFsE_-wy4OJexleqrw&oh=00_AfJ3ob8kmZdVUVHsRQStVi6XDCFw-KT4bEcXgS5A0PpEog&oe=6846FAA7", title: "Holiday Themed Masks" },
                  ]} />
                </div>
                
                <div className="text-center mt-8">
                  <a href="/gallery" className="inline-block bg-primary hover:bg-opacity-90 text-white font-medium px-6 py-3 rounded-full transition" aria-label="View all gallery projects">
                    View All Projects
                  </a>
                </div>
              </div>
            </section>
            
            <Suspense fallback={<SectionLoading />}>
              <TestimonialsSection />
            </Suspense>
            
            <Suspense fallback={<SectionLoading />}>
              <FacebookFeed />
            </Suspense>
          </>
        ) : (
          // Placeholder for secondary content while loading
          <div className="py-4"></div>
        )}
      </main>
    </>
  );
};

export default Home;
