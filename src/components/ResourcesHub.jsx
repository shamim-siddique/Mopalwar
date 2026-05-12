import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Download } from 'lucide-react'

const resourceCategories = [
  { id: 'all', label: 'All Resources' },
  { id: 'policy', label: 'Policy & Legal' },
  { id: 'infrastructure', label: 'Infrastructure' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'technical', label: 'Technical Reports' }
]

const resources = [
  {
    id: 1,
    title: 'Samruddhi Mahamarg: A Case Study in Greenfield Development',
    category: 'infrastructure',
    type: 'Infrastructure',
    size: '2.8 MB',
    pages: '12 pages',
    date: '2023',
    summary: 'Technical whitepaper detailing engineering specs, design speed (150 kmph), and land acquisition model for the Mumbai-Nagpur Expressway.',
    description: 'This case study from IJIRSET provides comprehensive technical documentation of the Samruddhi Mahamarg project, including engineering specifications, design parameters, and the innovative land acquisition model that enabled rapid project execution.',
    pdfUrl: 'http://www.ijirset.com/upload/2023/may/419_Samruddhi_NC.pdf'
  },
  {
    id: 2,
    title: 'SEBI Regulation 30: Appointment of CMD',
    category: 'corporate',
    type: 'Corporate',
    size: '1.2 MB',
    pages: '8 pages',
    date: '2024-2026',
    summary: 'Legal disclosure confirming 2026 status as Chairman & Managing Director of Hazoor Multi Projects Ltd with strategic pipeline.',
    description: 'Official Board & CMD disclosure document confirming Radheshyam Mopalwar\'s appointment as Chairman and Managing Director. Contains verified brief profile mentioning IT Department setup and Groundwater roles. Includes company strategic project pipeline.',
    pdfUrl: 'https://hazoormultiproject.com/board-of-directors/'
  },
  {
    id: 3,
    title: 'MSRDC Consolidated Financials & Project Progress',
    category: 'corporate',
    type: 'Corporate',
    size: '4.5 MB',
    pages: '85 pages',
    date: '2018-2026',
    summary: 'Official auditing and progress reports providing financial benchmarks for ₹1.2 Lakh Cr+ projects.',
    description: 'Detailed financial statements and audit reports covering MSRDC operations. Includes project-wise expenditure analysis, revenue generation, toll data, and fiscal performance metrics. Provides financial and operational benchmarks for infrastructure delivery.',
    pdfUrl: 'https://msrdc.in/site/upload/pdf/ConsolidatedFinacialsMSRDC2018.pdf'
  },
  {
    id: 4,
    title: 'Balanced Regional Development Issues in Maharashtra',
    category: 'policy',
    type: 'Policy & Legal',
    size: '3.1 MB',
    pages: '42 pages',
    date: '2026',
    summary: 'Committee report citing institutional reforms and infrastructure focus areas managed during his tenure.',
    description: 'High-level committee report (Pages 5-10) discussing institutional reforms and infrastructure focus areas in Maharashtra. References the legacy of the Draft Groundwater Legislation and its impact on sustainable water resource governance frameworks.',
    pdfUrl: '#'
  }
]

const ResourcesHub = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredResources = activeCategory === 'all'
    ? resources
    : resources.filter(r => r.category === activeCategory)

  const handleDownload = (pdfUrl, title) => {
    window.open(pdfUrl, '_blank')
  }

  return (
    <div className="space-y-8">
      {/* Category Labels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap items-center gap-2 text-sm"
      >
        <span className="text-gray-500 font-medium">Categories:</span>
        {resourceCategories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`transition-all duration-300 ${
              activeCategory === category.id
                ? 'text-gold-600 font-semibold'
                : 'text-gray-700 hover:text-gold-600'
            }`}
          >
            {category.label}
            {index < resourceCategories.length - 1 && (
              <span className="text-gray-400 mx-2">|</span>
            )}
          </button>
        ))}
      </motion.div>

      {/* Resources Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="wait">
          {filteredResources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group h-full bg-cream-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-cream-200 hover:border-gold-500/30"
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Type & Size */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block px-3 py-1 bg-gold-500/10 text-gold-600 text-xs font-medium rounded-full">
                    {resource.type}
                  </span>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <FileText className="w-4 h-4" />
                    <span>{resource.size}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors line-clamp-2">
                  {resource.title}
                </h3>

                {/* Summary */}
                <p className="text-gold-600 text-sm font-medium mb-3">
                  {resource.summary}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {resource.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4 pb-4 border-b border-cream-200">
                  <span>{resource.pages}</span>
                  <span>•</span>
                  <span>{resource.date}</span>
                </div>

                {/* Download Button */}
                <button
                  onClick={() => handleDownload(resource.pdfUrl, resource.title)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-gold-500 text-navy-900 font-semibold rounded-lg hover:bg-gold-400 transition-all duration-300"
                >
                  <Download className="w-4 h-4" />
                  <span>Download PDF</span>
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </div>
  )
}

export default ResourcesHub
