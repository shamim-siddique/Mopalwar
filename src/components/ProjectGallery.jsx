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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[200px]">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative group cursor-pointer overflow-hidden rounded-xl ${getGridClass(project.size)}`}
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
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/70 via-navy-900/20 to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
              {/* Top: Category */}
              <div className="flex justify-between items-start">
                <span className="inline-block px-3 py-1 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 rounded-full text-xs font-medium">
                  {project.category}
                </span>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0, scale: hoveredId === project.id ? 1 : 0.8 }}
                  className="w-10 h-10 rounded-full bg-gold-500 flex items-center justify-center"
                >
                  <ZoomIn className="w-5 h-5 text-navy-900" />
                </motion.div>
              </div>

              {/* Bottom: Title & Fast Fact */}
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{project.title}</h3>
                
                {/* Fast Fact - Always Visible */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-gold-500" />
                  <span className="text-gold-400 font-medium text-sm">{project.fastFact}</span>
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
                  <p className="text-white/80 text-sm mb-4 line-clamp-2">
                    {project.details}
                  </p>
                  
                  {/* Metrics */}
                  <div className="flex gap-4">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <metric.icon className="w-4 h-4 text-gold-500" />
                        <span className="text-sm">
                          <strong>{metric.value}</strong> {metric.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Hover Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-xl border-2 border-gold-500 pointer-events-none"
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
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-cream-50 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-navy-900" />
              </button>

              {/* Modal Content */}
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div
                  className="h-64 md:h-auto bg-cream-200 bg-cover bg-center"
                  style={{ backgroundImage: `url(${selectedProject.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Content Side */}
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-medium rounded-full mb-4">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-semibold text-navy-900 mb-4">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {selectedProject.details}
                  </p>

                  {/* Fast Fact Highlight */}
                  <div className="bg-navy-900 text-white p-4 rounded-lg mb-6">
                    <p className="text-sm text-gold-400 mb-1">Fast Fact</p>
                    <p className="text-xl font-semibold">{selectedProject.fastFact}</p>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    {selectedProject.metrics.map((metric, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-cream-100 rounded-lg">
                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center">
                          <metric.icon className="w-5 h-5 text-gold-500" />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-navy-900">{metric.value}</p>
                          <p className="text-xs text-gray-600">{metric.label}</p>
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
