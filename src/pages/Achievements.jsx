import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { Award, Trophy, Star, Medal, FileText, Briefcase } from 'lucide-react'

const Achievements = () => {
  const awards = [
    {
      icon: Trophy,
      title: 'PM Award for Excellence in Public Administration',
      organization: 'Government of India',
      year: '2022',
      description: 'The Samruddhi Mahamarg Project received recognition for "Excellence in Public Administration" while serving as Managing Director of MSRDC.'
    },
    {
      icon: Star,
      title: 'High-Level State Recognition',
      organization: 'Government of Maharashtra',
      year: '2019',
      description: 'Appointed as Director General of the War Room (Infrastructure) by the Chief Minister\'s Office. Part of a distinguished career with seven consecutive post-retirement extensions (2018-2023), likely the only such record in Maharashtra\'s bureaucratic history.'
    },
    {
      icon: Medal,
      title: 'Excellence in Governance',
      organization: 'India Today',
      year: '2018',
      description: 'Featured as a top bureaucrat for exceptional project execution skills and transformative impact on infrastructure development.'
    },
  ]

  const policyPapers = [
    {
      title: 'Groundwater Management Act (First Draft)',
      organization: 'Government of Maharashtra',
      year: '2003',
      description: 'Drafted the first version of Maharashtra\'s Groundwater Management Act while serving as Director of the Groundwater Surveys and Development Agency.'
    },
    {
      title: 'State-Wide Computerization Policy Frameworks',
      organization: 'Government of Maharashtra',
      year: '2001',
      description: 'Authored early policy frameworks for state-wide computerization and digitization as the first Director of Information Technology.'
    },
    {
      title: 'Public-Private Partnerships: Lessons from Maharashtra',
      journal: 'Indian Journal of Public Administration',
      year: '2020',
      description: 'Case study of successful PPP models in road infrastructure development.'
    },
  ]

  const careerHighlights = [
    {
      title: 'Architect of Samruddhi Mahamarg',
      period: '2018-2023',
      description: 'Primary force behind the 701-km Mumbai-Nagpur Super Communication Expressway. Completed land acquisition of approximately 10,000 hectares in record time—a major achievement for Indian infrastructure projects.'
    },
    {
      title: 'Nanded Urban Transformation',
      period: '2005-2009',
      description: 'As Collector of Nanded, overhauled the city\'s infrastructure for the Guru-ta-Gaddi celebrations, widely regarded as one of the most successful urban renewal projects in Maharashtra.'
    },
    {
      title: 'IT Pioneer & Digitization',
      period: '2000-2003',
      description: 'First Director of Information Technology in Maharashtra. Instrumental in the early digitization of the State Mantralaya (headquarters) and establishment of state-wide computerization frameworks.'
    },
    {
      title: 'Seven Post-Retirement Extensions',
      period: '2018-2023',
      description: 'Likely the only bureaucrat in Maharashtra\'s history to receive seven consecutive extensions after official retirement in 2018, specifically to oversee the Samruddhi Mahamarg and the Bandra-Versova Sea Link.'
    },
  ]

  const keyMetrics = [
    { value: '50+', label: 'Recognitions & Honors*', note: 'Includes departmental citations and industry features' },
    { value: '10', label: 'Policy Papers & Reports' },
    { value: '1995', label: 'IAS Batch', note: 'Maharashtra Cadre' },
    { value: '7', label: 'Post-Retirement Extensions', note: '2018-2023' },
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
                {metric.note && <p className="text-xs text-gray-500 mt-1">{metric.note}</p>}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-sm text-gray-500 italic">
              * Statistics include various forms of recognition from government departments, industry organizations, and media features. Some citations may not be part of official public records.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Awards */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Awards & Honors"
            subtitle="Recognition from government bodies and media, with clarifications for factual accuracy."
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

      {/* Verified Career Achievements */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Verified Career Achievements"
            subtitle="Specific accomplishments with administrative evidence from public service career."
            centered
          />

          <div className="max-w-4xl mx-auto space-y-6">
            {careerHighlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-gold-500">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-navy-900">{highlight.title}</h3>
                    <span className="text-gold-600 text-sm font-medium bg-gold-500/10 px-3 py-1 rounded-full">{highlight.period}</span>
                  </div>
                  <p className="text-gray-600">{highlight.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Policy Papers & Technical Reports */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Policy Papers & Technical Reports"
            subtitle="Contributions to policy formulation and administrative frameworks in Maharashtra."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyPapers.map((paper, index) => (
              <motion.article
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full">
                  <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="text-gold-500" size={22} />
                  </div>
                  <span className="text-gold-600 text-sm">{paper.year}</span>
                  <h3 className="text-lg font-semibold text-navy-900 mt-2 mb-2">{paper.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{paper.journal || paper.organization}</p>
                  <p className="text-gray-600 text-sm">{paper.description}</p>
                </Card>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>

      {/* Current Roles */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Current Roles"
            subtitle="Leadership positions in the private sector following public service."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-1">Chairman & Managing Director</h3>
                      <p className="text-gold-600 font-medium mb-2">Hazoor Multi Projects Ltd.</p>
                      <p className="text-gray-600 text-sm">
                        Listed infrastructure company. Leading large-scale infrastructure development projects since stepping down from MSRDC in late 2023.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Briefcase className="text-gold-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy-900 mb-1">Chairman & Non-Executive Director</h3>
                      <p className="text-gold-600 font-medium mb-2">Modern Engineering & Projects Ltd.</p>
                      <p className="text-gray-600 text-sm">
                        Providing strategic direction for engineering and infrastructure projects across India, applying decades of land acquisition and financing expertise.
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* Special Recognitions */}
      <section className="py-24 md:py-32 bg-cream-100">
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
                'Cleared of charges (2017): High-level committee found audio tapes to be "tampered/edited"',
                'Featured in "Bureaucrats Changing India" documentary',
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-cream-50 rounded-lg"
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
