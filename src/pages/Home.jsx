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
      <section className="relative min-h-[90vh] md:min-h-[88vh] flex items-center pt-16 md:pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-cream-50 via-cream-100 to-cream-50" />
        <div className="absolute inset-0 opacity-25">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 md:w-96 md:h-96 bg-gold-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-1/4 w-80 h-80 md:w-96 md:h-96 bg-gold-500/8 rounded-full blur-3xl" />
        </div>
        
        <Container className="relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="max-w-2xl order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="inline-block px-4 py-1.5 bg-gold-500/8 border border-gold-500/20 rounded-full text-gold-600 text-xs font-semibold tracking-wide mb-6">
                  Indian Administrative Service (Retd.)
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold text-navy-900 leading-[1.1] mb-5"
              >
                Radheshyam
                <span className="text-gradient-gold block mt-1">Mopalwar</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg md:text-xl text-gray-600 max-w-xl mb-8 leading-relaxed"
              >
                Building transformative infrastructure and fostering sustainable development
                for the progress of Maharashtra and the nation.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex flex-wrap gap-3"
              >
                <Link to="/career" className="btn-primary">
                  Explore Career
                  <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </motion.div>
            </div>

            {/* Right Circular Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex justify-center items-center order-1 lg:order-2"
            >
              <div className="relative">
                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-gold-500/20 scale-110" />
                <div className="absolute inset-0 rounded-full border border-gold-500/10 scale-125" />

                {/* Main circular image container */}
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-88 xl:h-88 rounded-full overflow-hidden border-[3px] border-gold-500/15 shadow-2xl shadow-gold-500/8">
                  <img
                    src={profileImage}
                    alt="Radheshyam Mopalwar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-9 border-2 border-navy-900/20 rounded-full flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 bg-gold-500 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* About Preview Section */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <SectionHeading
                title="A Legacy of Service"
                subtitle="Four decades of dedicated service, shaping Maharashtra's infrastructure landscape and transforming lives through high-speed connectivity."
              />
              <p className="text-gray-600 text-base leading-relaxed mb-4">
                Throughout a career spanning four decades, I have been driven by a singular vision: 
                to redefine the speed of infrastructure execution in India. From my landmark role in the Samruddhi Mahamarg 
                to strategic leadership in the CM's Infrastructure War Room, my work has focused on high-speed connectivity as a tool for social equity.
              </p>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                From leading Maharashtra's largest expressway project to implementing innovative urban development 
                schemes, every initiative has been guided by the principle of inclusive growth and sustainable progress.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors group text-sm"
              >
                Read full biography
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="aspect-[4/3] sm:aspect-square bg-cream-100 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={legacyServiceImage}
                  alt="Legacy of Service"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-gold-500 to-gold-600 text-navy-900 p-4 sm:p-5 rounded-xl shadow-xl shadow-gold-500/20">
                <p className="font-semibold text-sm sm:text-base">Serving since 1983</p>
                <p className="text-xs opacity-80">1995 Batch, IAS</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Key Highlights Section */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-100">
        <Container>
          <SectionHeading
            title="Impact in Numbers"
            subtitle="Measurable outcomes from decades of dedicated public service and transformative leadership."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="text-center h-full" hover>
                  <div className="w-12 h-12 bg-gold-500/8 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="text-gold-500" size={24} />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-1">{item.value}</h3>
                  <p className="text-gold-600 font-medium text-sm mb-2">{item.label}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Project Section */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <div className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-2xl overflow-hidden border border-cream-200/80 shadow-lg shadow-navy-900/3">
            <div className="grid lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="p-6 sm:p-8 lg:p-10 xl:p-12"
              >
                <span className="inline-block px-3 py-1 bg-gold-500/8 border border-gold-500/20 rounded-full text-gold-600 text-xs font-semibold mb-5">
                  Featured Project
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-900 mb-1">{featuredProject.title}</h3>
                <p className="text-gold-500 text-lg sm:text-xl mb-5">{featuredProject.subtitle}</p>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {featuredProject.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {featuredProject.metrics.map((metric) => (
                    <div key={metric.label} className="text-center p-3 bg-cream-50 rounded-xl border border-cream-200/60">
                      <p className="text-xl sm:text-2xl font-semibold text-navy-900">{metric.value}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{metric.label}</p>
                    </div>
                  ))}
                </div>

                <Link to="/projects" className="btn-primary text-sm">
                  View All Projects
                  <ArrowRight size={16} />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative flex items-center justify-center bg-cream-200/50 min-h-[280px] lg:min-h-0"
              >
                <img
                  src={nagpurExpressHighway}
                  alt="Samruddhi Mahamarg - Mumbai-Nagpur Expressway"
                  className="w-full h-full object-cover lg:object-contain"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Latest Updates Section */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-8 md:mb-10">
            <SectionHeading
              title="Latest Updates"
              subtitle="Thoughts on governance, infrastructure, and the future of public service."
              className="mb-0"
            />
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors group text-sm mb-2 md:mb-0"
            >
              View all posts
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {latestUpdates.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="h-full flex flex-col" hover>
                  <span className="inline-block px-2.5 py-0.5 bg-gold-500/8 text-gold-600 text-[11px] font-semibold rounded-full mb-3 w-fit uppercase tracking-wide">
                    {post.category}
                  </span>
                  <p className="text-gray-400 text-xs mb-2">{post.date}</p>
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-2 hover:text-gold-600 transition-colors cursor-pointer leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                </Card>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Press & Media Section */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
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
      <section className="py-14 md:py-18 lg:py-20 bg-cream-100">
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
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-900 mb-4">
              Let's Build Something <span className="text-gradient-gold">Meaningful</span> Together
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mb-8 leading-relaxed">
              Whether you seek mentorship, collaboration on public initiatives, or wish to discuss
              transformative governance approaches, I welcome the conversation.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Conversation
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}

export default Home
