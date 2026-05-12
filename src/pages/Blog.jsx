import { motion } from 'framer-motion'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { Calendar, Clock, Tag } from 'lucide-react'
import warRoomImage from '../assets/images/War Room.png'

const Blog = () => {
  const featuredPost = {
    title: 'The Corporate Pivot: Applying \'War Room\' Tactics to Private Infrastructure',
    date: 'March 12, 2026',
    readTime: '10 min read',
    category: 'Leadership',
    excerpt: 'Reflecting on my first two years in the private sector and how the rapid execution models we built for the Samruddhi Mahamarg are now transforming private-sector delivery.',
    tags: ['Leadership', 'PrivateSector', 'Infrastructure']
  }

  const posts = [
    {
      title: 'The Future of Public-Private Partnerships in 2026',
      date: 'January 15, 2026',
      readTime: '8 min read',
      category: 'Governance',
      excerpt: 'Why the next decade of Indian growth depends on risk-sharing between the government and developers. Drawing from my experience as Director General of the Infrastructure War Room and now as MD of Hazoor Multi Projects Ltd.'
    },
    {
      title: 'Beyond the Samruddhi Mahamarg: Scaling India\'s Expressway Grid',
      date: 'November 20, 2025',
      readTime: '9 min read',
      category: 'Infrastructure',
      excerpt: 'Lessons from the 701-km project and how it serves as a blueprint for the proposed Pune-Bangalore and Nagpur-Goa corridors. The MSRDC modernization we achieved—e-tendering and e-monitoring systems that cut delays by 40%—is now being replicated nationwide.'
    },
    {
      title: 'AI in Land Acquisition: Minimizing Litigation through Digital Mapping',
      date: 'September 5, 2025',
      readTime: '7 min read',
      category: 'Technology',
      excerpt: 'How we used drone surveys and digital records to acquire 10,000 hectares with zero major protests. The War Room approach to rapid execution meets cutting-edge technology.'
    },
    {
      title: 'The Seven Extensions: A Reflection on Public Duty',
      date: 'June 10, 2025',
      readTime: '6 min read',
      category: 'Leadership',
      excerpt: 'A personal look at why I chose to stay in public service for five years after retirement to see the Samruddhi project to the finish line—and how that commitment now informs my leadership at Hazoor Multi Projects.'
    },
    {
      title: 'Life After IAS: The Private Sector Transition',
      date: 'April 22, 2025',
      readTime: '8 min read',
      category: 'Leadership',
      excerpt: 'From government regulator to corporate leader—reflections on the first year as Managing Director of Hazoor Multi Projects Ltd, and how four decades of public service experience shapes private infrastructure delivery.'
    },
    {
      title: 'MSRDC Modernization: Building Systems That Outlast Tenure',
      date: 'February 15, 2025',
      readTime: '7 min read',
      category: 'Governance',
      excerpt: 'The e-tendering and e-monitoring systems we introduced at MSRDC reduced administrative delays by 40%. Here is how to build institutional capacity that endures beyond any single administrator.'
    },
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
                Blog
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-navy-900 mb-4">
                Thoughts & <span className="text-gradient-gold">Insights</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                Reflections on governance, infrastructure, leadership, and the lessons 
                learned from four decades of experience across public and private sectors.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-10 md:py-12 bg-cream-50">
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Card className="overflow-hidden" hover={false}>
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={warRoomImage}
                    alt="The Corporate Pivot: Applying 'War Room' Tactics to Private Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 lg:p-10">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="inline-block px-2.5 py-0.5 bg-gold-500/8 text-gold-600 text-[11px] font-semibold rounded-full uppercase tracking-wide">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Calendar size={12} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Clock size={12} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy-900 mb-3 hover:text-gold-600 transition-colors cursor-pointer leading-snug">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-500 text-base leading-relaxed mb-4">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-gray-400 text-xs">
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.article>
        </Container>
      </section>

      {/* All Posts */}
      <section className="py-14 md:py-18 lg:py-20 bg-cream-100">
        <Container>
          <SectionHeading
            title="Recent Articles"
            subtitle="More thoughts and reflections on public service and development."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Card className="h-full flex flex-col" hover>
                  <div className="flex items-center gap-2.5 mb-3">
                    <span className="inline-block px-2.5 py-0.5 bg-gold-500/8 text-gold-600 text-[11px] font-semibold rounded-full uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-gray-400 text-[11px]">{post.readTime}</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-navy-900 mb-2 hover:text-gold-600 transition-colors cursor-pointer leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-3 border-t border-cream-200/60 flex items-center">
                    <span className="flex items-center gap-1 text-gray-400 text-xs">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14 md:py-16 bg-cream-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="max-w-xl mx-auto text-center"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-navy-900 mb-3">
              Stay Updated
            </h2>
            <p className="text-gray-500 text-sm sm:text-base mb-6">
              Receive notifications when new articles are published. No spam, just thoughtful insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="input-field text-sm"
              />
              <button
                type="submit"
                className="btn-primary text-sm whitespace-nowrap justify-center"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </Container>
      </section>
    </div>
  )
}

export default Blog
