import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, ExternalLink, Quote, Newspaper, Video, Calendar, ArrowRight, Shield, BookOpen } from 'lucide-react'

const mediaOutlets = [
  { name: 'Zee News', logo: 'ZN', color: '#C5A059' },
  { name: 'DNA', logo: 'DNA', color: '#C5A059' },
  { name: 'Construction World', logo: 'CW', color: '#C5A059' }
]

const pressArticles = [
  {
    id: 1,
    outlet: 'OneIndia',
    outletLogo: 'OI',
    color: '#C5A059',
    date: 'March 2026',
    headline: 'The Architect of Modern Maharashtra',
    caption: 'A deep-dive into the "Mopalwar Model" of engineering.',
    excerpt: 'An in-depth feature on Radheshyam Mopalwar\'s transformative impact on Maharashtra\'s infrastructure landscape, from the Samruddhi Mahamarg to the War Room governance model.',
    type: 'feature',
    featured: true,
    readTime: '8 min read',
    link: 'https://www.oneindia.com/partner-content/mopalwar-an-administrator-architect-leader-all-rolled-into-one-3664153.html',
    source: 'OneIndia Professional Archive'
  },
  {
    id: 2,
    outlet: 'Times of India',
    outletLogo: 'TOI',
    color: '#C5A059',
    date: 'February 2026',
    headline: "The War Room Execution Model",
    caption: 'How a special post was created for his expertise in speed and land acquisition.',
    excerpt: 'This report details his appointment as the Director General of the Infrastructure War Room and his specific role in clearing high-stakes bottlenecks for Maharashtra\'s biggest projects.',
    type: 'interview',
    featured: false,
    readTime: '5 min read',
    link: 'https://timesofindia.indiatimes.com/city/mumbai/maharashtra-radheshyam-mopalwar-named-dg-war-room-for-infra-projects/articleshow/93174402.cms',
    source: 'Times of India'
  },
  {
    id: 3,
    outlet: 'ScanX',
    outletLogo: 'SX',
    color: '#C5A059',
    date: 'January 2026',
    headline: 'From IAS to Corporate: A New Chapter in Infrastructure Leadership',
    caption: 'Official 2026 corporate status and CMD leadership report for Hazoor Multi Projects Ltd.',
    excerpt: 'Coverage of the transition from public service to leading Hazoor Multi Projects Ltd from Nariman Point, Mumbai, and the vision for private-public partnerships in 2026 and beyond.',
    type: 'news',
    featured: false,
    readTime: '4 min read',
    link: 'https://scanx.trade/stock-market-news/stocks/hazoor-multi-projects-limited-revises-timeline-for-subsidiary-s-ocd-conversion-to-march-2026/33823332',
    source: 'ScanX Trade News'
  }
]

const videoContent = [
  {
    id: 'n322zHbgAGE',
    title: 'Samruddhi Mahamarg: The Journey',
    duration: '12:45',
    thumbnail: 'https://img.youtube.com/vi/n322zHbgAGE/maxresdefault.jpg',
    views: '125K',
    description: 'Inside the minds that built world-class Nagpur-Mumbai Expressway - The Sustainability Network',
    source: 'The Sustainability Network'
  },
  {
    id: 'uwBJXmO_Xpk',
    title: 'War Room Governance Explained',
    duration: '8:30',
    thumbnail: 'https://img.youtube.com/vi/uwBJXmO_Xpk/maxresdefault.jpg',
    views: '89K',
    description: 'Mumbai Infrastructure And Realty Conclave - Megaprojects & Best Practices - Swarajya',
    source: 'Swarajya'
  },
  {
    id: 'Zx2fKDv30XA',
    title: 'Interview with Construction World',
    duration: '15:20',
    thumbnail: 'https://img.youtube.com/vi/Zx2fKDv30XA/maxresdefault.jpg',
    views: '67K',
    description: 'Vice Chairman and Managing Director of MSRDC - Career Journey - Spaciux',
    source: 'Spaciux'
  }
]

const PressMedia = () => {
  const [activeTab, setActiveTab] = useState('articles')
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <div className="space-y-12">
      {/* Integrity Notice */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-cream-100 border border-cream-200 p-6 rounded-xl mb-8"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center shrink-0">
            <Shield className="w-6 h-6 text-navy-900" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Official Exoneration (2017)</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              In 2017, Shri Radheshyam Mopalwar was fully cleared of all allegations by a high-level committee.
              The committee found that audio tapes presented against him were tampered with. He continues his
              service with unblemished integrity, now leading infrastructure development from Nariman Point, Mumbai.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-4">
        {[
          { id: 'articles', label: 'Press Articles', icon: Newspaper },
          { id: 'videos', label: 'Video Interviews', icon: Video }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gold-500 text-navy-900'
                : 'bg-cream-100 text-gray-600 hover:bg-cream-200'
            }`}
          >
            <tab.icon className="w-5 h-5" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Articles Tab */}
      {activeTab === 'articles' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pressArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group ${article.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full bg-cream-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#C5A059]"
              >
                {/* Card Header with Outlet Badge */}
                <div className="p-6 pb-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: article.color }}
                      >
                        <BookOpen className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-600">{article.outlet}</span>
                    </div>
                    {article.featured && (
                      <span className="px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-medium rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 pt-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                    {article.headline}
                  </h3>

                  <p className="text-[#C5A059] text-sm font-medium mb-2">
                    {article.caption}
                  </p>

                  <p className="text-gray-600 leading-relaxed text-sm line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  {/* Quote for Featured */}
                  {article.featured && (
                    <div className="mb-4 p-4 bg-navy-900/5 rounded-lg border-l-4 border-gold-500">
                      <Quote className="w-5 h-5 text-gold-500 mb-2" />
                      <p className="text-sm text-gray-700 italic">
                        "Mopalwar's approach represents a paradigm shift in how infrastructure projects can be executed in India..."
                      </p>
                    </div>
                  )}

                  {/* Read Full Feature Button */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-gold-500 text-navy-900 font-semibold rounded-lg group-hover:bg-gold-400 transition-all duration-300 w-fit">
                    <span>Read Full Feature</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>

                  {/* Source Footer */}
                  <div className="mt-4 pt-3 border-t border-cream-200">
                    <p className="text-xs text-gray-500">
                      Source: {article.source}
                    </p>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === 'videos' && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoContent.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="bg-cream-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                {/* Video Thumbnail */}
                <div className="relative aspect-video bg-cream-200">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />
                  <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-navy-900/30 transition-colors" />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-16 h-16 rounded-full bg-gold-500 flex items-center justify-center shadow-lg"
                    >
                      <Play className="w-8 h-8 text-navy-900 ml-1" fill="currentColor" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 text-white text-xs rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                    {video.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      {video.views} views
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/95 backdrop-blur-sm"
          onClick={() => setSelectedVideo(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-5xl w-full bg-[#001f3f] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#C5A059] flex items-center justify-center hover:bg-[#b8944f] transition-colors"
            >
              <span className="text-[#001f3f] text-xl font-bold">×</span>
            </button>

            {/* YouTube Embed */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0`}
                title={selectedVideo.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Info */}
            <div className="p-6 bg-[#001f3f]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-3 py-1 bg-[#C5A059]/20 border border-[#C5A059]/40 rounded-full text-[#C5A059] text-xs font-medium mb-3">
                    {selectedVideo.source}
                  </span>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {selectedVideo.description}
                  </p>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[#C5A059] text-[#001f3f] font-medium rounded-lg hover:bg-[#b8944f] transition-colors shrink-0"
                >
                  <ExternalLink className="w-4 h-4" />
                  Watch on YouTube
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

    </div>
  )
}

export default PressMedia
