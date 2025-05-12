import { Helmet } from "react-helmet";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonials = () => {

  return (
    <>
      <Helmet>
        <title>Client Testimonials - Kenjac' Creations</title>
        <meta 
          name="description" 
          content="Read what our clients have to say about Kenjac' Creations. Discover why our customized gifts, event decorations, and handcrafted items are loved by customers."
        />
      </Helmet>
      
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading mb-4">Client Testimonials</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover what our clients say about their experience with Kenjac' Creations' handcrafted items and personalized service.
            </p>
          </div>
          
          <AnimatedTestimonials
            testimonials={[
              {
                quote: "The custom wedding decorations from Kenjac' Creations transformed our venue into something magical! Every detail was perfect, and our guests couldn't stop complimenting the beautiful handcrafted centerpieces.",
                name: "Sarah Johnson",
                designation: "Wedding Client",
                src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              },
              {
                quote: "I ordered a personalized gift box for my mother's birthday, and it exceeded all expectations. The attention to detail and quality of craftsmanship was outstanding. Will definitely be ordering again for future special occasions!",
                name: "Raj Patel",
                designation: "Repeat Customer",
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              },
              {
                quote: "As a corporate event planner, I've worked with many vendors, but Kenjac' Creations stands out for their professionalism and creativity. The custom corporate gifts they created for our annual conference were unique and perfectly represented our brand.",
                name: "Priya Sharma",
                designation: "Corporate Event Planner",
                src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
              },
              {
                quote: "The seasonal home decor items I purchased from Kenjac' Creations have become the highlight of my living room. The quality is exceptional, and I love supporting a business that puts so much care into their handcrafted products.",
                name: "Michael Rodriguez",
                designation: "Home Decor Enthusiast",
                src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              },
              {
                quote: "I commissioned a custom baby shower decoration set, and it was absolutely perfect! The handmade touches made the event feel so special, and I've recommended Kenjac' Creations to all my friends who are expecting.",
                name: "Emma Wilson",
                designation: "New Parent",
                src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ]}
            autoplay={true}
          />
        </div>
      </main>
    </>
  );
};

export default Testimonials;
