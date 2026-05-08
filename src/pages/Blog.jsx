import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'
import infrastructureImage from '../assets/images/Infrastructure.png'

const Blog = () => {
  const featuredPost = {
    title: 'The Future of Infrastructure: Lessons from Samruddhi Mahamarg',
    date: 'December 15, 2024',
    readTime: '8 min read',
    category: 'Infrastructure',
    excerpt: 'Reflecting on the journey of India\'s one of most ambitious expressway projects and the lessons it holds for future large-scale infrastructure development in the country.',
    tags: ['Infrastructure', 'Governance', 'Maharashtra', 'Development']
  }

  const posts = [
    {
      title: 'Building Trust Through Transparency: My Approach to Governance',
      date: 'November 28, 2024',
      readTime: '6 min read',
      category: 'Governance',
      excerpt: 'How open communication and stakeholder engagement can transform public perception and outcomes of government projects.'
    },
    {
      title: 'Sustainable Urban Planning: Balancing Growth with Environment',
      date: 'November 10, 2024',
      readTime: '7 min read',
      category: 'Urban Development',
      excerpt: 'Exploring frameworks for city development that prioritize both economic growth and environmental sustainability.'
    },
    {
      title: 'The Role of Technology in Modern Administration',
      date: 'October 22, 2024',
      readTime: '5 min read',
      category: 'Technology',
      excerpt: 'Digital transformation in government services: challenges faced, solutions implemented, and the road ahead.'
    },
    {
      title: 'Rural Connectivity: The Foundation of Agricultural Prosperity',
      date: 'October 5, 2024',
      readTime: '6 min read',
      category: 'Rural Development',
      excerpt: 'How improving road connectivity to agricultural markets can double farmer incomes and transform rural economies.'
    },
    {
      title: 'Mentoring the Next Generation of Civil Servants',
      date: 'September 18, 2024',
      readTime: '4 min read',
      category: 'Leadership',
      excerpt: 'Reflections on what it takes to succeed in public service and advice for young IAS officers beginning their journey.'
    },
    {
      title: 'Public-Private Partnerships: Finding the Right Balance',
      date: 'September 1, 2024',
      readTime: '7 min read',
      category: 'Policy',
      excerpt: 'Key considerations for structuring PPP projects that serve public interest while attracting private investment.'
    },
  ]

  const categories = [
    'All',
    'Infrastructure',
    'Governance',
    'Urban Development',
    'Rural Development',
    'Policy',
    'Technology',
    'Leadership'
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
                learned from three decades in public service.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="py-8 bg-cream-100 border-y border-cream-200">
        <Container>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  category === 'All'
                    ? 'bg-gold-500 text-navy-900'
                    : 'bg-cream-200 text-gray-700 hover:bg-cream-100'
                }`}
              >
                {category}
              </button>
            ))}
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
                    src={infrastructureImage}
                    alt="The Future of Infrastructure: Lessons from Samruddhi Mahamarg"
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

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-gold-500 text-gold-600 font-semibold rounded-lg hover:bg-gold-500 hover:text-navy-900 transition-all duration-300">
              Load More Articles
            </button>
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
