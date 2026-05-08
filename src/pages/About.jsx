import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { Award, BookOpen, Heart, Target } from 'lucide-react'
import radheshyamImage from '../assets/images/Radheshyam.png'

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest standards in every initiative, ensuring quality outcomes that stand the test of time.'
    },
    {
      icon: Heart,
      title: 'Service',
      description: 'Placing citizen welfare at the heart of every decision, working tirelessly to improve lives and communities.'
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in public service, maintaining transparency and accountability.'
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'Embracing modern solutions and creative approaches to address complex governance challenges.'
    },
  ]

  const timeline = [
    {
      year: '1989',
      title: 'Joined IAS',
      description: 'Began civil service career after graduating with top honors from the Lal Bahadur Shastri National Academy of Administration.'
    },
    {
      year: '1995',
      title: 'District Collector',
      description: 'First posting as District Collector, implementing transformative rural development programs.'
    },
    {
      year: '2005',
      title: 'Principal Secretary',
      description: 'Elevated to Principal Secretary role, overseeing major infrastructure departments.'
    },
    {
      year: '2015',
      title: 'VC & MD, MSRDC',
      description: 'Appointed Vice Chairman & Managing Director of Maharashtra State Road Development Corporation.'
    },
    {
      year: '2024',
      title: 'Retirement',
      description: 'Retired after 35 years of distinguished service, leaving behind a legacy of transformative projects.'
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
                About
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6">
                A Life Dedicated to <span className="text-gold-500">Public Service</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Three and a half decades of unwavering commitment to nation-building through 
                effective governance, transformative infrastructure, and inclusive development.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Biography */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="aspect-[4/5] bg-cream-200 rounded-2xl overflow-hidden">
                <img 
                  src={radheshyamImage} 
                  alt="Radheshyam Mopalwar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-semibold text-navy-900 mb-6">
                Radheshyam Mopalwar
              </h2>
              <p className="text-gold-500 text-lg mb-6">IAS Officer (1989-2024)</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Born with a deep-rooted desire to serve the nation, I embarked on my journey in the 
                  Indian Administrative Service in 1989. Over the past 35 years, I have had the privilege 
                  of serving in various capacities across Maharashtra, each role offering unique opportunities 
                  to contribute to the state\'s development.
                </p>
                <p>
                  My career has been defined by a focus on infrastructure development, recognizing that 
                  robust connectivity and modern amenities are the foundation upon which economic prosperity 
                  and social equity are built. From rural roads to expressways, each project has been 
                  guided by the vision of inclusive growth.
                </p>
                <p>
                  Beyond infrastructure, I have been deeply committed to improving governance mechanisms, 
                  streamlining administrative processes, and leveraging technology to enhance service delivery. 
                  The ultimate goal has always been to make government more responsive and accessible to citizens.
                </p>
                <p>
                  As I transition into this new phase of life, I remain committed to sharing my experiences 
                  and insights with the next generation of civil servants and contributing to policy discourse 
                  in whatever capacity I can.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-cream-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-gold-500 text-3xl font-semibold">35+</p>
                    <p className="text-gray-600">Years of Service</p>
                  </div>
                  <div>
                    <p className="text-gold-500 text-3xl font-semibold">15+</p>
                    <p className="text-gray-600">Key Positions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-cream-50">
        <Container>
          <SectionHeading
            title="Core Values"
            subtitle="The principles that have guided every decision and action throughout my career in public service."
            centered
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full text-center">
                  <div className="w-16 h-16 bg-gold-500/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="text-gold-500" size={28} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Career Journey"
            subtitle="Key milestones from the beginning of my civil service journey to retirement."
            centered
          />

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                  className="flex gap-6 md:gap-8"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gold-500 rounded-full" />
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 flex-grow bg-cream-200 mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-sm font-medium rounded-full mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-semibold text-navy-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}

export default About
