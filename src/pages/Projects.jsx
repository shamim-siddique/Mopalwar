import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import ProjectGallery from '../components/ProjectGallery'
import { ArrowRight, Building2, Route } from 'lucide-react'
import samruddhiImage from '../assets/images/Samruddhi Mahamarg.png'

const Projects = () => {
  const featuredProject = {
    title: 'Samruddhi Mahamarg',
    subtitle: 'Mumbai-Nagpur Expressway',
    category: 'Flagship Project',
    description: 'The 701 km Mumbai-Nagpur Super Communication Expressway, one of India\'s most ambitious infrastructure projects. This greenfield expressway reduces travel time from 18 hours to 8 hours, connecting 24 districts and driving economic development across Maharashtra.',
    icon: Route,
    stats: [
      { value: '701 km', label: 'Total Length' },
      { value: '8 hrs', label: 'Travel Time' },
      { value: '24', label: 'Districts' },
      { value: '₹55,000 Cr', label: 'Investment' },
    ],
    highlights: [
      'Created 24 "Krushi Samruddhi Kendras" (New Townships) to boost rural economy',
      '10,000 hectares of land acquired without a single major protest',
      'First expressway with 5-layered safety systems',
      'Integrated utility corridor along entire route',
    ]
  }

  const otherProjects = [
    {
      title: 'Versova-Bandra Sea Link',
      category: 'Urban Infrastructure',
      icon: Route,
      description: 'Extending Mumbai\'s sea-link connectivity northward with the Versova-Bandra Sea Link (VBSL) project.',
      impact: 'Critical northward extension of coastal connectivity'
    },
    {
      title: 'Mumbai-Pune Missing Link',
      category: 'Tunnel Engineering',
      icon: Route,
      description: 'Massive tunneling project to bypass the Khandala ghat section, featuring one of the world\'s widest tunnels.',
      impact: 'Eliminates traffic bottlenecks in the Sahyadri Ghats'
    },
    {
      title: 'Thane Creek Bridge-3',
      category: 'Bridge Infrastructure',
      icon: Route,
      description: 'A vital bridge project to decongest the entry gateway between Mumbai and Navi Mumbai.',
      impact: 'Expanding connectivity to the mainland'
    },
    {
      title: 'Pune Ring Road',
      category: 'Highway Development',
      icon: Route,
      description: 'Planned 128-km circular highway around Pune to enable seamless inter-city traffic movement.',
      impact: 'Planned 128-km corridor for decongestion'
    },
    {
      title: 'Infrastructure War Room',
      category: 'Inter-Agency Coordination',
      icon: Building2,
      description: 'As Director General of the Infrastructure War Room, monitored and fast-tracked major projects across agencies.',
      impact: 'Fast-tracked Atal Setu (MTHL) and Mumbai Metro corridors'
    },
  ]

  const impactStats = [
    { value: '₹1.2 Lakh Cr', label: 'Total Project Value Managed' },
    { value: '700+ km', label: 'Greenfield Expressways' },
    { value: '10,000', label: 'Hectares Land Acquired' },
    { value: '1,000+ km', label: 'Planned Corridors' },
  ]

  return (
    <div className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="inline-block px-4 py-1.5 bg-gold-500/8 border border-gold-500/20 rounded-full text-gold-600 text-xs font-semibold tracking-wide mb-5">
                Projects
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 mb-4">
                Building <span className="text-gradient-gold">Tomorrow</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Transformative infrastructure projects that have reshaped Maharashtra's 
                landscape and improved millions of lives.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Impact Stats */}
      <section className="py-10 md:py-12 bg-cream-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="text-center p-4 sm:p-5 bg-cream-50 rounded-2xl border border-cream-200/60"
              >
                <p className="text-xl sm:text-2xl font-semibold text-gold-600 mb-1">{stat.value}</p>
                <p className="text-gray-500 text-xs sm:text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Project */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <SectionHeading
            title={featuredProject.title}
            subtitle={featuredProject.subtitle}
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-gradient-to-br from-cream-100 to-cream-50 rounded-2xl overflow-hidden border border-cream-200/80 shadow-lg shadow-navy-900/3"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-6 sm:p-8 lg:p-10">
                <span className="inline-block px-3 py-1 bg-gold-500/8 border border-gold-500/20 rounded-full text-gold-600 text-xs font-semibold mb-5">
                  {featuredProject.category}
                </span>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  {featuredProject.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  {featuredProject.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-3 bg-cream-50 rounded-xl border border-cream-200/60">
                      <p className="text-lg sm:text-xl font-semibold text-gold-600">{stat.value}</p>
                      <p className="text-gray-500 text-[11px] mt-0.5">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-navy-900 font-semibold text-sm mb-3">Key Highlights</h4>
                <ul className="space-y-2 mb-6">
                  {featuredProject.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-2.5 text-gray-600 text-sm">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-h-[280px] lg:min-h-0 flex items-center justify-center bg-cream-200/40">
                <img
                  src={samruddhiImage}
                  alt="Samruddhi Mahamarg Visualization"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Visual Project Gallery */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-100">
        <Container>
          <SectionHeading
            title="Project Gallery"
            subtitle="Explore the Samruddhi Mahamarg and other flagship infrastructure projects through this visual showcase."
            centered
          />

          <ProjectGallery />
        </Container>
      </section>

      {/* Other Projects */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-50">
        <Container>
          <SectionHeading
            title="Other Major Projects"
            subtitle="Additional transformative initiatives undertaken during my tenure."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="h-full flex flex-col" hover>
                  <div className="flex items-center gap-2.5 mb-3">
                    <div className="w-9 h-9 bg-gold-500/8 rounded-lg flex items-center justify-center">
                      <project.icon className="text-gold-500" size={18} />
                    </div>
                    <span className="text-gold-600 text-[10px] font-semibold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm mb-3 flex-grow leading-relaxed">{project.description}</p>
                  <div className="pt-3 border-t border-cream-200/60">
                    <p className="text-gold-600 text-xs font-medium">Impact: {project.impact}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Philosophy */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-100">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-navy-900 mb-4">
                Project Philosophy
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 italic">
                "Infrastructure is about more than concrete; it's about the speed of execution. 
                We replaced traditional delays with a 'War Room' approach, ensuring that land 
                acquisition and financing were completed before the first shovel hit the ground."
              </p>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors group text-sm"
              >
                View Awards & Recognition
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Projects
