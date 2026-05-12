import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import CareerTimeline from '../components/CareerTimeline'
import { MapPin, Calendar, Building, Award } from 'lucide-react'

const Career = () => {
  const positions = [
    {
      period: '2024 - Present',
      title: 'Chairman & Managing Director',
      organization: 'Hazoor Multi Projects Ltd.',
      location: 'Corporate Leadership',
      description: 'Bringing decades of public infrastructure expertise to the private sector, leading major infrastructure and construction projects.',
      achievements: [
        'Leading corporate infrastructure initiatives',
        'Translating public sector expertise to private projects',
        'Driving sustainable development practices',
      ]
    },
    {
      period: '2015 - 2023',
      title: 'VC & MD, MSRDC & DG, War Room',
      organization: 'Government of Maharashtra',
      location: 'Mumbai, Maharashtra',
      description: 'Architect of the ₹55,000 Cr Samruddhi Mahamarg. Managed the Chief Minister\'s Infrastructure War Room, overseeing Metro, Coastal Road, and MTHL. Officially retired in February 2018 but served a record seven contractual extensions through late 2023 due to indispensable execution skills.',
      achievements: [
        'Delivered ₹55,000 Cr Samruddhi Mahamarg project',
        'Directed Chief Minister\'s Infrastructure War Room',
        'Oversaw Metro, Coastal Road, and MTHL projects',
        'Served seven post-retirement extensions (2018-2023)',
      ]
    },
    {
      period: '2010 - 2015',
      title: 'Member Secretary',
      organization: 'Maharashtra Pollution Control Board (MPCB)',
      location: 'Mumbai, Maharashtra',
      description: 'Served as Member Secretary of MPCB and held various Secretary-level positions, contributing to environmental policy and administrative leadership.',
      achievements: [
        'Led environmental policy initiatives',
        'Managed regulatory compliance frameworks',
        'Strengthened pollution control measures',
      ]
    },
    {
      period: '2005 - 2009',
      title: 'District Collector',
      organization: 'Nanded District',
      location: 'Nanded, Maharashtra',
      description: 'Led the "Nanded City Transformation" project for the 300th anniversary of Guru-ta-Gaddi (2008), a landmark event that transformed the city\'s infrastructure and administration.',
      achievements: [
        'Spearheaded Nanded City Transformation project',
        'Managed infrastructure for Guru-ta-Gaddi 300th anniversary (2008)',
        'Delivered comprehensive urban development initiative',
      ]
    },
    {
      period: '1995 - 2005',
      title: 'IAS Officer & District Collector',
      organization: 'Government of Maharashtra',
      location: 'Maharashtra',
      description: 'Formally inducted into the 1995 IAS batch. Served as Collector of Hingoli and held positions in the IT Department, managing district administration and technology initiatives.',
      achievements: [
        'Inducted into 1995 IAS batch',
        'Served as Collector of Hingoli',
        'Contributed to IT Department initiatives',
      ]
    },
    {
      period: '1983 - 1995',
      title: 'Deputy Collector',
      organization: 'Maharashtra State Civil Services',
      location: 'Maharashtra',
      description: 'Joined Maharashtra State Service as a Deputy Collector. Was a social activist before joining government. Also trained as a Revenue and Land Law expert.',
      achievements: [
        'Joined state civil services as Deputy Collector (1983)',
        'Built foundation in revenue and land law',
        'Contributed as social activist before government service',
      ]
    },
  ]

  const education = [
    {
      degree: 'Executive Program in Public Policy',
      institution: 'Harvard Kennedy School',
      year: '2003',
      description: 'Executive education for senior IAS cadre in public administration and policy.'
    },
    {
      degree: 'Administrative Training',
      institution: 'Lal Bahadur Shastri National Academy of Administration (LBSNAA)',
      year: '1995',
      description: 'Professional training at India\'s premier civil services academy in Mussoorie.'
    },
    {
      degree: 'Bachelor\'s Degree (Arts/Law)',
      institution: 'University Degree',
      year: 'Pre-1982',
      description: 'Academic background in Social Sciences with expertise in Revenue and Land Law.'
    },
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
                Career
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6">
                Professional <span className="text-gold-500">Journey</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                A chronological record of positions held, responsibilities undertaken, and 
                contributions made to public service over 35 years.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Education */}
      <section className="py-16 bg-cream-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-navy-900 text-center mb-10">Education & Qualifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-cream-50 rounded-lg p-6 text-center"
                >
                  <Award className="mx-auto text-gold-500 mb-4" size={28} />
                  <h3 className="text-navy-900 font-semibold mb-2">{edu.degree}</h3>
                  <p className="text-gold-600 text-sm">{edu.institution}</p>
                  <p className="text-gray-600 text-xs mt-2">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Interactive Career Timeline */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="40-Year Career Journey"
            subtitle="An interactive timeline documenting key milestones from 1982 to Present, showcasing the evolution from IRS to IAS and beyond."
            centered
          />

          <CareerTimeline />
        </Container>
      </section>

      {/* Detailed Positions */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Detailed Positions"
            subtitle="Comprehensive overview of roles and responsibilities throughout my career in the Indian Administrative Service."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {positions.map((position, index) => (
                <motion.div
                  key={position.period}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                >
                  <Card className="relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gold-500" />

                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="md:w-48 flex-shrink-0">
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold-500/10 text-gold-600 text-sm font-medium rounded-full">
                          <Calendar size={14} />
                          {position.period}
                        </span>
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-navy-900 mb-2">{position.title}</h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-4">
                          <span className="flex items-center gap-1">
                            <Building size={14} />
                            {position.organization}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {position.location}
                          </span>
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">{position.description}</p>

                        <div className="bg-cream-50 rounded-lg p-4">
                          <h4 className="text-gold-600 text-sm font-medium mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {position.achievements.map((achievement) => (
                              <li key={achievement} className="flex items-start gap-2 text-gray-600 text-sm">
                                <div className="w-1 h-1 bg-gold-500 rounded-full mt-2 shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Career Summary */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
                Looking Forward
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                While my active service in the IAS has concluded, my commitment to contributing 
                to nation-building continues. I remain available for advisory roles, policy consultation, 
                and mentorship to the next generation of civil servants who will carry forward 
                the torch of public service excellence.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-cream-200 rounded-full text-gray-700 text-sm">Policy Advisory</span>
                <span className="px-4 py-2 bg-cream-200 rounded-full text-gray-700 text-sm">Infrastructure Consulting</span>
                <span className="px-4 py-2 bg-cream-200 rounded-full text-gray-700 text-sm">Academic Engagement</span>
                <span className="px-4 py-2 bg-cream-200 rounded-full text-gray-700 text-sm">Mentorship</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default Career
