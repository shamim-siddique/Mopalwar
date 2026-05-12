import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
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

  const categories = [
    'All',
    'Infrastructure',
    'Governance',
    'Technology',
    'Leadership',
    'Policy',
    'Urban Development',
    'Rural Development'
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
                Blog
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy-900 mb-6">
                Thoughts & <span className="text-gold-500">Insights</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Reflections on governance, infrastructure, leadership, and the lessons 
                learned from four decades of experience across public and private sectors.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-cream-50">
        <Container>
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={warRoomImage}
                    alt="The Corporate Pivot: Applying 'War Room' Tactics to Private Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-medium rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Clock size={14} />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4 hover:text-gold-600 transition-colors cursor-pointer">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="flex items-center gap-1 text-gray-500 text-sm">
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="inline-flex items-center gap-2 text-gold-600 font-semibold hover:text-gold-500 transition-colors group">
                    Read full article
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </Card>
          </motion.article>
        </Container>
      </section>

      {/* All Posts */}
      <section className="py-24 md:py-32 bg-cream-100">
        <Container>
          <SectionHeading
            title="Recent Articles"
            subtitle="More thoughts and reflections on public service and development."
            centered
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-medium rounded-full">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 mb-3 hover:text-gold-600 transition-colors cursor-pointer">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="pt-4 border-t border-cream-200 flex items-center justify-between">
                    <span className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <button className="text-gold-600 text-sm font-medium hover:text-gold-500 transition-colors inline-flex items-center gap-1 group">
                      Read
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>

        </Container>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-cream-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-semibold text-navy-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 mb-8">
              Receive notifications when new articles are published. No spam, just thoughtful insights.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-3 bg-cream-100 border border-cream-200 rounded-lg text-navy-900 placeholder-gray-500 focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300 whitespace-nowrap"
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
