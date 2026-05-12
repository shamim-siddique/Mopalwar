import { useState } from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Building, Award, Monitor, Users, Landmark, TrendingUp } from 'lucide-react'

const careerData = [
  {
    year: '1982',
    title: 'Joined IRS',
    role: 'Indian Revenue Service',
    description: 'Began career in the Indian Revenue Service, developing expertise in financial administration and tax governance. Foundation year for a 40-year journey.',
    achievements: ['Foundation in public financial management', 'Tax policy implementation experience'],
    icon: Landmark,
    color: '#C5A059',
    type: 'foundation'
  },
  {
    year: '1983',
    title: 'Maharashtra State Service',
    role: 'Deputy Collector',
    description: 'Joined Maharashtra State Service as Deputy Collector, beginning the state administrative phase. Twelve years of grassroots district-level experience before IAS.',
    achievements: ['District-level governance exposure', 'Land revenue management expertise', 'Foundation in state administration'],
    icon: Building,
    color: '#C5A059',
    type: 'state-service'
  },
  {
    year: '1995',
    title: 'Inducted into IAS (1995 Batch)',
    role: 'Indian Administrative Service - Maharashtra Cadre',
    description: 'Selected for the prestigious Indian Administrative Service (1995 Batch), Maharashtra Cadre. Bringing 12 years of state service experience to the elite administrative cadre.',
    achievements: ['1995 Batch IAS appointment', 'Maharashtra Cadre allotment', 'Elite administrative cadre entry with grassroots foundation'],
    icon: Award,
    color: '#C5A059',
    type: 'ias'
  },
  {
    year: '2000-2003',
    title: 'Director of IT, Maharashtra',
    role: 'Mantralaya Digitization Initiative',
    description: 'Established the state\'s first IT department. Led the computerization and digital transformation of Maharashtra Secretariat (Mantralaya), pioneering e-governance.',
    achievements: ['Setup Maharashtra\'s first IT department', 'Mantralaya computerization', 'Established IT infrastructure standards', 'Pioneered paperless workflow systems'],
    icon: Monitor,
    color: '#C5A059',
    type: 'it'
  },
  {
    year: '2005-2009',
    title: 'Collector of Nanded',
    role: 'District Magistrate & Collector',
    description: 'Spearheaded the Guru-ta-Gaddi 300th Anniversary Urban Renewal Project. Transformed Nanded with ₹1,000+ Cr investment into a modern spiritual and cultural hub.',
    achievements: ['Guru-ta-Gaddi 300th Anniversary transformation', '₹1,000+ Cr urban renewal project', 'Heritage conservation initiatives', 'Comprehensive infrastructure modernization'],
    icon: Users,
    color: '#C5A059',
    type: 'collector'
  },
  {
    year: '2015-2023',
    title: 'VC & MD, MSRDC & DG Infrastructure War Room',
    role: 'Record 7 Extensions (2018-2023)',
    description: 'Appointed 2015 as Vice Chairman & MD of MSRDC. Post-retirement (2018), granted a record 7 contractual extensions due to indispensable execution skills. Served as Director General of CM\'s Infrastructure War Room.',
    achievements: ['Record 7 post-retirement extensions (2018-2023)', 'Samruddhi Mahamarg conceptualization & execution', '₹55,000 Cr flagship project delivery', '₹1.2 Lakh Cr project clearance acceleration', 'DG, Infrastructure War Room leadership'],
    icon: TrendingUp,
    color: '#C5A059',
    type: 'flagship',
    pulse: true
  },
  {
    year: '2024-Present',
    title: 'CMD, Hazoor Multi Projects Ltd & Chairman, Modern Engineering & Projects Ltd',
    role: 'Nariman Point, Mumbai',
    description: 'Leading private infrastructure development from Nariman Point, Mumbai. Bringing four decades of public sector expertise to corporate project execution through dual leadership roles.',
    achievements: ['CMD, Hazoor Multi Projects Ltd', 'Chairman, Modern Engineering & Projects Ltd', 'Private-public partnership leadership', 'Strategic infrastructure consulting', '2026 Corporate Vision'],
    icon: Briefcase,
    color: '#C5A059',
    type: 'corporate'
  }
]

const CareerTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [expandedId, setExpandedId] = useState(null)

  const isSpecialYear = (year) => {
    return year === '1995' || year === '2000-2003' || year === '2015-2023'
  }

  return (
    <div className="relative py-12">
      {/* Service Phase Legend - 2x2 Grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-10 text-xs max-w-xl mx-auto">
        <div className="flex items-center gap-1.5 justify-end">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
          <span className="text-gray-500">State Service (1982-1995)</span>
        </div>
        <div className="flex items-center gap-1.5 justify-start">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1a2332]" />
          <span className="text-gray-500">IAS Career (1995-2018)</span>
        </div>
        <div className="flex items-center gap-1.5 justify-end">
          <div className="w-2.5 h-2.5 rounded-full bg-[#1a2332]" />
          <span className="text-gray-500">Extensions & War Room (2018-2023)</span>
        </div>
        <div className="flex items-center gap-1.5 justify-start">
          <div className="w-2.5 h-2.5 rounded-full bg-[#C5A059]" />
          <span className="text-gray-500">Corporate (2024-Present)</span>
        </div>
      </div>

      {/* Progress Line Container */}
      <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-cream-200 md:-translate-x-1/2">
        {/* Animated Progress Fill */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-gold-500 to-gold-400"
          initial={{ height: '0%' }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>

      {/* Timeline Items - Enhanced Zigzag */}
      <div className="space-y-10 md:space-y-14">
        {careerData.map((item, index) => {
          const isLeft = index % 2 === 0
          const special = isSpecialYear(item.year)
          
          return (
            <motion.div
              key={item.year}
              initial={{ 
                opacity: 0, 
                x: isLeft ? -40 : 40,
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0,
              }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.08, 
                ease: [0.25, 0.46, 0.45, 0.94]
              }}
              className={`relative flex flex-col md:flex-row items-center gap-4 md:gap-0 ${
                isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Node with Animation */}
              <motion.div 
                className="absolute left-6 md:left-1/2 z-20 md:-translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 + 0.2, type: "spring", stiffness: 200 }}
              >
                {/* Pulse Effect for Key Milestones */}
                {item.pulse && (
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: item.color }}
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.4, 0, 0.4]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}
                <div
                  className={`rounded-full border-[3px] border-white shadow-md relative ${
                    special ? 'w-5 h-5' : 'w-3.5 h-3.5'
                  } ${item.pulse ? 'animate-pulse' : ''}`}
                  style={{ backgroundColor: item.color }}
                >
                  {/* Special Year Ring */}
                  {special && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-dashed"
                      style={{ borderColor: item.color }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  )}
                  {/* Extension Badge */}
                  {item.type === 'flagship' && (
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span className="px-2 py-0.5 bg-red-500 text-white text-[10px] font-bold rounded-full shadow-md">
                        7 Extensions
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>

              {/* Year Badge Side */}
              <div className={`pl-14 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-10 md:text-right' : 'md:pl-10 md:text-left'}`}>
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 + 0.15 }}
                >
                  <span
                    className={`inline-block px-4 py-1.5 font-bold rounded-lg text-white shadow-lg ${
                      special ? 'text-base' : 'text-sm'
                    }`}
                    style={{ 
                      backgroundColor: item.color,
                      boxShadow: special ? `0 6px 20px ${item.color}40` : undefined
                    }}
                  >
                    {item.year}
                  </span>
                  
                  {/* Special Year Label */}
                  {special && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 + 0.3 }}
                      className="mt-1.5 inline-block px-2.5 py-0.5 bg-gold-500/8 text-gold-600 text-[10px] font-semibold rounded-full"
                    >
                      {item.year === '1995' && 'IAS Entry Milestone'}
                      {item.year === '2000-2003' && 'IT Pioneer Era'}
                      {item.year === '2015-2023' && 'Flagship Leadership'}
                    </motion.div>
                  )}
                </motion.div>
              </div>

              {/* Content Card Side */}
              <div className={`pl-14 md:pl-0 md:w-1/2 ${isLeft ? 'md:pl-10' : 'md:pr-10'}`}>
                <motion.div
                  className={`bg-white rounded-2xl p-4 sm:p-5 shadow-md border cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    special ? 'border-gold-400/50' : 'border-cream-200/60'
                  }`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  onClick={() => setExpandedId(expandedId === index ? null : index)}
                  whileHover={{ 
                    y: -4, 
                    transition: { duration: 0.2 }
                  }}
                >
                  {/* Card Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className={`rounded-lg flex items-center justify-center shrink-0 ${
                        special ? 'w-11 h-11' : 'w-9 h-9'
                      }`}
                      style={{ backgroundColor: `${item.color}12` }}
                    >
                      <item.icon className={special ? 'w-5 h-5' : 'w-4 h-4'} style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-semibold text-navy-900 leading-snug ${special ? 'text-base' : 'text-sm'}`}>
                        {item.title}
                      </h3>
                      <p className="text-gold-600 text-xs font-medium">{item.role}</p>
                    </div>
                    {special && (
                      <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-navy-900 text-[10px] font-bold">★</span>
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>

                  {/* Achievements - Click to Expand */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: (activeIndex === index || expandedId === index) ? 'auto' : 0,
                      opacity: (activeIndex === index || expandedId === index) ? 1 : 0
                    }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-3 border-t border-cream-200/60">
                      <h4 className="text-xs font-semibold text-navy-900 mb-2 flex items-center gap-1.5">
                        <Award size={12} className="text-gold-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1.5">
                        {item.achievements.map((achievement, i) => (
                          <li 
                            key={i} 
                            className="flex items-start gap-2 text-xs text-gray-500 leading-relaxed"
                          >
                            <span className="w-1 h-1 rounded-full bg-gold-500 mt-1.5 shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  {/* Hint */}
                  <div className="mt-2 text-[10px] text-gray-400 flex items-center gap-1">
                    <span>Click or hover for details</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Career Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3"
      >
        {[
          { value: '40+', label: 'Years of Service (1983-2026)' },
          { value: '7', label: 'Record Post-Retirement Extensions' },
          { value: '1995', label: 'IAS Batch (12 Years State Service)' },
          { value: '₹1.2L+', label: 'Cr Projects Cleared' }
        ].map((stat, index) => (
          <div key={index} className="text-center p-4 bg-cream-50 rounded-2xl border border-cream-200/60">
            <p className="text-xl sm:text-2xl font-bold text-navy-900">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default CareerTimeline
