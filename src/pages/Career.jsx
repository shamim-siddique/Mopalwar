import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { MapPin, Calendar, Building, Award } from 'lucide-react'

const Career = () => {
  const positions = [
    {
      period: '2015 - 2024',
      title: 'Vice Chairman & Managing Director',
      organization: 'MSRDC, Government of Maharashtra',
      location: 'Mumbai, Maharashtra',
      description: 'Led Maharashtra State Road Development Corporation, overseeing the planning, execution, and management of the state\'s largest infrastructure projects including the Samruddhi Mahamarg Expressway.',
      achievements: [
        'Delivered ₹55,000 Cr Samruddhi Mahamarg project',
        'Modernized MSRDC with digital transformation',
        'Secured Prime Minister\'s Award for Excellence in Public Administration',
      ]
    },
    {
      period: '2010 - 2015',
      title: 'Principal Secretary',
      organization: 'Public Works Department',
      location: 'Mantralaya, Mumbai',
      description: 'Directed policy formulation and implementation for the state\'s public works, managing a portfolio of over 200 major infrastructure projects worth ₹80,000+ Crores.',
      achievements: [
        'Streamlined project approval processes reducing timelines by 40%',
        'Introduced quality assurance protocols across all PWD projects',
        'Launched sustainable construction guidelines',
      ]
    },
    {
      period: '2005 - 2010',
      title: 'Divisional Commissioner',
      organization: 'Nagpur Division',
      location: 'Nagpur, Maharashtra',
      description: 'Administrative head of Nagpur Division, coordinating development activities across six districts and implementing central and state government schemes.',
      achievements: [
        'Spearheaded Vidarbha development initiatives',
        'Improved inter-district coordination mechanisms',
        'Enhanced grievance redressal systems',
      ]
    },
    {
      period: '2000 - 2005',
      title: 'District Collector',
      organization: 'Multiple Districts',
      location: 'Maharashtra',
      description: 'Served as District Magistrate and Collector in three districts, managing law & order, revenue administration, and development programs.',
      achievements: [
        'Implemented successful watershed development programs',
        'Reformed land record management systems',
        'Pioneered e-governance initiatives at district level',
      ]
    },
    {
      period: '1995 - 2000',
      title: 'Sub-Divisional Officer',
      organization: 'Revenue Department',
      location: 'Various Postings',
      description: 'Managed sub-divisional administration, land revenue collection, and implementation of government welfare schemes at the grassroots level.',
      achievements: [
        'Achieved 95% tax collection efficiency',
        'Streamlined certificate issuance processes',
        'Improved public service delivery in rural areas',
      ]
    },
    {
      period: '1989 - 1995',
      title: 'Assistant Collector',
      organization: 'Training & Field Postings',
      location: 'Maharashtra',
      description: 'Initial years in service involving district training, attachment to various departments, and understudy to senior officers.',
      achievements: [
        'Completed district training with distinction',
        'Authored policy papers on rural development',
        'Received commendation for disaster management response',
      ]
    },
  ]

  const education = [
    {
      degree: 'Masters in Public Administration',
      institution: 'Harvard Kennedy School',
      year: '2003',
      description: 'Specialized in infrastructure policy and urban development.'
    },
    {
      degree: 'MBA (Finance)',
      institution: 'Faculty of Management Studies, Delhi',
      year: '1987',
      description: 'Graduated with distinction, specializing in public sector management.'
    },
    {
      degree: 'B.Tech (Civil Engineering)',
      institution: 'IIT Bombay',
      year: '1985',
      description: 'Foundation in technical aspects of infrastructure development.'
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

      {/* Career Timeline */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Positions Held"
            subtitle="Key roles and responsibilities throughout my career in the Indian Administrative Service."
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
                                <div className="w-1 h-1 bg-gold-500 rounded-full mt-2 flex-shrink-0" />
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
