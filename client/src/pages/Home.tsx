import { Helmet } from "react-helmet";
import { lazy, Suspense } from "react";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import { FocusCards } from "@/components/ui/focus-cards";

// Lazy load non-critical sections
const ProductCategories = lazy(() => import("@/components/ProductCategories"));
const FeaturedProducts = lazy(() => import("@/components/FeaturedProducts"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const FacebookFeed = lazy(() => import("@/components/FacebookFeed"));

// Loading skeleton
const SectionLoading = () => (
  <div className="py-16">
    <div className="container mx-auto px-4 animate-pulse space-y-6">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded-md w-1/3 mx-auto"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-2/3 mx-auto"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-md w-1/2 mx-auto"></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-48 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        ))}
      </div>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Kenjac' Creations – Handcrafted Gifts & Decor</title>
        <meta
          name="description"
          content="Kenjac' Creations specializes in personalized gifts and event decorations handcrafted with love to make your moments unforgettable."
        />
      </Helmet>

      <main itemScope itemType="https://schema.org/WebPage">
        <Hero />
        <Features />

        {/* About Section */}
        <section
          id="about"
          className="py-16 bg-slate-50 dark:bg-gray-900"
          itemScope
          itemType="https://schema.org/AboutPage"
        >
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?auto=format&fit=crop&w=800&h=600"
                alt="Kenjac' Creations workspace - handcrafted custom gifts and decorations"
                className="rounded-lg shadow-lg w-full h-auto"
                itemProp="image"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h2
                className="text-3xl font-bold font-heading mb-6 dark:text-white"
                itemProp="headline"
              >
                About <span className="text-primary">Kenjac' Creations</span>
              </h2>
              <div itemProp="description">
                <p className="text-lg mb-6 leading-relaxed dark:text-gray-300">
                  Kenjac' Creations was born from a passion for bringing joy through handcrafted
                  art. We specialize in creating personalized gifts and event decorations that help
                  make your special moments truly memorable.
                </p>
                <p className="text-lg mb-8 leading-relaxed dark:text-gray-300">
                  With attention to detail and a commitment to quality, every creation is crafted
                  with love and care. We believe in turning your vision into reality and adding a
                  touch of magic to your celebrations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/about"
                  className="text-primary font-medium flex items-center dark:text-primary"
                  aria-label="Read more about Kenjac' Creations story"
                >
                  <span>Read Our Story</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <Suspense fallback={<SectionLoading />}>
          <ProductCategories />
        </Suspense>

        {/* Featured Products */}
        <Suspense fallback={<SectionLoading />}>
          <FeaturedProducts />
        </Suspense>

        {/* Gallery */}
        <section
          id="gallery"
          className="py-16 bg-white dark:bg-gray-900"
          itemScope
          itemType="https://schema.org/ImageGallery"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold font-heading mb-4 dark:text-white" itemProp="name">
                Our Gallery
              </h2>
              <p
                className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                itemProp="description"
              >
                Browse through our collection of previously completed projects and get inspired for
                your next celebration.
              </p>
            </div>

            <div className="py-8" itemProp="about" itemScope itemType="https://schema.org/ItemList">
              <meta itemProp="numberOfItems" content="6" />
              <FocusCards
                cards={[
                  {
                    src: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/53010795_1933496030112400_3195997641557147648_n.jpg?auto=format",
                    title: "Custom Printed T-Shirts",
                  },
                  {
                    src: "https://scontent.fblr18-1.fna.fbcdn.net/v/t39.30808-6/470189390_1028911542374829_2527104585695911634_n.jpg?auto=format",
                    title: "Custom Mugs for Couples",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=800&h=600",
                    title: "Family Reunion Shirts",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&h=600",
                    title: "Baby Reveal Party Kit",
                  },
                  {
                    src: "https://images.unsplash.com/photo-1586942593568-29361efcd571?auto=format&fit=crop&w=800&h=600",
                    title: "Designer Face Masks",
                  },
                  {
                    src: "https://scontent.fblr18-1.fna.fbcdn.net/v/t1.6435-9/106639215_2882805578514769_8441734689388784797_n.jpg?auto=format",
                    title: "Holiday Themed Masks",
                  },
                ]}
              />
            </div>

            <div className="text-center mt-8">
              <a
                href="/gallery"
                className="inline-block bg-primary text-white font-medium px-6 py-3 rounded-full transition hover:bg-opacity-90 dark:bg-primary dark:hover:bg-opacity-90"
                aria-label="View all gallery projects"
              >
                View All Projects
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Suspense fallback={<SectionLoading />}>
          <TestimonialsSection />
        </Suspense>

        {/* Facebook Feed */}
        <Suspense fallback={<SectionLoading />}>
          <FacebookFeed />
        </Suspense>
      </main>
    </>
  );
};

export default Home;
