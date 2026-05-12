import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Map, Clock, Shield, Trees, ZoomIn, X, Building2, Route, Users } from 'lucide-react'
import nagpurExpressImage from '../assets/images/Nagpur-Express_Highway.png'
import mumbaiPuneImage from '../assets/images/mumbai-pune_missing-link.png'
import nandedImage from '../assets/images/Nanded Urban Renewal.png'
import thaneCreekImage from '../assets/images/Thane Creek Bridge-3.png'
import warRoomImage from '../assets/images/CM Infrastructure War Room.png'
import infrastructureImage from '../assets/images/Infrastructure.png'

const projectData = [
  {
    id: 1,
    title: 'Samruddhi Mahamarg',
    category: 'Flagship Project',
    size: 'large',
    image: nagpurExpressImage,
    fastFact: '701 km | ₹55,000 Cr Investment',
    details: 'The Mumbai-Nagpur Super Communication Expressway. 10,000 hectares acquired with zero major protests - a national benchmark in land acquisition. Reduces travel time from 18 hours to 8 hours.',
    metrics: [
      { icon: Clock, value: '8 hrs', label: 'Travel Time' },
      { icon: Map, value: '24', label: 'Districts' },
      { icon: Shield, value: '0', label: 'Major Protests' }
    ]
  },
  {
    id: 2,
    title: 'Mumbai-Pune Missing Link',
    category: 'Engineering Marvel',
    size: 'medium',
    image: mumbaiPuneImage,
    fastFact: "World's Widest Tunnels",
    details: 'Massive tunneling project bypassing the Khandala ghat section. Features some of the widest tunnels in the world, eliminating traffic bottlenecks in the Sahyadri Ghats.',
    metrics: [
      { icon: Shield, value: 'Widest', label: 'Tunnels' },
      { icon: Clock, value: 'Bypass', label: 'Ghats' }
    ]
  },
  {
    id: 3,
    title: 'Nanded Urban Renewal',
    category: 'Urban Transformation',
    size: 'medium',
    image: nandedImage,
    fastFact: '₹1,000+ Cr Investment',
    details: 'Transformed Nanded for the Guru-ta-Gaddi 300th Anniversary (2008). Comprehensive urban renewal including heritage conservation, infrastructure modernization, and spiritual tourism development.',
    metrics: [
      { icon: Building2, value: '300th', label: 'Anniversary' },
      { icon: Trees, value: '₹1000Cr+', label: 'Investment' }
    ]
  },
  {
    id: 4,
    title: 'Thane Creek Bridge-3',
    category: 'Bridge Infrastructure',
    size: 'small',
    image: thaneCreekImage,
    fastFact: 'Mumbai-Navi Mumbai Gateway',
    details: 'A vital bridge project decongesting the entry gateway between Mumbai and Navi Mumbai. Expanding connectivity to the mainland and supporting regional economic integration.',
    metrics: [
      { icon: Route, value: 'Vital', label: 'Link' }
    ]
  },
  {
    id: 5,
    title: 'Zero-Protest Land Model',
    category: 'Innovation',
    size: 'small',
    image: infrastructureImage,
    fastFact: '10,000 Hectares | Zero Major Protests',
    details: 'Pioneered a conflict-free land acquisition model for Samruddhi Mahamarg. 10,000 hectares acquired without a single major protest - setting a national benchmark.',
    metrics: [
      { icon: Shield, value: '10K Ha', label: 'Acquired' },
      { icon: Users, value: '0', label: 'Protests' }
    ]
  },
  {
    id: 6,
    title: 'CM Infrastructure War Room',
    category: 'Governance',
    size: 'large',
    image: warRoomImage,
    fastFact: '₹1.2 Lakh Cr Projects Accelerated',
    details: 'As Director General, fast-tracked Metro, Coastal Road, MTHL (Atal Setu), and other critical projects. Revolutionary project clearance mechanism that eliminated bureaucratic delays.',
    metrics: [
      { icon: Clock, value: 'Fast', label: 'Clearance' },
      { icon: Building2, value: 'Metro+MTHL', label: 'Projects' }
    ]
  }
]

const ProjectGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)

  const getGridClass = (size) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2'
      case 'medium':
        return 'md:col-span-1 md:row-span-2'
      default:
        return 'md:col-span-1 md:row-span-1'
    }
  }

  return (
    <div className="relative">
      {/* Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
            className={`relative group cursor-pointer overflow-hidden rounded-2xl ${getGridClass(project.size)}`}
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
            onClick={() => setSelectedProject(project)}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-cream-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Light overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/75 via-navy-900/25 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between text-white">
              {/* Top: Category */}
              <div className="flex justify-between items-start">
                <span className="inline-block px-2.5 py-0.5 bg-gold-500/15 backdrop-blur-sm border border-gold-500/25 rounded-full text-[10px] font-medium">
                  {project.category}
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0, scale: hoveredId === project.id ? 1 : 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="w-8 h-8 rounded-full bg-gold-500 flex items-center justify-center"
                >
                  <ZoomIn size={16} className="text-navy-900" />
                </motion.div>
              </div>

              {/* Bottom: Title & Fast Fact */}
              <div>
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-1.5 leading-snug">{project.title}</h3>
                
                {/* Fast Fact - Always Visible */}
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold-500" />
                  <span className="text-gold-400 font-medium text-xs">{project.fastFact}</span>
                </div>

                {/* Expanded Details on Hover */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredId === project.id ? 'auto' : 0,
                    opacity: hoveredId === project.id ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-white/75 text-xs mb-3 line-clamp-2 leading-relaxed">
                    {project.details}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <metric.icon size={12} className="text-gold-500" />
                        <span className="text-xs">
                          <strong>{metric.value}</strong> <span className="text-white/60">{metric.label}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-gold-500/50 pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-900/95 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative max-w-3xl w-full bg-cream-50 rounded-2xl overflow-hidden shadow-2xl border border-cream-200/60"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/95 flex items-center justify-center hover:bg-white transition-colors shadow-md"
              >
                <X size={16} className="text-navy-900" />
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="h-52 md:h-auto min-h-[200px] bg-cream-200 relative">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 to-transparent md:bg-gradient-to-r md:from-transparent md:to-navy-900/10" />
                </div>

                {/* Content Side */}
                <div className="p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-0.5 bg-gold-500/8 text-gold-600 text-[10px] font-semibold rounded-full mb-3 uppercase tracking-wide">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-semibold text-navy-900 mb-3 leading-snug">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">
                    {selectedProject.details}
                  </p>

                  {/* Fast Fact Highlight */}
                  <div className="bg-navy-900 text-white p-3 rounded-xl mb-4">
                    <p className="text-[10px] text-gold-400 mb-0.5 uppercase tracking-wide">Fast Fact</p>
                    <p className="text-base font-semibold">{selectedProject.fastFact}</p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2.5 p-2.5 bg-cream-100 rounded-xl border border-cream-200/60">
                        <div className="w-8 h-8 rounded-lg bg-gold-500/8 flex items-center justify-center flex-shrink-0">
                          <metric.icon size={16} className="text-gold-500" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-navy-900">{metric.value}</p>
                          <p className="text-[10px] text-gray-500">{metric.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

export default ProjectGallery
