import { Helmet } from "react-helmet";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const Testimonials = () => {

  return (
    <>
      <Helmet>
        <title>Meet Our Team - Kenjac’ Creations</title>
        <meta 
          name="description" 
          content="Meet the talented team behind Kenjac’ Creations. Our skilled artisans and designers create beautiful handcrafted items for all occasions."
        />
      </Helmet>
      
      <main className="pt-32 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold font-heading mb-4">Meet Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get to know the talented individuals behind Kenjac’ Creations.
            </p>
          </div>
          
          <AnimatedTestimonials
            testimonials={[
              {
                quote: "With over 10 years of experience in art and design, I'm passionate about creating unique, personalized gifts that tell a story and make every occasion special.",
                name: "Sarah Johnson",
                designation: "Founder & Creative Director",
                src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              },
              {
                quote: "My background in interior design helps me create stunning event spaces that transform ordinary venues into extraordinary experiences for our clients.",
                name: "Priyanshu-Rai",
                designation: "Event Decoration Specialist",
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
              },
              {
                quote: "I specialize in personalizing gifts to make them unique and meaningful. Every detail matters when creating something that will be treasured for years to come.",
                name: "Aisha Patel",
                designation: "Customization Expert",
                src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
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
