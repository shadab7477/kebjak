import { Helmet } from "react-helmet";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const About = () => {
  const stickyContent = [
    {
      title: "The Beginning",
      description:
        "Kenjac' Creations began in 2015 as a passion project when our founder started creating handmade gifts for friends and family. What began as a hobby soon grew into a business due to the unique and personalized nature of her work.",
      content: (
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1499013819532-e4ff41b00669?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          alt="Founder crafting handmade gifts"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Our Expertise",
      description:
        "With a background in fine arts and event planning, Sarah blends creativity and organization to deliver custom items and stunning decor for all types of events.",
      content: (
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          alt="Team planning an event decoration"
          className="w-full h-full object-cover"
        />
      ),
    },
    {
      title: "Our Growth",
      description:
        "Over the years, we've expanded our team and served hundreds of clients. Our dedication to detail and personalized service has made us a trusted name in gifts and event decor.",
      content: (
        <img
          loading="lazy"
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
          alt="Kenjac Creations team event"
          className="w-full h-full object-cover"
        />
      ),
    },
  ];

  const teamTestimonials = [
    {
      quote:
        "With over 10 years of experience in art and design, I'm passionate about creating unique, personalized gifts that tell a story and make every occasion special.",
      name: "Sarah Johnson",
      designation: "Founder & Creative Director",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "My background in interior design helps me create stunning event spaces that transform ordinary venues into extraordinary experiences for our clients.",
      name: "Priyanshu Rai",
      designation: "Event Decoration Specialist",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=687&q=80",
    },
    {
      quote:
        "I specialize in personalizing gifts to make them unique and meaningful. Every detail matters when creating something that will be treasured for years to come.",
      name: "Aisha Patel",
      designation: "Customization Expert",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=761&q=80",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Kenjac' Creations</title>
        <meta
          name="description"
          content="Learn about Kenjac' Creations, our story, values, and passion for handcrafted gifts and event decor."
        />
        <link rel="canonical" href="https://yourdomain.com/about" />
        <meta property="og:title" content="About Us - Kenjac' Creations" />
        <meta
          property="og:description"
          content="Learn about Kenjac' Creations, our journey, mission, and dedication to crafting meaningful gifts and decor."
        />
      </Helmet>

      <main className="pt-8 pb-16">
        <section className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold font-heading text-center mb-10">
            About <span className="text-primary">Kenjac' Creations</span>
          </h1>

          {/* Story Section with Scroll Reveal */}
          <StickyScroll content={stickyContent} />

          {/* Mission & Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                At Kenjac' Creations, our mission is to bring joy and create
                unforgettable moments through handcrafted gifts and decorations.
                Every item is crafted with love and tailored to reflect your
                story.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Values</h2>
              <ul className="list-disc pl-5 text-lg space-y-2 text-gray-700 dark:text-gray-300">
                <li>Commitment to quality craftsmanship</li>
                <li>Personalized approach to each client</li>
                <li>Use of sustainable materials</li>
                <li>Support for local artisans</li>
                <li>Creating meaningful, memorable moments</li>
              </ul>
            </div>
          </div>

          {/* Our Process */}
          <h2 className="text-2xl font-bold mb-6 text-center">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                step: "1",
                title: "Consultation",
                desc: "We begin with a detailed consultation to understand your vision and preferences.",
                color: "primary",
              },
              {
                step: "2",
                title: "Design",
                desc: "Our creative team curates custom designs to match your event or gift theme.",
                color: "secondary",
              },
              {
                step: "3",
                title: "Creation",
                desc: "We handcraft your order with care, ensuring premium quality and finishing.",
                color: "accent",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
              >
                <div
                  className={`w-16 h-16 bg-${item.color} bg-opacity-10 rounded-full flex items-center justify-center text-${item.color} mx-auto mb-4`}
                >
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Team Section */}
          <h2 className="text-2xl font-bold text-center mb-6">Meet Our Team</h2>
          <AnimatedTestimonials testimonials={teamTestimonials} autoplay />
        </section>
      </main>
    </>
  );
};

export default About;
