import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { Award, Trophy, Star, Medal, FileText } from 'lucide-react'

const Achievements = () => {
  const awards = [
    {
      icon: Trophy,
      title: 'Prime Minister\'s Award',
      organization: 'Government of India',
      year: '2022',
      description: 'For Excellence in Public Administration for the Samruddhi Mahamarg Expressway project.'
    },
    {
      icon: Award,
      title: 'Best Infrastructure Project',
      organization: 'Infrastructure Conclave',
      year: '2021',
      description: 'Recognized for transformative impact on Maharashtra\'s connectivity and economic development.'
    },
    {
      icon: Star,
      title: 'Distinguished Service Medal',
      organization: 'Government of Maharashtra',
      year: '2019',
      description: 'For outstanding contribution to state infrastructure development over two decades.'
    },
    {
      icon: Medal,
      title: 'Excellence in Governance',
      organization: 'India Today',
      year: '2018',
      description: 'Featured in the list of top bureaucrats driving transformative change in India.'
    },
  ]

  const publications = [
    {
      title: 'Infrastructure Development in the 21st Century',
      journal: 'Economic & Political Weekly',
      year: '2023',
      description: 'An analysis of modern approaches to large-scale infrastructure projects in developing economies.'
    },
    {
      title: 'Public-Private Partnerships: Lessons from Maharashtra',
      journal: 'Indian Journal of Public Administration',
      year: '2020',
      description: 'Case study of successful PPP models in road infrastructure development.'
    },
    {
      title: 'Transforming Rural Connectivity',
      journal: 'Yojana Magazine',
      year: '2018',
      description: 'Article on the role of rural roads in enabling economic opportunities for farmers.'
    },
  ]

  const keyMetrics = [
    { value: '50+', label: 'Awards & Honors' },
    { value: '10', label: 'Research Papers' },
    { value: '25+', label: 'Keynote Speeches' },
    { value: '15', label: 'International Conferences' },
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
                Achievements
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6">
                Recognition & <span className="text-gold-500">Impact</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A journey marked by national recognition, peer acknowledgment, and 
                transformative contributions to public infrastructure.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Key Metrics */}
      <section className="py-16 bg-cream-100">
        <Container>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-semibold text-gold-600 mb-2">{metric.value}</p>
                <p className="text-gray-600">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Awards */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Awards & Honors"
            subtitle="Recognition from government bodies, industry organizations, and academic institutions."
            centered
          />

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gold-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <award.icon className="text-gold-500" size={26} />
                    </div>
                    <div>
                      <span className="text-gold-600 text-sm font-medium">{award.year}</span>
                      <h3 className="text-xl font-semibold text-navy-900 mt-1 mb-2">{award.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{award.organization}</p>
                      <p className="text-gray-600">{award.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Publications */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Publications & Research"
            subtitle="Contributions to academic discourse on public administration and infrastructure development."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="text-gold-500" size={22} />
                  </div>
                  <span className="text-gold-600 text-sm">{pub.year}</span>
                  <h3 className="text-lg font-semibold text-navy-900 mt-2 mb-2">{pub.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{pub.journal}</p>
                  <p className="text-gray-600 text-sm">{pub.description}</p>
                </Card>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Special Recognitions */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Special Recognitions"
            subtitle="Additional honors and distinctions received throughout my career."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Keynote speaker at National Infrastructure Summit 2023',
                'Member, National Task Force on Urban Mobility',
                'Visiting Faculty, IIM Mumbai - Public Policy Program',
                'Chairman, Infrastructure Excellence Awards Committee',
                'Advisor, World Bank Infrastructure Projects (India)',
                'Featured in "Bureaucrats Changing India" documentary',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-cream-100 rounded-lg"
                >
                  <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0" />
                  <p className="text-gray-600">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Achievements
