import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { ArrowRight, Building2, Route, TreePine, Train, Droplets } from 'lucide-react'
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
      'First expressway with 5-layered safety systems',
      'Integrated utility corridor along entire route',
      'Smart traffic management with AI integration',
      '24 agricultural nodes for farmer connectivity',
    ]
  }

  const otherProjects = [
    {
      title: 'Coastal Road Project',
      category: 'Urban Infrastructure',
      icon: Route,
      description: '29.2 km coastal freeway connecting Marine Lines to Kandivali, featuring undersea tunnels and interchanges.',
      impact: 'Reduced congestion by 60% in western Mumbai'
    },
    {
      title: 'Green City Initiative',
      category: 'Sustainability',
      icon: TreePine,
      description: 'Urban greening project across 15 cities with 2 million+ tree plantations and smart irrigation systems.',
      impact: '15% improvement in air quality indices'
    },
    {
      title: 'Metro Expansion Phase III',
      category: 'Public Transit',
      icon: Train,
      description: 'Extended metro connectivity to suburbs and satellite towns with 12 new lines and 150+ stations.',
      impact: '2 million daily passengers served'
    },
    {
      title: 'Water Security Program',
      category: 'Water Resources',
      icon: Droplets,
      description: 'Integrated water management system with 12 new dams, pipeline networks, and purification plants.',
      impact: 'Clean water access to 5 million households'
    },
    {
      title: 'MSRDC Modernization',
      category: 'Institutional Reform',
      icon: Building2,
      description: 'Digital transformation of Maharashtra State Road Development Corporation with e-tendering and project monitoring.',
      impact: '40% reduction in project delays'
    },
  ]

  const impactStats = [
    { value: '₹1.2 Lakh Cr', label: 'Total Investment Mobilized' },
    { value: '2,500+ km', label: 'Roads & Highways Built' },
    { value: '50+', label: 'Bridges & Flyovers' },
    { value: '15M+', label: 'Lives Positively Impacted' },
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-6">
                Projects
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6">
                Building <span className="text-gold-600">Tomorrow</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transformative infrastructure projects that have reshaped Maharashtra\'s 
                landscape and improved millions of lives.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-cream-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-semibold text-gold-600 mb-2">{stat.value}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Project */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title={featuredProject.title}
            subtitle={featuredProject.subtitle}
            centered
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="bg-cream-100 rounded-2xl overflow-hidden"
          >
            <div className="grid lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <span className="inline-block px-4 py-2 bg-gold-500/10 border border-gold-500/30 rounded-full text-gold-600 text-sm font-medium mb-6">
                  {featuredProject.category}
                </span>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  {featuredProject.description}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {featuredProject.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-4 bg-cream-50 rounded-lg">
                      <p className="text-xl font-semibold text-gold-600">{stat.value}</p>
                      <p className="text-gray-600 text-xs mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>

                <h4 className="text-navy-900 font-semibold mb-4">Key Highlights</h4>
                <ul className="space-y-2 mb-8">
                  {featuredProject.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="min-h-[400px] flex items-center justify-center rounded-2xl overflow-hidden">
                <img 
                  src={samruddhiImage} 
                  alt="Samruddhi Mahamarg Visualization" 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Other Projects */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Other Major Projects"
            subtitle="Additional transformative initiatives undertaken during my tenure."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center">
                      <project.icon className="text-gold-500" size={24} />
                    </div>
                    <span className="text-gold-600 text-xs font-medium uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                  <div className="pt-4 border-t border-cream-200">
                    <p className="text-gold-600 text-sm font-medium">Impact: {project.impact}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Philosophy */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
                Project Philosophy
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Every project undertaken followed a clear set of principles: stakeholder consultation, 
                environmental sustainability, cost-effectiveness, and above all, serving the public good. 
                Infrastructure is not just about concrete and steel—it\'s about connecting people, 
                enabling opportunities, and building a better future.
              </p>
              <Link
                to="/achievements"
                className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors group"
              >
                View Awards & Recognition
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Projects
