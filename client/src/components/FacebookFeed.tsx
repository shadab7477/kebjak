import { FaFacebook, FaHeart, FaShare, FaComment } from "react-icons/fa";

const FacebookFeed = () => {
  const facebookPosts = [
    {
      image: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Wedding Party T-Shirts",
      description: "Just finished these custom wedding party t-shirts! Perfect for the upcoming Johnson-Smith wedding. #CustomTshirts #WeddingParty",
      date: "2 days ago",
      likes: 124,
      comments: 18,
      shares: 5
    },
    {
      image: "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Custom Couple Mugs",
      description: "Our newest design for anniversary gifts! These custom mugs are perfect for couples celebrating their special day. #CoupleGoals #CustomMugs",
      date: "1 week ago",
      likes: 98,
      comments: 12,
      shares: 3
    },
    {
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      title: "Baby Reveal Party Kit",
      description: "Excited to share our new Baby Reveal Party Kit! Everything you need for that special moment. #BabyReveal #GenderReveal #CustomPartyKit",
      date: "2 weeks ago",
      likes: 156,
      comments: 24,
      shares: 8
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold font-heading">Connect With Us</h2>
            <p className="text-lg text-gray-600 mt-2">
              Follow our Facebook page for the latest updates and behind-the-scenes content
            </p>
          </div>
          <a 
            href="https://www.facebook.com/kenjacreations" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hidden md:flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg hover:bg-[#166FE5] transition-colors"
          >
            <FaFacebook className="text-xl" />
            <span className="font-medium">Follow Kenjac' Creations</span>
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facebookPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-4 border-b">
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <FaFacebook className="text-xl" />
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">Kenjac' Creations</p>
                    <p className="text-xs text-gray-500">{post.date}</p>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2">{post.title}</h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
              </div>
              
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-64 object-cover"
              />
              
              <div className="p-4 border-t">
                <div className="flex justify-between text-gray-500 mb-2">
                  <span className="flex items-center"><FaHeart className="text-red-500 mr-1" /> {post.likes}</span>
                  <span>{post.comments} comments • {post.shares} shares</span>
                </div>
                
                <div className="flex border-t pt-2">
                  <button className="flex-1 flex items-center justify-center py-1 hover:bg-gray-100 rounded-md">
                    <FaHeart className="mr-2 text-gray-500" /> Like
                  </button>
                  <button className="flex-1 flex items-center justify-center py-1 hover:bg-gray-100 rounded-md">
                    <FaComment className="mr-2 text-gray-500" /> Comment
                  </button>
                  <button className="flex-1 flex items-center justify-center py-1 hover:bg-gray-100 rounded-md">
                    <FaShare className="mr-2 text-gray-500" /> Share
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <a 
            href="https://www.facebook.com/kenjacreations" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="md:hidden inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg hover:bg-[#166FE5] transition-colors"
          >
            <FaFacebook className="text-xl" />
            <span className="font-medium">Follow Us on Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FacebookFeed;
