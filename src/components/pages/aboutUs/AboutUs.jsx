import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const AboutUs = () => {
  const team = [
    {
      name: "Maria Rodriguez",
      role: "Founder & Head Chef",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      bio: "With 20 years of culinary excellence, Maria brings her grandmother's secret recipes to life.",
      social: {
        instagram: "https://instagram.com/mariarodriguez",
        twitter: "https://twitter.com/mariarodriguez",
        linkedin: "https://linkedin.com/in/mariarodriguez"
      }
    },
    {
      name: "David Chen",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      bio: "David's innovative approach combines Asian and European culinary traditions.",
      social: {
        instagram: "https://instagram.com/chefdavidchen",
        twitter: "https://twitter.com/chefdavidchen",
        linkedin: "https://linkedin.com/in/davidchen"
      }
    },
    {
      name: "Sarah Williams",
      role: "Pastry Chef",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      bio: "Sarah's award-winning desserts have been featured in numerous culinary magazines.",
      social: {
        instagram: "https://instagram.com/sarahwilliams",
        twitter: "https://twitter.com/sarahwilliams",
        linkedin: "https://linkedin.com/in/sarahwilliams"
      }
    }
  ];

  const values = [
    {
      title: "Quality First",
      description: "We source only the finest ingredients to ensure every dish exceeds expectations.",
      icon: "🌟"
    },
    {
      title: "Tradition Meets Innovation",
      description: "Respecting traditional recipes while embracing modern culinary techniques.",
      icon: "🔄"
    },
    {
      title: "Sustainable Practices",
      description: "Committed to environmental responsibility in all our operations.",
      icon: "🌱"
    },
    {
      title: "Community Focus",
      description: "Supporting local producers and giving back to our community.",
      icon: "🤝"
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { staggerChildren: 0.2 }
  };

  return (
    <div className="min-h-screen mt-[100px]">
      {/* Hero Section with Parallax Effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="relative h-[80vh] w-full overflow-hidden"
      >
        <motion.div 
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1514933651103-005eec06c04b"
            alt="Restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </motion.div>
        <div className="relative h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-center text-white px-4"
          >
            <motion.h1 
              className="text-6xl md:text-7xl font-bold mb-6"
              whileInView={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
            >
              Our Story
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              A culinary journey that began with passion and tradition
            </motion.p>
          </motion.div>
        </div>
      </motion.div>

      {/* Story Section with Floating Elements */}
      <motion.section 
        {...fadeInUp}
        className="py-24 px-4 bg-white relative overflow-hidden"
      >
        <motion.div 
          className="absolute -top-32 -right-32 w-64 h-64 bg-amber-100 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-32 -left-32 w-64 h-64 bg-amber-100 rounded-full opacity-20"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                A Legacy of Flavor Since 1995
              </h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed text-lg">
                  Founded by the passionate culinary artist Maria Rodriguez, Fudo began as a small
                  family-owned restaurant with a big dream: to serve authentic, high-quality dishes
                  that bring people together.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Over the years, we've grown from a humble establishment into a beloved culinary
                  destination, but our core values remain the same - fresh ingredients, traditional
                  recipes, and warm hospitality.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
                  alt="Our restaurant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Values Section with Stagger Animation */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-5xl mb-6"
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Enhanced Team Section with Creative Hover Effects */}
      <motion.section 
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="py-24 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform
                     duration-500 group-hover:scale-110 group-hover:brightness-50
                     cursor-pointer "
                  />
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  {/* Content Overlay */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col justify-end p-6 text-white opacity-0 group-hover:opacity-100"
                  >
                    <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                    <p className="text-[1.7rem] text-gray-200 mb-4">{member.role}</p>
                    <p className="text-[1] text-gray-300 mb-6">{member.bio}</p>
                    
                    {/* Social Links */}
                    <div className="flex gap-4 justify-center">
                      <motion.a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="bg-white/20 p-3 rounded-full
                         hover:bg-red-500 transition-colors duration-300"
                      >
                        <FaInstagram className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="bg-white/20 p-3 rounded-full hover:bg-white/30 transition-colors duration-300"
                      >
                        <FaTwitter className="w-5 h-5" />
                      </motion.a>
                      <motion.a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2 }}
                        className="bg-white/20 p-3 rounded-full hover:bg-red-500 transition-colors duration-300"
                      >
                        <FaLinkedinIn className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutUs;