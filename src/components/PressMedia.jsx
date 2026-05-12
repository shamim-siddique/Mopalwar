import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, Quote, Newspaper, Video, Calendar, Shield, BookOpen, X } from 'lucide-react'

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
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-cream-50 border border-cream-200/60 p-5 sm:p-6 rounded-2xl mb-8"
      >
        <div className="flex items-start gap-3.5">
          <div className="w-10 h-10 bg-gold-500/10 rounded-xl flex items-center justify-center shrink-0">
            <Shield className="w-5 h-5 text-gold-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-navy-900 mb-1">Official Exoneration (2017)</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              In 2017, Shri Radheshyam Mopalwar was fully cleared of all allegations by a high-level committee.
              The committee found that audio tapes presented against him were tampered with. He continues his
              service with unblemished integrity, now leading infrastructure development from Nariman Point, Mumbai.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <div className="flex justify-center gap-2">
        {[
          { id: 'articles', label: 'Press Articles', icon: Newspaper },
          { id: 'videos', label: 'Video Interviews', icon: Video }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-gradient-gold text-navy-900 shadow-md shadow-gold-500/20'
                : 'bg-cream-100 text-gray-500 hover:bg-cream-200 border border-cream-200/60'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Articles Tab */}
      <AnimatePresence mode="wait">
        {activeTab === 'articles' && (
          <motion.div
            key="articles"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {pressArticles.map((article, index) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className={`group ${article.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full flex-col bg-cream-50 rounded-2xl overflow-hidden border border-cream-200/60 shadow-sm hover:shadow-lg hover:shadow-gold-500/5 hover:border-gold-500/20 transition-all duration-300"
                >
                  {/* Card Header with Outlet Badge */}
                  <div className="p-5 pb-0">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2.5">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center text-white font-bold text-[10px]"
                          style={{ backgroundColor: article.color }}
                        >
                          <BookOpen size={14} />
                        </div>
                        <span className="text-xs font-medium text-gray-500">{article.outlet}</span>
                      </div>
                      {article.featured && (
                        <span className="px-2 py-0.5 bg-gold-500/8 text-gold-600 text-[10px] font-semibold rounded-full uppercase tracking-wide">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-1 flex-col p-5 pt-3">
                    <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {article.date}
                      </span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="text-base font-semibold text-navy-900 mb-1.5 group-hover:text-gold-600 transition-colors line-clamp-2 leading-snug">
                      {article.headline}
                    </h3>

                    <p className="text-gold-600 text-xs font-medium mb-2">
                      {article.caption}
                    </p>

                    <p className="text-gray-500 leading-relaxed text-xs line-clamp-3 mb-3">
                      {article.excerpt}
                    </p>

                    {/* Quote for Featured */}
                    {article.featured && (
                      <div className="mb-3 p-3 bg-navy-900/[0.03] rounded-xl border-l-[3px] border-gold-500">
                        <Quote size={14} className="text-gold-500 mb-1" />
                        <p className="text-xs text-gray-600 italic leading-relaxed">
                          "Mopalwar's approach represents a paradigm shift in how infrastructure projects can be executed in India..."
                        </p>
                      </div>
                    )}

                    {/* Read Full Feature Button */}
                    <div className="mt-auto">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-gold-500 to-gold-400 text-navy-900 text-xs font-semibold rounded-lg group-hover:shadow-md group-hover:shadow-gold-500/15 transition-all duration-300">
                        <span>Read Full Feature</span>
                        <ExternalLink size={12} />
                      </div>

                      {/* Source Footer */}
                      <div className="mt-3 pt-2.5 border-t border-cream-200/60">
                        <p className="text-[10px] text-gray-400">
                          Source: {article.source}
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Videos Tab */}
      <AnimatePresence mode="wait">
        {activeTab === 'videos' && (
          <motion.div
            key="videos"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5"
          >
            {videoContent.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="group cursor-pointer"
                onClick={() => setSelectedVideo(video)}
              >
                <div className="bg-cream-50 rounded-2xl overflow-hidden border border-cream-200/60 shadow-sm hover:shadow-lg hover:shadow-gold-500/5 hover:border-gold-500/20 transition-all duration-300">
                  {/* Video Thumbnail */}
                  <div className="relative aspect-video bg-cream-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${video.thumbnail})` }}
                    />
                    <div className="absolute inset-0 bg-navy-900/35 group-hover:bg-navy-900/25 transition-colors" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center shadow-lg shadow-gold-500/25"
                      >
                        <Play size={20} className="text-navy-900 ml-0.5" fill="currentColor" />
                      </motion.div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2.5 right-2.5 px-1.5 py-0.5 bg-black/70 text-white text-[10px] rounded-md font-medium">
                      {video.duration}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-4">
                    <h4 className="text-sm font-semibold text-navy-900 mb-1 group-hover:text-gold-600 transition-colors leading-snug">
                      {video.title}
                    </h4>
                    <p className="text-xs text-gray-500 mb-2 line-clamp-2 leading-relaxed">
                      {video.description}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Play size={12} />
                        {video.views} views
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/90 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-4xl w-full bg-navy-950 rounded-2xl overflow-hidden shadow-2xl border border-navy-800/50"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center hover:bg-gold-400 transition-colors"
              >
                <X size={16} className="text-navy-900" />
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
              <div className="p-5 bg-navy-950">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 bg-gold-500/10 border border-gold-500/20 rounded-full text-gold-500 text-[10px] font-semibold mb-2">
                      {selectedVideo.source}
                    </span>
                    <h3 className="text-base font-semibold text-white mb-1 leading-snug">
                      {selectedVideo.title}
                    </h3>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {selectedVideo.description}
                    </p>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${selectedVideo.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gold-500 text-navy-900 text-xs font-semibold rounded-lg hover:bg-gold-400 transition-colors shrink-0"
                  >
                    <ExternalLink size={12} />
                    YouTube
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default PressMedia
