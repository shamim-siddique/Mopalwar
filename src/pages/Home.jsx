import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Building2, Users, Clock } from 'lucide-react'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import PressMedia from '../components/PressMedia'
import ResourcesHub from '../components/ResourcesHub'
import profileImage from '../assets/images/Mopalwar.png'
import nagpurExpressHighway from '../assets/images/Nagpur-Express_Highway.png'
import legacyServiceImage from '../assets/images/Legacy-Service.png'

const Home = () => {
  const highlights = [
    {
      icon: Clock,
      value: '40+',
      label: 'Years',
      description: 'Administrative & Corporate Leadership (1983–Present)'
    },
    {
      icon: Award,
      value: 'Flagship',
      label: 'Mega-Projects',
      description: 'High-impact infrastructure leadership at scale'
    },
    {
      icon: Building2,
      value: '₹1.2 Lakh',
      label: 'Cr+ Investment',
      description: 'Total project value overseen as DG, War Room'
    },
    {
      icon: Users,
      value: '10M+',
      label: 'Lives Impacted',
      description: 'Through the Mumbai-Nagpur economic corridor'
    },
  ]

  const featuredProject = {
    title: 'Samruddhi Mahamarg',
    subtitle: 'Mumbai-Nagpur Expressway',
    description: 'Spearheaded the conceptualization and execution of Maharashtra\'s flagship infrastructure project - a 701 km greenfield expressway reducing travel time between Mumbai and Nagpur from 18 hours to 8 hours.',
    metrics: [
      { value: '701 km', label: 'Total Length' },
      { value: '8 hrs', label: 'Travel Time' },
      { value: '24', label: 'Districts Connected' },
    ]
  }

  const latestUpdates = [
    {
      date: 'May 2026',
      title: 'Transitioning Excellence: From Public Service to Corporate Infrastructure Leadership',
      excerpt: 'Reflecting on my new role at Hazoor Multi Projects and the future of private-public partnerships in infrastructure.',
      category: 'Career'
    },
    {
      date: 'March 2026',
      title: "The 'War Room' Model: How to eliminate project delays in India",
      excerpt: 'Lessons from my tenure as Director General of the Infrastructure War Room on accelerating project execution.',
      category: 'Governance'
    },
    {
      date: 'Feb 2026',
      title: 'Scaling Sustainable Corridors: Beyond the Samruddhi Mahamarg',
      excerpt: 'How the success of the Mumbai-Nagpur expressway can inform future greenfield corridor development.',
      category: 'Infrastructure'
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-50" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-8">
                  Indian Administrative Service (Retd.)
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-semibold text-navy-900 leading-tight mb-6"
              >
                Radheshyam
                <span className="text-gold-500 block mt-2">Mopalwar</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-10 leading-relaxed"
              >
                Building transformative infrastructure and fostering sustainable development
                for the progress of Maharashtra and the nation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to="/career"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
                >
                  Explore Career
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-navy-900/30 text-navy-900 font-semibold rounded-lg hover:border-gold-500 hover:text-gold-600 transition-all duration-300"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            {/* Right Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="hidden lg:flex justify-center items-center"
            >
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold-500/30 scale-110" />
                <div className="absolute inset-0 rounded-full border border-gold-500/20 scale-125" />

                {/* Main circular image container */}
                <div className="w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-gold-500/20 shadow-2xl shadow-gold-500/10">
                  <img
                    src={profileImage}
                    alt="Radheshyam Mopalwar"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative dot */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gold-500 rounded-full" />
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-navy-900/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-gold-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <SectionHeading
                title="A Legacy of Service"
                subtitle="Four decades of dedicated service, shaping Maharashtra\'s infrastructure landscape and transforming lives through high-speed connectivity."
              />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Throughout a career spanning four decades, I have been driven by a singular vision: 
                to redefine the speed of infrastructure execution in India. From my landmark role in the Samruddhi Mahamarg 
                to strategic leadership in the CM's Infrastructure War Room, my work has focused on high-speed connectivity as a tool for social equity.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From leading Maharashtra\'s largest expressway project to implementing innovative urban development 
                schemes, every initiative has been guided by the principle of inclusive growth and sustainable progress.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors group"
              >
                Read full biography
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              <div className="aspect-square bg-cream-100 rounded-2xl overflow-hidden">
                <img
                  src={legacyServiceImage}
                  alt="Legacy of Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-gold-500 text-navy-900 p-6 rounded-lg shadow-xl">
                <p className="font-semibold text-lg">Serving since 1983</p>
                <p className="text-sm">1995 Batch, IAS</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Key Highlights Section */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Impact in Numbers"
            subtitle="Measurable outcomes from decades of dedicated public service and transformative leadership."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="text-center h-full">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <item.icon className="text-gold-500" size={28} />
                  </div>
                  <h3 className="text-4xl md:text-5xl font-semibold text-navy-900 mb-2">{item.value}</h3>
                  <p className="text-gold-500 font-medium mb-3">{item.label}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Project Section */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <div className="bg-cream-100 rounded-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="p-8 md:p-12 lg:p-16"
              >
                <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-6">
                  Featured Project
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-2">{featuredProject.title}</h3>
                <p className="text-gold-500 text-xl mb-6">{featuredProject.subtitle}</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {featuredProject.description}
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {featuredProject.metrics.map((metric) => (
                    <div key={metric.label} className="text-center">
                      <p className="text-2xl md:text-3xl font-semibold text-navy-900">{metric.value}</p>
                      <p className="text-gray-600 text-sm mt-1">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300"
                >
                  View All Projects
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="relative flex items-center justify-center"
              >
                <img
                  src={nagpurExpressHighway}
                  alt="Samruddhi Mahamarg - Mumbai-Nagpur Expressway"
                  className="w-full h-auto object-contain"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <SectionHeading
              title="Latest Updates"
              subtitle="Thoughts on governance, infrastructure, and the future of public service."
            />
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors group mb-12 md:mb-0"
            >
              View all posts
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestUpdates.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full flex flex-col">
                  <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-medium rounded-full mb-4 w-fit">
                    {post.category}
                  </span>
                  <p className="text-gray-500 text-sm mb-3">{post.date}</p>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 hover:text-gold-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                </Card>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Press & Media Section */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Press & Media"
            subtitle="Featured coverage, interviews, and insights from leading publications on infrastructure and governance."
            centered
          />

          <PressMedia />
        </Container>
      </section>

      {/* Resources Hub Section */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Policy & Resource Hub"
            subtitle="Downloadable policy documents, strategy frameworks, and technical reports from my tenure."
            centered
          />

          <ResourcesHub />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 mb-6">
              Let's Build Something <span className="text-gold-500">Meaningful</span> Together
            </h2>
            <p className="text-gray-600 text-lg mb-10 leading-relaxed">
              Whether you seek mentorship, collaboration on public initiatives, or wish to discuss
              transformative governance approaches, I welcome the conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Start a Conversation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}

export default Home
